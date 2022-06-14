/*! For license information please see app-9a5f740bfa1a6497b1f0.js.LICENSE.txt */
;(self.webpackChunkgatsby_starter_default =
  self.webpackChunkgatsby_starter_default || []).push([
  [143],
  {
    7228: function (t) {
      ;(t.exports = function (t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
        return r
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    2858: function (t) {
      ;(t.exports = function (t) {
        if (Array.isArray(t)) return t
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    1506: function (t) {
      ;(t.exports = function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return t
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    4575: function (t) {
      ;(t.exports = function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function")
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    3913: function (t) {
      function e(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      ;(t.exports = function (t, n, r) {
        return (
          n && e(t.prototype, n),
          r && e(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        )
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    9713: function (t) {
      ;(t.exports = function (t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        )
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    7154: function (t) {
      function e() {
        return (
          (t.exports = e =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
              }
              return t
            }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          e.apply(this, arguments)
        )
      }
      ;(t.exports = e),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    9754: function (t) {
      function e(n) {
        return (
          (t.exports = e =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t)
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          e(n)
        )
      }
      ;(t.exports = e),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    2205: function (t, e, n) {
      var r = n(9489)
      ;(t.exports = function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          )
        ;(t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && r(t, e)
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    5354: function (t, e, n) {
      var r = n(9489)
      ;(t.exports = function (t, e) {
        ;(t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          r(t, e)
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    5318: function (t) {
      ;(t.exports = function (t) {
        return t && t.__esModule ? t : { default: t }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    6860: function (t) {
      ;(t.exports = function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t)
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    3884: function (t) {
      ;(t.exports = function (t, e) {
        var n =
          null == t
            ? null
            : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"]
        if (null != n) {
          var r,
            o,
            a = [],
            i = !0,
            s = !1
          try {
            for (
              n = n.call(t);
              !(i = (r = n.next()).done) &&
              (a.push(r.value), !e || a.length !== e);
              i = !0
            );
          } catch (c) {
            ;(s = !0), (o = c)
          } finally {
            try {
              i || null == n.return || n.return()
            } finally {
              if (s) throw o
            }
          }
          return a
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    521: function (t) {
      ;(t.exports = function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        )
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    6479: function (t, e, n) {
      var r = n(7316)
      ;(t.exports = function (t, e) {
        if (null == t) return {}
        var n,
          o,
          a = r(t, e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t)
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (a[n] = t[n]))
        }
        return a
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    7316: function (t) {
      ;(t.exports = function (t, e) {
        if (null == t) return {}
        var n,
          r,
          o = {},
          a = Object.keys(t)
        for (r = 0; r < a.length; r++)
          (n = a[r]), e.indexOf(n) >= 0 || (o[n] = t[n])
        return o
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    8585: function (t, e, n) {
      var r = n(8).default,
        o = n(1506)
      ;(t.exports = function (t, e) {
        if (e && ("object" === r(e) || "function" == typeof e)) return e
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          )
        return o(t)
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    9489: function (t) {
      function e(n, r) {
        return (
          (t.exports = e =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t
            }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          e(n, r)
        )
      }
      ;(t.exports = e),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    3038: function (t, e, n) {
      var r = n(2858),
        o = n(3884),
        a = n(379),
        i = n(521)
      ;(t.exports = function (t, e) {
        return r(t) || o(t, e) || a(t, e) || i()
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    5179: function (t) {
      ;(t.exports = function (t, e) {
        return e || (e = t.slice(0)), (t.raw = e), t
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    8551: function (t, e, n) {
      var r = n(2858),
        o = n(6860),
        a = n(379),
        i = n(521)
      ;(t.exports = function (t) {
        return r(t) || o(t) || a(t) || i()
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    8: function (t) {
      function e(n) {
        return (
          (t.exports = e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          e(n)
        )
      }
      ;(t.exports = e),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    379: function (t, e, n) {
      var r = n(7228)
      ;(t.exports = function (t, e) {
        if (t) {
          if ("string" == typeof t) return r(t, e)
          var n = Object.prototype.toString.call(t).slice(8, -1)
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(t, e)
              : void 0
          )
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    },
    4694: function (t, e, n) {
      "use strict"
      function r(t) {
        return (
          (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t
                }),
          r(t)
        )
      }
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function a(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        )
      }
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n)
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
              })
            )),
            r.forEach(function (e) {
              a(t, e, n[e])
            })
        }
        return t
      }
      function s(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t
          })(t) ||
          (function (t, e) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0
            try {
              for (
                var i, s = t[Symbol.iterator]();
                !(r = (i = s.next()).done) &&
                (n.push(i.value), !e || n.length !== e);
                r = !0
              );
            } catch (c) {
              ;(o = !0), (a = c)
            } finally {
              try {
                r || null == s.return || s.return()
              } finally {
                if (o) throw a
              }
            }
            return n
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            )
          })()
        )
      }
      function c(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) {
              for (var e = 0, n = new Array(t.length); e < t.length; e++)
                n[e] = t[e]
              return n
            }
          })(t) ||
          (function (t) {
            if (
              Symbol.iterator in Object(t) ||
              "[object Arguments]" === Object.prototype.toString.call(t)
            )
              return Array.from(t)
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            )
          })()
        )
      }
      n.r(e),
        n.d(e, {
          icon: function () {
            return Ie
          },
          noAuto: function () {
            return Le
          },
          config: function () {
            return z
          },
          toHtml: function () {
            return Qt
          },
          layer: function () {
            return Fe
          },
          text: function () {
            return Me
          },
          counter: function () {
            return Te
          },
          library: function () {
            return Ce
          },
          dom: function () {
            return Ae
          },
          parse: function () {
            return De
          },
          findIconDefinition: function () {
            return Re
          },
        })
      var u = function () {},
        l = {},
        f = {},
        p = null,
        d = { mark: u, measure: u }
      try {
        "undefined" != typeof window && (l = window),
          "undefined" != typeof document && (f = document),
          "undefined" != typeof MutationObserver && (p = MutationObserver),
          "undefined" != typeof performance && (d = performance)
      } catch (We) {}
      var h = (l.navigator || {}).userAgent,
        g = void 0 === h ? "" : h,
        v = l,
        m = f,
        y = p,
        b = d,
        w =
          (v.document,
          !!m.documentElement &&
            !!m.head &&
            "function" == typeof m.addEventListener &&
            "function" == typeof m.createElement),
        x = ~g.indexOf("MSIE") || ~g.indexOf("Trident/"),
        O = "svg-inline--fa",
        k = "data-fa-i2svg",
        P = "data-fa-pseudo-element",
        S = "fontawesome-i2svg",
        j = ["HTML", "HEAD", "STYLE", "SCRIPT"],
        E = (function () {
          try {
            return !0
          } catch (We) {
            return !1
          }
        })(),
        R = {
          fas: "solid",
          far: "regular",
          fal: "light",
          fad: "duotone",
          fab: "brands",
          fak: "kit",
          fa: "solid",
        },
        _ = {
          solid: "fas",
          regular: "far",
          light: "fal",
          duotone: "fad",
          brands: "fab",
          kit: "fak",
        },
        C = "fa-layers-text",
        L =
          /Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/i,
        N = { 900: "fas", 400: "far", normal: "far", 300: "fal" },
        A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        D = A.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        I = [
          "class",
          "data-prefix",
          "data-icon",
          "data-fa-transform",
          "data-fa-mask",
        ],
        M = {
          GROUP: "group",
          SWAP_OPACITY: "swap-opacity",
          PRIMARY: "primary",
          SECONDARY: "secondary",
        },
        T = [
          "xs",
          "sm",
          "lg",
          "fw",
          "ul",
          "li",
          "border",
          "pull-left",
          "pull-right",
          "spin",
          "pulse",
          "rotate-90",
          "rotate-180",
          "rotate-270",
          "flip-horizontal",
          "flip-vertical",
          "flip-both",
          "stack",
          "stack-1x",
          "stack-2x",
          "inverse",
          "layers",
          "layers-text",
          "layers-counter",
          M.GROUP,
          M.SWAP_OPACITY,
          M.PRIMARY,
          M.SECONDARY,
        ]
          .concat(
            A.map(function (t) {
              return "".concat(t, "x")
            })
          )
          .concat(
            D.map(function (t) {
              return "w-".concat(t)
            })
          ),
        F = v.FontAwesomeConfig || {}
      if (m && "function" == typeof m.querySelector) {
        ;[
          ["data-family-prefix", "familyPrefix"],
          ["data-replacement-class", "replacementClass"],
          ["data-auto-replace-svg", "autoReplaceSvg"],
          ["data-auto-add-css", "autoAddCss"],
          ["data-auto-a11y", "autoA11y"],
          ["data-search-pseudo-elements", "searchPseudoElements"],
          ["data-observe-mutations", "observeMutations"],
          ["data-mutate-approach", "mutateApproach"],
          ["data-keep-original-source", "keepOriginalSource"],
          ["data-measure-performance", "measurePerformance"],
          ["data-show-missing-icons", "showMissingIcons"],
        ].forEach(function (t) {
          var e = s(t, 2),
            n = e[0],
            r = e[1],
            o = (function (t) {
              return "" === t || ("false" !== t && ("true" === t || t))
            })(
              (function (t) {
                var e = m.querySelector("script[" + t + "]")
                if (e) return e.getAttribute(t)
              })(n)
            )
          null != o && (F[r] = o)
        })
      }
      var U = i(
        {},
        {
          familyPrefix: "fa",
          replacementClass: O,
          autoReplaceSvg: !0,
          autoAddCss: !0,
          autoA11y: !0,
          searchPseudoElements: !1,
          observeMutations: !0,
          mutateApproach: "async",
          keepOriginalSource: !0,
          measurePerformance: !1,
          showMissingIcons: !0,
        },
        F
      )
      U.autoReplaceSvg || (U.observeMutations = !1)
      var z = i({}, U)
      v.FontAwesomeConfig = z
      var W = v || {}
      W.___FONT_AWESOME___ || (W.___FONT_AWESOME___ = {}),
        W.___FONT_AWESOME___.styles || (W.___FONT_AWESOME___.styles = {}),
        W.___FONT_AWESOME___.hooks || (W.___FONT_AWESOME___.hooks = {}),
        W.___FONT_AWESOME___.shims || (W.___FONT_AWESOME___.shims = [])
      var H = W.___FONT_AWESOME___,
        q = [],
        V = !1
      function B(t) {
        w && (V ? setTimeout(t, 0) : q.push(t))
      }
      w &&
        ((V = (
          m.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/
        ).test(m.readyState)) ||
          m.addEventListener("DOMContentLoaded", function t() {
            m.removeEventListener("DOMContentLoaded", t),
              (V = 1),
              q.map(function (t) {
                return t()
              })
          }))
      var K,
        J = "pending",
        Q = "settled",
        Y = "fulfilled",
        G = "rejected",
        Z = function () {},
        $ =
          void 0 !== n.g &&
          void 0 !== n.g.process &&
          "function" == typeof n.g.process.emit,
        X = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
        tt = []
      function et() {
        for (var t = 0; t < tt.length; t++) tt[t][0](tt[t][1])
        ;(tt = []), (K = !1)
      }
      function nt(t, e) {
        tt.push([t, e]), K || ((K = !0), X(et, 0))
      }
      function rt(t) {
        var e = t.owner,
          n = e._state,
          r = e._data,
          o = t[n],
          a = t.then
        if ("function" == typeof o) {
          n = Y
          try {
            r = o(r)
          } catch (We) {
            st(a, We)
          }
        }
        ot(a, r) || (n === Y && at(a, r), n === G && st(a, r))
      }
      function ot(t, e) {
        var n
        try {
          if (t === e)
            throw new TypeError(
              "A promises callback cannot return that same promise."
            )
          if (e && ("function" == typeof e || "object" === r(e))) {
            var o = e.then
            if ("function" == typeof o)
              return (
                o.call(
                  e,
                  function (r) {
                    n || ((n = !0), e === r ? it(t, r) : at(t, r))
                  },
                  function (e) {
                    n || ((n = !0), st(t, e))
                  }
                ),
                !0
              )
          }
        } catch (We) {
          return n || st(t, We), !0
        }
        return !1
      }
      function at(t, e) {
        ;(t !== e && ot(t, e)) || it(t, e)
      }
      function it(t, e) {
        t._state === J && ((t._state = Q), (t._data = e), nt(ut, t))
      }
      function st(t, e) {
        t._state === J && ((t._state = Q), (t._data = e), nt(lt, t))
      }
      function ct(t) {
        t._then = t._then.forEach(rt)
      }
      function ut(t) {
        ;(t._state = Y), ct(t)
      }
      function lt(t) {
        ;(t._state = G),
          ct(t),
          !t._handled && $ && n.g.process.emit("unhandledRejection", t._data, t)
      }
      function ft(t) {
        n.g.process.emit("rejectionHandled", t)
      }
      function pt(t) {
        if ("function" != typeof t)
          throw new TypeError("Promise resolver " + t + " is not a function")
        if (this instanceof pt == !1)
          throw new TypeError(
            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
          )
        ;(this._then = []),
          (function (t, e) {
            function n(t) {
              st(e, t)
            }
            try {
              t(function (t) {
                at(e, t)
              }, n)
            } catch (We) {
              n(We)
            }
          })(t, this)
      }
      ;(pt.prototype = {
        constructor: pt,
        _state: J,
        _then: null,
        _data: void 0,
        _handled: !1,
        then: function (t, e) {
          var n = {
            owner: this,
            then: new this.constructor(Z),
            fulfilled: t,
            rejected: e,
          }
          return (
            (!e && !t) ||
              this._handled ||
              ((this._handled = !0), this._state === G && $ && nt(ft, this)),
            this._state === Y || this._state === G
              ? nt(rt, n)
              : this._then.push(n),
            n.then
          )
        },
        catch: function (t) {
          return this.then(null, t)
        },
      }),
        (pt.all = function (t) {
          if (!Array.isArray(t))
            throw new TypeError("You must pass an array to Promise.all().")
          return new pt(function (e, n) {
            var r = [],
              o = 0
            function a(t) {
              return (
                o++,
                function (n) {
                  ;(r[t] = n), --o || e(r)
                }
              )
            }
            for (var i, s = 0; s < t.length; s++)
              (i = t[s]) && "function" == typeof i.then
                ? i.then(a(s), n)
                : (r[s] = i)
            o || e(r)
          })
        }),
        (pt.race = function (t) {
          if (!Array.isArray(t))
            throw new TypeError("You must pass an array to Promise.race().")
          return new pt(function (e, n) {
            for (var r, o = 0; o < t.length; o++)
              (r = t[o]) && "function" == typeof r.then ? r.then(e, n) : e(r)
          })
        }),
        (pt.resolve = function (t) {
          return t && "object" === r(t) && t.constructor === pt
            ? t
            : new pt(function (e) {
                e(t)
              })
        }),
        (pt.reject = function (t) {
          return new pt(function (e, n) {
            n(t)
          })
        })
      var dt = "function" == typeof Promise ? Promise : pt,
        ht = 16,
        gt = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 }
      function vt(t) {
        if (t && w) {
          var e = m.createElement("style")
          e.setAttribute("type", "text/css"), (e.innerHTML = t)
          for (
            var n = m.head.childNodes, r = null, o = n.length - 1;
            o > -1;
            o--
          ) {
            var a = n[o],
              i = (a.tagName || "").toUpperCase()
            ;["STYLE", "LINK"].indexOf(i) > -1 && (r = a)
          }
          return m.head.insertBefore(e, r), t
        }
      }
      function mt() {
        for (var t = 12, e = ""; t-- > 0; )
          e += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[
            (62 * Math.random()) | 0
          ]
        return e
      }
      function yt(t) {
        for (var e = [], n = (t || []).length >>> 0; n--; ) e[n] = t[n]
        return e
      }
      function bt(t) {
        return t.classList
          ? yt(t.classList)
          : (t.getAttribute("class") || "").split(" ").filter(function (t) {
              return t
            })
      }
      function wt(t, e) {
        var n,
          r = e.split("-"),
          o = r[0],
          a = r.slice(1).join("-")
        return o !== t || "" === a || ((n = a), ~T.indexOf(n)) ? null : a
      }
      function xt(t) {
        return ""
          .concat(t)
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
      }
      function Ot(t) {
        return Object.keys(t || {}).reduce(function (e, n) {
          return e + "".concat(n, ": ").concat(t[n], ";")
        }, "")
      }
      function kt(t) {
        return (
          t.size !== gt.size ||
          t.x !== gt.x ||
          t.y !== gt.y ||
          t.rotate !== gt.rotate ||
          t.flipX ||
          t.flipY
        )
      }
      function Pt(t) {
        var e = t.transform,
          n = t.containerWidth,
          r = t.iconWidth,
          o = { transform: "translate(".concat(n / 2, " 256)") },
          a = "translate(".concat(32 * e.x, ", ").concat(32 * e.y, ") "),
          i = "scale("
            .concat((e.size / 16) * (e.flipX ? -1 : 1), ", ")
            .concat((e.size / 16) * (e.flipY ? -1 : 1), ") "),
          s = "rotate(".concat(e.rotate, " 0 0)")
        return {
          outer: o,
          inner: { transform: "".concat(a, " ").concat(i, " ").concat(s) },
          path: { transform: "translate(".concat((r / 2) * -1, " -256)") },
        }
      }
      var St = { x: 0, y: 0, width: "100%", height: "100%" }
      function jt(t) {
        var e =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
        return (
          t.attributes &&
            (t.attributes.fill || e) &&
            (t.attributes.fill = "black"),
          t
        )
      }
      function Et(t) {
        var e = t.icons,
          n = e.main,
          r = e.mask,
          o = t.prefix,
          a = t.iconName,
          s = t.transform,
          c = t.symbol,
          u = t.title,
          l = t.maskId,
          f = t.titleId,
          p = t.extra,
          d = t.watchable,
          h = void 0 !== d && d,
          g = r.found ? r : n,
          v = g.width,
          m = g.height,
          y = "fak" === o,
          b = y ? "" : "fa-w-".concat(Math.ceil((v / m) * 16)),
          w = [
            z.replacementClass,
            a ? "".concat(z.familyPrefix, "-").concat(a) : "",
            b,
          ]
            .filter(function (t) {
              return -1 === p.classes.indexOf(t)
            })
            .filter(function (t) {
              return "" !== t || !!t
            })
            .concat(p.classes)
            .join(" "),
          x = {
            children: [],
            attributes: i({}, p.attributes, {
              "data-prefix": o,
              "data-icon": a,
              class: w,
              role: p.attributes.role || "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 ".concat(v, " ").concat(m),
            }),
          },
          O =
            y && !~p.classes.indexOf("fa-fw")
              ? { width: "".concat((v / m) * 16 * 0.0625, "em") }
              : {}
        h && (x.attributes[k] = ""),
          u &&
            x.children.push({
              tag: "title",
              attributes: {
                id:
                  x.attributes["aria-labelledby"] || "title-".concat(f || mt()),
              },
              children: [u],
            })
        var P = i({}, x, {
            prefix: o,
            iconName: a,
            main: n,
            mask: r,
            maskId: l,
            transform: s,
            symbol: c,
            styles: i({}, O, p.styles),
          }),
          S =
            r.found && n.found
              ? (function (t) {
                  var e,
                    n = t.children,
                    r = t.attributes,
                    o = t.main,
                    a = t.mask,
                    s = t.maskId,
                    c = t.transform,
                    u = o.width,
                    l = o.icon,
                    f = a.width,
                    p = a.icon,
                    d = Pt({ transform: c, containerWidth: f, iconWidth: u }),
                    h = {
                      tag: "rect",
                      attributes: i({}, St, { fill: "white" }),
                    },
                    g = l.children ? { children: l.children.map(jt) } : {},
                    v = {
                      tag: "g",
                      attributes: i({}, d.inner),
                      children: [
                        jt(
                          i(
                            {
                              tag: l.tag,
                              attributes: i({}, l.attributes, d.path),
                            },
                            g
                          )
                        ),
                      ],
                    },
                    m = { tag: "g", attributes: i({}, d.outer), children: [v] },
                    y = "mask-".concat(s || mt()),
                    b = "clip-".concat(s || mt()),
                    w = {
                      tag: "mask",
                      attributes: i({}, St, {
                        id: y,
                        maskUnits: "userSpaceOnUse",
                        maskContentUnits: "userSpaceOnUse",
                      }),
                      children: [h, m],
                    },
                    x = {
                      tag: "defs",
                      children: [
                        {
                          tag: "clipPath",
                          attributes: { id: b },
                          children: ((e = p), "g" === e.tag ? e.children : [e]),
                        },
                        w,
                      ],
                    }
                  return (
                    n.push(x, {
                      tag: "rect",
                      attributes: i(
                        {
                          fill: "currentColor",
                          "clip-path": "url(#".concat(b, ")"),
                          mask: "url(#".concat(y, ")"),
                        },
                        St
                      ),
                    }),
                    { children: n, attributes: r }
                  )
                })(P)
              : (function (t) {
                  var e = t.children,
                    n = t.attributes,
                    r = t.main,
                    o = t.transform,
                    a = Ot(t.styles)
                  if ((a.length > 0 && (n.style = a), kt(o))) {
                    var s = Pt({
                      transform: o,
                      containerWidth: r.width,
                      iconWidth: r.width,
                    })
                    e.push({
                      tag: "g",
                      attributes: i({}, s.outer),
                      children: [
                        {
                          tag: "g",
                          attributes: i({}, s.inner),
                          children: [
                            {
                              tag: r.icon.tag,
                              children: r.icon.children,
                              attributes: i({}, r.icon.attributes, s.path),
                            },
                          ],
                        },
                      ],
                    })
                  } else e.push(r.icon)
                  return { children: e, attributes: n }
                })(P),
          j = S.children,
          E = S.attributes
        return (
          (P.children = j),
          (P.attributes = E),
          c
            ? (function (t) {
                var e = t.prefix,
                  n = t.iconName,
                  r = t.children,
                  o = t.attributes,
                  a = t.symbol
                return [
                  {
                    tag: "svg",
                    attributes: { style: "display: none;" },
                    children: [
                      {
                        tag: "symbol",
                        attributes: i({}, o, {
                          id:
                            !0 === a
                              ? ""
                                  .concat(e, "-")
                                  .concat(z.familyPrefix, "-")
                                  .concat(n)
                              : a,
                        }),
                        children: r,
                      },
                    ],
                  },
                ]
              })(P)
            : (function (t) {
                var e = t.children,
                  n = t.main,
                  r = t.mask,
                  o = t.attributes,
                  a = t.styles,
                  s = t.transform
                if (kt(s) && n.found && !r.found) {
                  var c = { x: n.width / n.height / 2, y: 0.5 }
                  o.style = Ot(
                    i({}, a, {
                      "transform-origin": ""
                        .concat(c.x + s.x / 16, "em ")
                        .concat(c.y + s.y / 16, "em"),
                    })
                  )
                }
                return [{ tag: "svg", attributes: o, children: e }]
              })(P)
        )
      }
      function Rt(t) {
        var e = t.content,
          n = t.width,
          r = t.height,
          o = t.transform,
          a = t.title,
          s = t.extra,
          c = t.watchable,
          u = void 0 !== c && c,
          l = i({}, s.attributes, a ? { title: a } : {}, {
            class: s.classes.join(" "),
          })
        u && (l[k] = "")
        var f = i({}, s.styles)
        kt(o) &&
          ((f.transform = (function (t) {
            var e = t.transform,
              n = t.width,
              r = void 0 === n ? 16 : n,
              o = t.height,
              a = void 0 === o ? 16 : o,
              i = t.startCentered,
              s = void 0 !== i && i,
              c = ""
            return (
              (c +=
                s && x
                  ? "translate("
                      .concat(e.x / ht - r / 2, "em, ")
                      .concat(e.y / ht - a / 2, "em) ")
                  : s
                  ? "translate(calc(-50% + "
                      .concat(e.x / ht, "em), calc(-50% + ")
                      .concat(e.y / ht, "em)) ")
                  : "translate("
                      .concat(e.x / ht, "em, ")
                      .concat(e.y / ht, "em) ")),
              (c += "scale("
                .concat((e.size / ht) * (e.flipX ? -1 : 1), ", ")
                .concat((e.size / ht) * (e.flipY ? -1 : 1), ") ")),
              c + "rotate(".concat(e.rotate, "deg) ")
            )
          })({ transform: o, startCentered: !0, width: n, height: r })),
          (f["-webkit-transform"] = f.transform))
        var p = Ot(f)
        p.length > 0 && (l.style = p)
        var d = []
        return (
          d.push({ tag: "span", attributes: l, children: [e] }),
          a &&
            d.push({
              tag: "span",
              attributes: { class: "sr-only" },
              children: [a],
            }),
          d
        )
      }
      function _t(t) {
        var e = t.content,
          n = t.title,
          r = t.extra,
          o = i({}, r.attributes, n ? { title: n } : {}, {
            class: r.classes.join(" "),
          }),
          a = Ot(r.styles)
        a.length > 0 && (o.style = a)
        var s = []
        return (
          s.push({ tag: "span", attributes: o, children: [e] }),
          n &&
            s.push({
              tag: "span",
              attributes: { class: "sr-only" },
              children: [n],
            }),
          s
        )
      }
      var Ct = function () {},
        Lt =
          z.measurePerformance && b && b.mark && b.measure
            ? b
            : { mark: Ct, measure: Ct },
        Nt = 'FA "5.15.4"',
        At = function (t) {
          Lt.mark("".concat(Nt, " ").concat(t, " ends")),
            Lt.measure(
              "".concat(Nt, " ").concat(t),
              "".concat(Nt, " ").concat(t, " begins"),
              "".concat(Nt, " ").concat(t, " ends")
            )
        },
        Dt = function (t) {
          return (
            Lt.mark("".concat(Nt, " ").concat(t, " begins")),
            function () {
              return At(t)
            }
          )
        },
        It = function (t, e, n, r) {
          var o,
            a,
            i,
            s = Object.keys(t),
            c = s.length,
            u =
              void 0 !== r
                ? (function (t, e) {
                    return function (n, r, o, a) {
                      return t.call(e, n, r, o, a)
                    }
                  })(e, r)
                : e
          for (
            void 0 === n ? ((o = 1), (i = t[s[0]])) : ((o = 0), (i = n));
            o < c;
            o++
          )
            i = u(i, t[(a = s[o])], a, t)
          return i
        }
      function Mt(t) {
        for (var e = "", n = 0; n < t.length; n++) {
          e += ("000" + t.charCodeAt(n).toString(16)).slice(-4)
        }
        return e
      }
      function Tt(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.skipHooks,
          o = void 0 !== r && r,
          a = Object.keys(e).reduce(function (t, n) {
            var r = e[n]
            return !!r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t
          }, {})
        "function" != typeof H.hooks.addPack || o
          ? (H.styles[t] = i({}, H.styles[t] || {}, a))
          : H.hooks.addPack(t, a),
          "fas" === t && Tt("fa", e)
      }
      var Ft = H.styles,
        Ut = H.shims,
        zt = {},
        Wt = {},
        Ht = {},
        qt = function () {
          var t = function (t) {
            return It(
              Ft,
              function (e, n, r) {
                return (e[r] = It(n, t, {})), e
              },
              {}
            )
          }
          ;(zt = t(function (t, e, n) {
            return e[3] && (t[e[3]] = n), t
          })),
            (Wt = t(function (t, e, n) {
              var r = e[2]
              return (
                (t[n] = n),
                r.forEach(function (e) {
                  t[e] = n
                }),
                t
              )
            }))
          var e = "far" in Ft
          Ht = It(
            Ut,
            function (t, n) {
              var r = n[0],
                o = n[1],
                a = n[2]
              return (
                "far" !== o || e || (o = "fas"),
                (t[r] = { prefix: o, iconName: a }),
                t
              )
            },
            {}
          )
        }
      function Vt(t, e) {
        return (zt[t] || {})[e]
      }
      qt()
      var Bt = H.styles
      function Kt(t) {
        return t.reduce(
          function (t, e) {
            var n = wt(z.familyPrefix, e)
            if (Bt[e]) t.prefix = e
            else if (z.autoFetchSvg && Object.keys(R).indexOf(e) > -1)
              t.prefix = e
            else if (n) {
              var r =
                "fa" === t.prefix
                  ? Ht[n] || { prefix: null, iconName: null }
                  : {}
              ;(t.iconName = r.iconName || n), (t.prefix = r.prefix || t.prefix)
            } else
              e !== z.replacementClass &&
                0 !== e.indexOf("fa-w-") &&
                t.rest.push(e)
            return t
          },
          { prefix: null, iconName: null, rest: [] }
        )
      }
      function Jt(t, e, n) {
        if (t && t[e] && t[e][n])
          return { prefix: e, iconName: n, icon: t[e][n] }
      }
      function Qt(t) {
        var e = t.tag,
          n = t.attributes,
          r = void 0 === n ? {} : n,
          o = t.children,
          a = void 0 === o ? [] : o
        return "string" == typeof t
          ? xt(t)
          : "<"
              .concat(e, " ")
              .concat(
                (function (t) {
                  return Object.keys(t || {})
                    .reduce(function (e, n) {
                      return e + "".concat(n, '="').concat(xt(t[n]), '" ')
                    }, "")
                    .trim()
                })(r),
                ">"
              )
              .concat(a.map(Qt).join(""), "</")
              .concat(e, ">")
      }
      var Yt = function () {}
      function Gt(t) {
        return "string" == typeof (t.getAttribute ? t.getAttribute(k) : null)
      }
      var Zt = {
        replace: function (t) {
          var e = t[0],
            n = t[1]
              .map(function (t) {
                return Qt(t)
              })
              .join("\n")
          if (e.parentNode && e.outerHTML)
            e.outerHTML =
              n +
              (z.keepOriginalSource && "svg" !== e.tagName.toLowerCase()
                ? "\x3c!-- ".concat(
                    e.outerHTML,
                    " Font Awesome fontawesome.com --\x3e"
                  )
                : "")
          else if (e.parentNode) {
            var r = document.createElement("span")
            e.parentNode.replaceChild(r, e), (r.outerHTML = n)
          }
        },
        nest: function (t) {
          var e = t[0],
            n = t[1]
          if (~bt(e).indexOf(z.replacementClass)) return Zt.replace(t)
          var r = new RegExp("".concat(z.familyPrefix, "-.*"))
          delete n[0].attributes.style, delete n[0].attributes.id
          var o = n[0].attributes.class.split(" ").reduce(
            function (t, e) {
              return (
                e === z.replacementClass || e.match(r)
                  ? t.toSvg.push(e)
                  : t.toNode.push(e),
                t
              )
            },
            { toNode: [], toSvg: [] }
          )
          n[0].attributes.class = o.toSvg.join(" ")
          var a = n
            .map(function (t) {
              return Qt(t)
            })
            .join("\n")
          e.setAttribute("class", o.toNode.join(" ")),
            e.setAttribute(k, ""),
            (e.innerHTML = a)
        },
      }
      function $t(t) {
        t()
      }
      function Xt(t, e) {
        var n = "function" == typeof e ? e : Yt
        if (0 === t.length) n()
        else {
          var r = $t
          "async" === z.mutateApproach && (r = v.requestAnimationFrame || $t),
            r(function () {
              var e =
                  !0 === z.autoReplaceSvg
                    ? Zt.replace
                    : Zt[z.autoReplaceSvg] || Zt.replace,
                r = Dt("mutate")
              t.map(e), r(), n()
            })
        }
      }
      var te = !1
      function ee() {
        te = !1
      }
      var ne = null
      function re(t) {
        if (y && z.observeMutations) {
          var e = t.treeCallback,
            n = t.nodeCallback,
            r = t.pseudoElementsCallback,
            o = t.observeMutationsRoot,
            a = void 0 === o ? m : o
          ;(ne = new y(function (t) {
            te ||
              yt(t).forEach(function (t) {
                if (
                  ("childList" === t.type &&
                    t.addedNodes.length > 0 &&
                    !Gt(t.addedNodes[0]) &&
                    (z.searchPseudoElements && r(t.target), e(t.target)),
                  "attributes" === t.type &&
                    t.target.parentNode &&
                    z.searchPseudoElements &&
                    r(t.target.parentNode),
                  "attributes" === t.type &&
                    Gt(t.target) &&
                    ~I.indexOf(t.attributeName))
                )
                  if ("class" === t.attributeName) {
                    var o = Kt(bt(t.target)),
                      a = o.prefix,
                      i = o.iconName
                    a && t.target.setAttribute("data-prefix", a),
                      i && t.target.setAttribute("data-icon", i)
                  } else n(t.target)
              })
          })),
            w &&
              ne.observe(a, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0,
              })
        }
      }
      function oe(t) {
        var e,
          n,
          r = t.getAttribute("data-prefix"),
          o = t.getAttribute("data-icon"),
          a = void 0 !== t.innerText ? t.innerText.trim() : "",
          i = Kt(bt(t))
        return (
          r && o && ((i.prefix = r), (i.iconName = o)),
          i.prefix && a.length > 1
            ? (i.iconName =
                ((e = i.prefix), (n = t.innerText), (Wt[e] || {})[n]))
            : i.prefix &&
              1 === a.length &&
              (i.iconName = Vt(i.prefix, Mt(t.innerText))),
          i
        )
      }
      var ae = function (t) {
        var e = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }
        return t
          ? t
              .toLowerCase()
              .split(" ")
              .reduce(function (t, e) {
                var n = e.toLowerCase().split("-"),
                  r = n[0],
                  o = n.slice(1).join("-")
                if (r && "h" === o) return (t.flipX = !0), t
                if (r && "v" === o) return (t.flipY = !0), t
                if (((o = parseFloat(o)), isNaN(o))) return t
                switch (r) {
                  case "grow":
                    t.size = t.size + o
                    break
                  case "shrink":
                    t.size = t.size - o
                    break
                  case "left":
                    t.x = t.x - o
                    break
                  case "right":
                    t.x = t.x + o
                    break
                  case "up":
                    t.y = t.y - o
                    break
                  case "down":
                    t.y = t.y + o
                    break
                  case "rotate":
                    t.rotate = t.rotate + o
                }
                return t
              }, e)
          : e
      }
      function ie(t) {
        var e = oe(t),
          n = e.iconName,
          r = e.prefix,
          o = e.rest,
          a = (function (t) {
            var e = t.getAttribute("style"),
              n = []
            return (
              e &&
                (n = e.split(";").reduce(function (t, e) {
                  var n = e.split(":"),
                    r = n[0],
                    o = n.slice(1)
                  return r && o.length > 0 && (t[r] = o.join(":").trim()), t
                }, {})),
              n
            )
          })(t),
          i = (function (t) {
            return ae(t.getAttribute("data-fa-transform"))
          })(t),
          s = (function (t) {
            var e = t.getAttribute("data-fa-symbol")
            return null !== e && ("" === e || e)
          })(t),
          c = (function (t) {
            var e = yt(t.attributes).reduce(function (t, e) {
                return (
                  "class" !== t.name &&
                    "style" !== t.name &&
                    (t[e.name] = e.value),
                  t
                )
              }, {}),
              n = t.getAttribute("title"),
              r = t.getAttribute("data-fa-title-id")
            return (
              z.autoA11y &&
                (n
                  ? (e["aria-labelledby"] = ""
                      .concat(z.replacementClass, "-title-")
                      .concat(r || mt()))
                  : ((e["aria-hidden"] = "true"), (e.focusable = "false"))),
              e
            )
          })(t),
          u = (function (t) {
            var e = t.getAttribute("data-fa-mask")
            return e
              ? Kt(
                  e.split(" ").map(function (t) {
                    return t.trim()
                  })
                )
              : { prefix: null, iconName: null, rest: [] }
          })(t)
        return {
          iconName: n,
          title: t.getAttribute("title"),
          titleId: t.getAttribute("data-fa-title-id"),
          prefix: r,
          transform: i,
          symbol: s,
          mask: u,
          maskId: t.getAttribute("data-fa-mask-id"),
          extra: { classes: o, styles: a, attributes: c },
        }
      }
      function se(t) {
        ;(this.name = "MissingIcon"),
          (this.message = t || "Icon unavailable"),
          (this.stack = new Error().stack)
      }
      ;(se.prototype = Object.create(Error.prototype)),
        (se.prototype.constructor = se)
      var ce = { fill: "currentColor" },
        ue = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" },
        le = {
          tag: "path",
          attributes: i({}, ce, {
            d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
          }),
        },
        fe = i({}, ue, { attributeName: "opacity" }),
        pe = {
          tag: "g",
          children: [
            le,
            {
              tag: "circle",
              attributes: i({}, ce, { cx: "256", cy: "364", r: "28" }),
              children: [
                {
                  tag: "animate",
                  attributes: i({}, ue, {
                    attributeName: "r",
                    values: "28;14;28;28;14;28;",
                  }),
                },
                {
                  tag: "animate",
                  attributes: i({}, fe, { values: "1;0;1;1;0;1;" }),
                },
              ],
            },
            {
              tag: "path",
              attributes: i({}, ce, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
              }),
              children: [
                {
                  tag: "animate",
                  attributes: i({}, fe, { values: "1;0;0;0;0;1;" }),
                },
              ],
            },
            {
              tag: "path",
              attributes: i({}, ce, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
              }),
              children: [
                {
                  tag: "animate",
                  attributes: i({}, fe, { values: "0;0;1;1;0;0;" }),
                },
              ],
            },
          ],
        },
        de = H.styles
      function he(t) {
        var e = t[0],
          n = t[1],
          r = s(t.slice(4), 1)[0]
        return {
          found: !0,
          width: e,
          height: n,
          icon: Array.isArray(r)
            ? {
                tag: "g",
                attributes: {
                  class: "".concat(z.familyPrefix, "-").concat(M.GROUP),
                },
                children: [
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(z.familyPrefix, "-").concat(M.SECONDARY),
                      fill: "currentColor",
                      d: r[0],
                    },
                  },
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(z.familyPrefix, "-").concat(M.PRIMARY),
                      fill: "currentColor",
                      d: r[1],
                    },
                  },
                ],
              }
            : { tag: "path", attributes: { fill: "currentColor", d: r } },
        }
      }
      function ge(t, e) {
        return new dt(function (n, r) {
          var o = { found: !1, width: 512, height: 512, icon: pe }
          if (t && e && de[e] && de[e][t]) return n(he(de[e][t]))
          t && e && !z.showMissingIcons
            ? r(
                new se(
                  "Icon is missing for prefix "
                    .concat(e, " with icon name ")
                    .concat(t)
                )
              )
            : n(o)
        })
      }
      var ve = H.styles
      function me(t) {
        var e = ie(t)
        return ~e.extra.classes.indexOf(C)
          ? (function (t, e) {
              var n = e.title,
                r = e.transform,
                o = e.extra,
                a = null,
                i = null
              if (x) {
                var s = parseInt(getComputedStyle(t).fontSize, 10),
                  c = t.getBoundingClientRect()
                ;(a = c.width / s), (i = c.height / s)
              }
              return (
                z.autoA11y && !n && (o.attributes["aria-hidden"] = "true"),
                dt.resolve([
                  t,
                  Rt({
                    content: t.innerHTML,
                    width: a,
                    height: i,
                    transform: r,
                    title: n,
                    extra: o,
                    watchable: !0,
                  }),
                ])
              )
            })(t, e)
          : (function (t, e) {
              var n = e.iconName,
                r = e.title,
                o = e.titleId,
                a = e.prefix,
                i = e.transform,
                c = e.symbol,
                u = e.mask,
                l = e.maskId,
                f = e.extra
              return new dt(function (e, p) {
                dt.all([ge(n, a), ge(u.iconName, u.prefix)]).then(function (u) {
                  var p = s(u, 2),
                    d = p[0],
                    h = p[1]
                  e([
                    t,
                    Et({
                      icons: { main: d, mask: h },
                      prefix: a,
                      iconName: n,
                      transform: i,
                      symbol: c,
                      mask: h,
                      maskId: l,
                      title: r,
                      titleId: o,
                      extra: f,
                      watchable: !0,
                    }),
                  ])
                })
              })
            })(t, e)
      }
      function ye(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
        if (w) {
          var n = m.documentElement.classList,
            r = function (t) {
              return n.add("".concat(S, "-").concat(t))
            },
            o = function (t) {
              return n.remove("".concat(S, "-").concat(t))
            },
            a = z.autoFetchSvg ? Object.keys(R) : Object.keys(ve),
            i = [".".concat(C, ":not([").concat(k, "])")]
              .concat(
                a.map(function (t) {
                  return ".".concat(t, ":not([").concat(k, "])")
                })
              )
              .join(", ")
          if (0 !== i.length) {
            var s = []
            try {
              s = yt(t.querySelectorAll(i))
            } catch (We) {}
            if (s.length > 0) {
              r("pending"), o("complete")
              var c = Dt("onTree"),
                u = s.reduce(function (t, e) {
                  try {
                    var n = me(e)
                    n && t.push(n)
                  } catch (We) {
                    E || (We instanceof se && console.error(We))
                  }
                  return t
                }, [])
              return new dt(function (t, n) {
                dt.all(u)
                  .then(function (n) {
                    Xt(n, function () {
                      r("active"),
                        r("complete"),
                        o("pending"),
                        "function" == typeof e && e(),
                        c(),
                        t()
                    })
                  })
                  .catch(function () {
                    c(), n()
                  })
              })
            }
          }
        }
      }
      function be(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
        me(t).then(function (t) {
          t && Xt([t], e)
        })
      }
      function we(t, e) {
        var n = ""
          .concat("data-fa-pseudo-element-pending")
          .concat(e.replace(":", "-"))
        return new dt(function (r, o) {
          if (null !== t.getAttribute(n)) return r()
          var a = yt(t.children).filter(function (t) {
              return t.getAttribute(P) === e
            })[0],
            s = v.getComputedStyle(t, e),
            c = s.getPropertyValue("font-family").match(L),
            u = s.getPropertyValue("font-weight"),
            l = s.getPropertyValue("content")
          if (a && !c) return t.removeChild(a), r()
          if (c && "none" !== l && "" !== l) {
            var f = s.getPropertyValue("content"),
              p = ~[
                "Solid",
                "Regular",
                "Light",
                "Duotone",
                "Brands",
                "Kit",
              ].indexOf(c[2])
                ? _[c[2].toLowerCase()]
                : N[u],
              d = Mt(3 === f.length ? f.substr(1, 1) : f),
              h = Vt(p, d),
              g = h
            if (
              !h ||
              (a &&
                a.getAttribute("data-prefix") === p &&
                a.getAttribute("data-icon") === g)
            )
              r()
            else {
              t.setAttribute(n, g), a && t.removeChild(a)
              var y = {
                  iconName: null,
                  title: null,
                  titleId: null,
                  prefix: null,
                  transform: gt,
                  symbol: !1,
                  mask: null,
                  maskId: null,
                  extra: { classes: [], styles: {}, attributes: {} },
                },
                b = y.extra
              ;(b.attributes[P] = e),
                ge(h, p)
                  .then(function (o) {
                    var a = Et(
                        i({}, y, {
                          icons: {
                            main: o,
                            mask: { prefix: null, iconName: null, rest: [] },
                          },
                          prefix: p,
                          iconName: g,
                          extra: b,
                          watchable: !0,
                        })
                      ),
                      s = m.createElement("svg")
                    ":before" === e
                      ? t.insertBefore(s, t.firstChild)
                      : t.appendChild(s),
                      (s.outerHTML = a
                        .map(function (t) {
                          return Qt(t)
                        })
                        .join("\n")),
                      t.removeAttribute(n),
                      r()
                  })
                  .catch(o)
            }
          } else r()
        })
      }
      function xe(t) {
        return dt.all([we(t, ":before"), we(t, ":after")])
      }
      function Oe(t) {
        return !(
          t.parentNode === document.head ||
          ~j.indexOf(t.tagName.toUpperCase()) ||
          t.getAttribute(P) ||
          (t.parentNode && "svg" === t.parentNode.tagName)
        )
      }
      function ke(t) {
        if (w)
          return new dt(function (e, n) {
            var r = yt(t.querySelectorAll("*")).filter(Oe).map(xe),
              o = Dt("searchPseudoElements")
            ;(te = !0),
              dt
                .all(r)
                .then(function () {
                  o(), ee(), e()
                })
                .catch(function () {
                  o(), ee(), n()
                })
          })
      }
      function Pe() {
        var t = "fa",
          e = O,
          n = z.familyPrefix,
          r = z.replacementClass,
          o =
            'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}'
        if (n !== t || r !== e) {
          var a = new RegExp("\\.".concat(t, "\\-"), "g"),
            i = new RegExp("\\--".concat(t, "\\-"), "g"),
            s = new RegExp("\\.".concat(e), "g")
          o = o
            .replace(a, ".".concat(n, "-"))
            .replace(i, "--".concat(n, "-"))
            .replace(s, ".".concat(r))
        }
        return o
      }
      var Se = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          })(this, t),
            (this.definitions = {})
        }
        var e, n, r
        return (
          (e = t),
          (n = [
            {
              key: "add",
              value: function () {
                for (
                  var t = this, e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r]
                var o = n.reduce(this._pullDefinitions, {})
                Object.keys(o).forEach(function (e) {
                  ;(t.definitions[e] = i({}, t.definitions[e] || {}, o[e])),
                    Tt(e, o[e]),
                    qt()
                })
              },
            },
            {
              key: "reset",
              value: function () {
                this.definitions = {}
              },
            },
            {
              key: "_pullDefinitions",
              value: function (t, e) {
                var n = e.prefix && e.iconName && e.icon ? { 0: e } : e
                return (
                  Object.keys(n).map(function (e) {
                    var r = n[e],
                      o = r.prefix,
                      a = r.iconName,
                      i = r.icon
                    t[o] || (t[o] = {}), (t[o][a] = i)
                  }),
                  t
                )
              },
            },
          ]),
          n && o(e.prototype, n),
          r && o(e, r),
          t
        )
      })()
      function je() {
        z.autoAddCss && !Ne && (vt(Pe()), (Ne = !0))
      }
      function Ee(t, e) {
        return (
          Object.defineProperty(t, "abstract", { get: e }),
          Object.defineProperty(t, "html", {
            get: function () {
              return t.abstract.map(function (t) {
                return Qt(t)
              })
            },
          }),
          Object.defineProperty(t, "node", {
            get: function () {
              if (w) {
                var e = m.createElement("div")
                return (e.innerHTML = t.html), e.children
              }
            },
          }),
          t
        )
      }
      function Re(t) {
        var e = t.prefix,
          n = void 0 === e ? "fa" : e,
          r = t.iconName
        if (r) return Jt(Ce.definitions, n, r) || Jt(H.styles, n, r)
      }
      var _e,
        Ce = new Se(),
        Le = function () {
          ;(z.autoReplaceSvg = !1),
            (z.observeMutations = !1),
            ne && ne.disconnect()
        },
        Ne = !1,
        Ae = {
          i2svg: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            if (w) {
              je()
              var e = t.node,
                n = void 0 === e ? m : e,
                r = t.callback,
                o = void 0 === r ? function () {} : r
              return z.searchPseudoElements && ke(n), ye(n, o)
            }
            return dt.reject("Operation requires a DOM of some kind.")
          },
          css: Pe,
          insertCss: function () {
            Ne || (vt(Pe()), (Ne = !0))
          },
          watch: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = t.autoReplaceSvgRoot,
              n = t.observeMutationsRoot
            !1 === z.autoReplaceSvg && (z.autoReplaceSvg = !0),
              (z.observeMutations = !0),
              B(function () {
                ze({ autoReplaceSvgRoot: e }),
                  re({
                    treeCallback: ye,
                    nodeCallback: be,
                    pseudoElementsCallback: ke,
                    observeMutationsRoot: n,
                  })
              })
          },
        },
        De = {
          transform: function (t) {
            return ae(t)
          },
        },
        Ie =
          ((_e = function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = e.transform,
              r = void 0 === n ? gt : n,
              o = e.symbol,
              a = void 0 !== o && o,
              s = e.mask,
              c = void 0 === s ? null : s,
              u = e.maskId,
              l = void 0 === u ? null : u,
              f = e.title,
              p = void 0 === f ? null : f,
              d = e.titleId,
              h = void 0 === d ? null : d,
              g = e.classes,
              v = void 0 === g ? [] : g,
              m = e.attributes,
              y = void 0 === m ? {} : m,
              b = e.styles,
              w = void 0 === b ? {} : b
            if (t) {
              var x = t.prefix,
                O = t.iconName,
                k = t.icon
              return Ee(i({ type: "icon" }, t), function () {
                return (
                  je(),
                  z.autoA11y &&
                    (p
                      ? (y["aria-labelledby"] = ""
                          .concat(z.replacementClass, "-title-")
                          .concat(h || mt()))
                      : ((y["aria-hidden"] = "true"), (y.focusable = "false"))),
                  Et({
                    icons: {
                      main: he(k),
                      mask: c
                        ? he(c.icon)
                        : { found: !1, width: null, height: null, icon: {} },
                    },
                    prefix: x,
                    iconName: O,
                    transform: i({}, gt, r),
                    symbol: a,
                    title: p,
                    maskId: l,
                    titleId: h,
                    extra: { attributes: y, styles: w, classes: v },
                  })
                )
              })
            }
          }),
          function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = (t || {}).icon ? t : Re(t || {}),
              r = e.mask
            return (
              r && (r = (r || {}).icon ? r : Re(r || {})),
              _e(n, i({}, e, { mask: r }))
            )
          }),
        Me = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = e.transform,
            r = void 0 === n ? gt : n,
            o = e.title,
            a = void 0 === o ? null : o,
            s = e.classes,
            u = void 0 === s ? [] : s,
            l = e.attributes,
            f = void 0 === l ? {} : l,
            p = e.styles,
            d = void 0 === p ? {} : p
          return Ee({ type: "text", content: t }, function () {
            return (
              je(),
              Rt({
                content: t,
                transform: i({}, gt, r),
                title: a,
                extra: {
                  attributes: f,
                  styles: d,
                  classes: ["".concat(z.familyPrefix, "-layers-text")].concat(
                    c(u)
                  ),
                },
              })
            )
          })
        },
        Te = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = e.title,
            r = void 0 === n ? null : n,
            o = e.classes,
            a = void 0 === o ? [] : o,
            i = e.attributes,
            s = void 0 === i ? {} : i,
            u = e.styles,
            l = void 0 === u ? {} : u
          return Ee({ type: "counter", content: t }, function () {
            return (
              je(),
              _t({
                content: t.toString(),
                title: r,
                extra: {
                  attributes: s,
                  styles: l,
                  classes: [
                    "".concat(z.familyPrefix, "-layers-counter"),
                  ].concat(c(a)),
                },
              })
            )
          })
        },
        Fe = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = e.classes,
            r = void 0 === n ? [] : n
          return Ee({ type: "layer" }, function () {
            je()
            var e = []
            return (
              t(function (t) {
                Array.isArray(t)
                  ? t.map(function (t) {
                      e = e.concat(t.abstract)
                    })
                  : (e = e.concat(t.abstract))
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(z.familyPrefix, "-layers")]
                      .concat(c(r))
                      .join(" "),
                  },
                  children: e,
                },
              ]
            )
          })
        },
        Ue = {
          noAuto: Le,
          config: z,
          dom: Ae,
          library: Ce,
          parse: De,
          findIconDefinition: Re,
          icon: Ie,
          text: Me,
          counter: Te,
          layer: Fe,
          toHtml: Qt,
        },
        ze = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.autoReplaceSvgRoot,
            n = void 0 === e ? m : e
          ;(Object.keys(H.styles).length > 0 || z.autoFetchSvg) &&
            w &&
            z.autoReplaceSvg &&
            Ue.dom.i2svg({ node: n })
        }
    },
    2393: function (t, e) {
      "use strict"
      var n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
          },
        r = function (t) {
          var e = t.location,
            n = e.search,
            r = e.hash,
            o = e.href,
            a = e.origin,
            s = e.protocol,
            c = e.host,
            u = e.hostname,
            l = e.port,
            f = t.location.pathname
          !f && o && i && (f = new URL(o).pathname)
          return {
            pathname: encodeURI(decodeURI(f)),
            search: n,
            hash: r,
            href: o,
            origin: a,
            protocol: s,
            host: c,
            hostname: u,
            port: l,
            state: t.history.state,
            key: (t.history.state && t.history.state.key) || "initial",
          }
        },
        o = function (t, e) {
          var o = [],
            a = r(t),
            i = !1,
            s = function () {}
          return {
            get location() {
              return a
            },
            get transitioning() {
              return i
            },
            _onTransitionComplete: function () {
              ;(i = !1), s()
            },
            listen: function (e) {
              o.push(e)
              var n = function () {
                ;(a = r(t)), e({ location: a, action: "POP" })
              }
              return (
                t.addEventListener("popstate", n),
                function () {
                  t.removeEventListener("popstate", n),
                    (o = o.filter(function (t) {
                      return t !== e
                    }))
                }
              )
            },
            navigate: function (e) {
              var c =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                u = c.state,
                l = c.replace,
                f = void 0 !== l && l
              if ("number" == typeof e) t.history.go(e)
              else {
                u = n({}, u, { key: Date.now() + "" })
                try {
                  i || f
                    ? t.history.replaceState(u, null, e)
                    : t.history.pushState(u, null, e)
                } catch (d) {
                  t.location[f ? "replace" : "assign"](e)
                }
              }
              ;(a = r(t)), (i = !0)
              var p = new Promise(function (t) {
                return (s = t)
              })
              return (
                o.forEach(function (t) {
                  return t({ location: a, action: "PUSH" })
                }),
                p
              )
            },
          }
        },
        a = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            e = t.indexOf("?"),
            n = {
              pathname: e > -1 ? t.substr(0, e) : t,
              search: e > -1 ? t.substr(e) : "",
            },
            r = 0,
            o = [n],
            a = [null]
          return {
            get location() {
              return o[r]
            },
            addEventListener: function (t, e) {},
            removeEventListener: function (t, e) {},
            history: {
              get entries() {
                return o
              },
              get index() {
                return r
              },
              get state() {
                return a[r]
              },
              pushState: function (t, e, n) {
                var i = n.split("?"),
                  s = i[0],
                  c = i[1],
                  u = void 0 === c ? "" : c
                r++,
                  o.push({ pathname: s, search: u.length ? "?" + u : u }),
                  a.push(t)
              },
              replaceState: function (t, e, n) {
                var i = n.split("?"),
                  s = i[0],
                  c = i[1],
                  u = void 0 === c ? "" : c
                ;(o[r] = { pathname: s, search: u }), (a[r] = t)
              },
              go: function (t) {
                var e = r + t
                e < 0 || e > a.length - 1 || (r = e)
              },
            },
          }
        },
        i = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        s = o(i ? window : a()),
        c = s.navigate
      e.V5 = s
    },
    2098: function (t, e, n) {
      "use strict"
      ;(e.__esModule = !0),
        (e.shallowCompare =
          e.validateRedirect =
          e.insertParams =
          e.resolve =
          e.match =
          e.pick =
          e.startsWith =
            void 0)
      var r,
        o = n(1143),
        a = (r = o) && r.__esModule ? r : { default: r }
      var i = function (t, e) {
          return t.substr(0, e.length) === e
        },
        s = function (t, e) {
          for (
            var n = void 0,
              r = void 0,
              o = e.split("?")[0],
              i = d(o),
              s = "" === i[0],
              u = p(t),
              f = 0,
              h = u.length;
            f < h;
            f++
          ) {
            var v = !1,
              m = u[f].route
            if (m.default) r = { route: m, params: {}, uri: e }
            else {
              for (
                var y = d(m.path),
                  b = {},
                  w = Math.max(i.length, y.length),
                  x = 0;
                x < w;
                x++
              ) {
                var O = y[x],
                  k = i[x]
                if (l(O)) {
                  b[O.slice(1) || "*"] = i
                    .slice(x)
                    .map(decodeURIComponent)
                    .join("/")
                  break
                }
                if (void 0 === k) {
                  v = !0
                  break
                }
                var P = c.exec(O)
                if (P && !s) {
                  ;-1 === g.indexOf(P[1]) || (0, a.default)(!1)
                  var S = decodeURIComponent(k)
                  b[P[1]] = S
                } else if (O !== k) {
                  v = !0
                  break
                }
              }
              if (!v) {
                n = { route: m, params: b, uri: "/" + i.slice(0, x).join("/") }
                break
              }
            }
          }
          return n || r || null
        },
        c = /^:(.+)/,
        u = function (t) {
          return c.test(t)
        },
        l = function (t) {
          return t && "*" === t[0]
        },
        f = function (t, e) {
          return {
            route: t,
            score: t.default
              ? 0
              : d(t.path).reduce(function (t, e) {
                  return (
                    (t += 4),
                    !(function (t) {
                      return "" === t
                    })(e)
                      ? u(e)
                        ? (t += 2)
                        : l(e)
                        ? (t -= 5)
                        : (t += 3)
                      : (t += 1),
                    t
                  )
                }, 0),
            index: e,
          }
        },
        p = function (t) {
          return t.map(f).sort(function (t, e) {
            return t.score < e.score
              ? 1
              : t.score > e.score
              ? -1
              : t.index - e.index
          })
        },
        d = function (t) {
          return t.replace(/(^\/+|\/+$)/g, "").split("/")
        },
        h = function (t) {
          for (
            var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r]
          return (
            t +
            ((n = n.filter(function (t) {
              return t && t.length > 0
            })) && n.length > 0
              ? "?" + n.join("&")
              : "")
          )
        },
        g = ["uri", "path"]
      ;(e.startsWith = i),
        (e.pick = s),
        (e.match = function (t, e) {
          return s([{ path: t }], e)
        }),
        (e.resolve = function (t, e) {
          if (i(t, "/")) return t
          var n = t.split("?"),
            r = n[0],
            o = n[1],
            a = e.split("?")[0],
            s = d(r),
            c = d(a)
          if ("" === s[0]) return h(a, o)
          if (!i(s[0], ".")) {
            var u = c.concat(s).join("/")
            return h(("/" === a ? "" : "/") + u, o)
          }
          for (var l = c.concat(s), f = [], p = 0, g = l.length; p < g; p++) {
            var v = l[p]
            ".." === v ? f.pop() : "." !== v && f.push(v)
          }
          return h("/" + f.join("/"), o)
        }),
        (e.insertParams = function (t, e) {
          var n = t.split("?"),
            r = n[0],
            o = n[1],
            a = void 0 === o ? "" : o,
            i =
              "/" +
              d(r)
                .map(function (t) {
                  var n = c.exec(t)
                  return n ? e[n[1]] : t
                })
                .join("/"),
            s = e.location,
            u = (s = void 0 === s ? {} : s).search,
            l = (void 0 === u ? "" : u).split("?")[1] || ""
          return (i = h(i, a, l))
        }),
        (e.validateRedirect = function (t, e) {
          var n = function (t) {
            return u(t)
          }
          return (
            d(t).filter(n).sort().join("/") === d(e).filter(n).sort().join("/")
          )
        }),
        (e.shallowCompare = function (t, e) {
          var n = Object.keys(t)
          return (
            n.length === Object.keys(e).length &&
            n.every(function (n) {
              return e.hasOwnProperty(n) && t[n] === e[n]
            })
          )
        })
    },
    9771: function (t, e) {
      "use strict"
      function n() {
        return "undefined" == typeof window
          ? null
          : (window.navigator.languages && window.navigator.languages[0]) ||
              window.navigator.language ||
              window.navigator.browserLanguage ||
              window.navigator.userLanguage ||
              window.navigator.systemLanguage ||
              null
      }
      function r(t) {
        return t.toLowerCase().replace(/-/, "_")
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0)
      var o = function (t) {
        if (!t) return n()
        var e = t.languages,
          o = t.fallback
        if (!t.languages) return o
        var a = r(n())
        if (!a) return o
        var i = e.filter(function (t) {
          return r(t) === a
        })
        return i.length > 0
          ? i[0] || o
          : e.filter(function (t) {
              return (
                (n = t),
                (o = (e = a).length),
                (r = null == r ? 0 : r) < 0 ? (r = 0) : r > o && (r = o),
                (n = "".concat(n)),
                e.slice(r, r + n.length) == n
              )
              var e, n, r, o
            })[0] || o
      }
      e.default = o
    },
    4041: function () {
      "use strict"
      var t,
        e,
        n = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
          }
        })(),
        r =
          ((t = ["", ""]),
          (e = ["", ""]),
          Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          ))
      function o(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function")
      }
      var a = (function () {
          function t() {
            for (
              var e = this, n = arguments.length, r = Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a]
            return (
              o(this, t),
              (this.tag = function (t) {
                for (
                  var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o]
                return "function" == typeof t
                  ? e.interimTag.bind(e, t)
                  : "string" == typeof t
                  ? e.transformEndResult(t)
                  : ((t = t.map(e.transformString.bind(e))),
                    e.transformEndResult(
                      t.reduce(e.processSubstitutions.bind(e, r))
                    ))
              }),
              r.length > 0 && Array.isArray(r[0]) && (r = r[0]),
              (this.transformers = r.map(function (t) {
                return "function" == typeof t ? t() : t
              })),
              this.tag
            )
          }
          return (
            n(t, [
              {
                key: "interimTag",
                value: function (t, e) {
                  for (
                    var n = arguments.length,
                      o = Array(n > 2 ? n - 2 : 0),
                      a = 2;
                    a < n;
                    a++
                  )
                    o[a - 2] = arguments[a]
                  return this.tag(r, t.apply(void 0, [e].concat(o)))
                },
              },
              {
                key: "processSubstitutions",
                value: function (t, e, n) {
                  var r = this.transformSubstitution(t.shift(), e)
                  return "".concat(e, r, n)
                },
              },
              {
                key: "transformString",
                value: function (t) {
                  return this.transformers.reduce(function (t, e) {
                    return e.onString ? e.onString(t) : t
                  }, t)
                },
              },
              {
                key: "transformSubstitution",
                value: function (t, e) {
                  return this.transformers.reduce(function (t, n) {
                    return n.onSubstitution ? n.onSubstitution(t, e) : t
                  }, t)
                },
              },
              {
                key: "transformEndResult",
                value: function (t) {
                  return this.transformers.reduce(function (t, e) {
                    return e.onEndResult ? e.onEndResult(t) : t
                  }, t)
                },
              },
            ]),
            t
          )
        })(),
        i = a,
        s = { separator: "", conjunction: "", serial: !1 },
        c = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s
          return {
            onSubstitution: function (e, n) {
              if (Array.isArray(e)) {
                var r = e.length,
                  o = t.separator,
                  a = t.conjunction,
                  i = t.serial,
                  s = n.match(/(\n?[^\S\n]+)$/)
                if (
                  ((e = s ? e.join(o + s[1]) : e.join(o + " ")), a && r > 1)
                ) {
                  var c = e.lastIndexOf(o)
                  e = e.slice(0, c) + (i ? o : "") + " " + a + e.slice(c + 1)
                }
              }
              return e
            },
          }
        }
      function u(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e]
          return n
        }
        return Array.from(t)
      }
      var l = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "initial"
          return {
            onEndResult: function (e) {
              if ("initial" === t) {
                var n = e.match(/^[^\S\n]*(?=\S)/gm),
                  r =
                    n &&
                    Math.min.apply(
                      Math,
                      u(
                        n.map(function (t) {
                          return t.length
                        })
                      )
                    )
                if (r) {
                  var o = new RegExp("^.{" + r + "}", "gm")
                  return e.replace(o, "")
                }
                return e
              }
              if ("all" === t) return e.replace(/^[^\S\n]+/gm, "")
              throw new Error("Unknown type: " + t)
            },
          }
        },
        f = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          return {
            onEndResult: function (e) {
              if ("" === t) return e.trim()
              if ("start" === (t = t.toLowerCase()) || "left" === t)
                return e.replace(/^\s*/, "")
              if ("end" === t || "right" === t) return e.replace(/\s*$/, "")
              throw new Error("Side not supported: " + t)
            },
          }
        },
        p =
          (new i(c({ separator: "," }), l, f),
          new i(c({ separator: ",", conjunction: "and" }), l, f),
          new i(c({ separator: ",", conjunction: "or" }), l, f),
          function (t) {
            return {
              onSubstitution: function (e, n) {
                if (null == t || "string" != typeof t)
                  throw new Error(
                    "You need to specify a string character to split by."
                  )
                return (
                  "string" == typeof e && e.includes(t) && (e = e.split(t)), e
                )
              },
            }
          }),
        d = function (t) {
          return null != t && !Number.isNaN(t) && "boolean" != typeof t
        },
        h = function () {
          return {
            onSubstitution: function (t) {
              return Array.isArray(t) ? t.filter(d) : d(t) ? t : ""
            },
          }
        },
        g =
          (new i(p("\n"), h, c, l, f),
          function (t, e) {
            return {
              onSubstitution: function (n, r) {
                if (null == t || null == e)
                  throw new Error(
                    "replaceSubstitutionTransformer requires at least 2 arguments."
                  )
                return null == n ? n : n.toString().replace(t, e)
              },
            }
          }),
        v =
          (new i(
            p("\n"),
            c,
            l,
            f,
            g(/&/g, "&amp;"),
            g(/</g, "&lt;"),
            g(/>/g, "&gt;"),
            g(/"/g, "&quot;"),
            g(/'/g, "&#x27;"),
            g(/`/g, "&#x60;")
          ),
          function (t, e) {
            return {
              onEndResult: function (n) {
                if (null == t || null == e)
                  throw new Error(
                    "replaceResultTransformer requires at least 2 arguments."
                  )
                return n.replace(t, e)
              },
            }
          })
      new i(v(/(?:\n(?:\s*))+/g, " "), f),
        new i(v(/(?:\n\s*)/g, ""), f),
        new i(c({ separator: "," }), v(/(?:\s+)/g, " "), f),
        new i(c({ separator: ",", conjunction: "or" }), v(/(?:\s+)/g, " "), f),
        new i(c({ separator: ",", conjunction: "and" }), v(/(?:\s+)/g, " "), f),
        new i(c, l, f),
        new i(c, v(/(?:\s+)/g, " "), f),
        new i(l, f),
        new i(l("all"), f)
    },
    6494: function (t) {
      "use strict"
      t.exports = Object.assign
    },
    6678: function (t, e, n) {
      "use strict"
      var r = n(8),
        o = n(4575),
        a = n(3913),
        i = n(1506),
        s = n(2205),
        c = n(8585),
        u = n(9754),
        l = n(9713),
        f = n(8551)
      function p(t) {
        return t && "object" == typeof t && "default" in t ? t : { default: t }
      }
      var d = p(r),
        h = p(o),
        g = p(a),
        v = p(i),
        m = p(s),
        y = p(c),
        b = p(u),
        w = p(l),
        x = p(f)
      function O(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? O(Object(n), !0).forEach(function (e) {
                w.default(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                )
              })
        }
        return t
      }
      var P = {
          type: "logger",
          log: function (t) {
            this.output("log", t)
          },
          warn: function (t) {
            this.output("warn", t)
          },
          error: function (t) {
            this.output("error", t)
          },
          output: function (t, e) {
            console && console[t] && console[t].apply(console, e)
          },
        },
        S = (function () {
          function t(e) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            h.default(this, t), this.init(e, n)
          }
          return (
            g.default(t, [
              {
                key: "init",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {}
                  ;(this.prefix = e.prefix || "i18next:"),
                    (this.logger = t || P),
                    (this.options = e),
                    (this.debug = e.debug)
                },
              },
              {
                key: "setDebug",
                value: function (t) {
                  this.debug = t
                },
              },
              {
                key: "log",
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n]
                  return this.forward(e, "log", "", !0)
                },
              },
              {
                key: "warn",
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n]
                  return this.forward(e, "warn", "", !0)
                },
              },
              {
                key: "error",
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n]
                  return this.forward(e, "error", "")
                },
              },
              {
                key: "deprecate",
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n]
                  return this.forward(e, "warn", "WARNING DEPRECATED: ", !0)
                },
              },
              {
                key: "forward",
                value: function (t, e, n, r) {
                  return r && !this.debug
                    ? null
                    : ("string" == typeof t[0] &&
                        (t[0] = ""
                          .concat(n)
                          .concat(this.prefix, " ")
                          .concat(t[0])),
                      this.logger[e](t))
                },
              },
              {
                key: "create",
                value: function (e) {
                  return new t(
                    this.logger,
                    k(
                      k(
                        {},
                        { prefix: "".concat(this.prefix, ":").concat(e, ":") }
                      ),
                      this.options
                    )
                  )
                },
              },
            ]),
            t
          )
        })(),
        j = new S(),
        E = (function () {
          function t() {
            h.default(this, t), (this.observers = {})
          }
          return (
            g.default(t, [
              {
                key: "on",
                value: function (t, e) {
                  var n = this
                  return (
                    t.split(" ").forEach(function (t) {
                      ;(n.observers[t] = n.observers[t] || []),
                        n.observers[t].push(e)
                    }),
                    this
                  )
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  this.observers[t] &&
                    (e
                      ? (this.observers[t] = this.observers[t].filter(function (
                          t
                        ) {
                          return t !== e
                        }))
                      : delete this.observers[t])
                },
              },
              {
                key: "emit",
                value: function (t) {
                  for (
                    var e = arguments.length,
                      n = new Array(e > 1 ? e - 1 : 0),
                      r = 1;
                    r < e;
                    r++
                  )
                    n[r - 1] = arguments[r]
                  if (this.observers[t]) {
                    var o = [].concat(this.observers[t])
                    o.forEach(function (t) {
                      t.apply(void 0, n)
                    })
                  }
                  if (this.observers["*"]) {
                    var a = [].concat(this.observers["*"])
                    a.forEach(function (e) {
                      e.apply(e, [t].concat(n))
                    })
                  }
                },
              },
            ]),
            t
          )
        })()
      function R() {
        var t,
          e,
          n = new Promise(function (n, r) {
            ;(t = n), (e = r)
          })
        return (n.resolve = t), (n.reject = e), n
      }
      function _(t) {
        return null == t ? "" : "" + t
      }
      function C(t, e, n) {
        t.forEach(function (t) {
          e[t] && (n[t] = e[t])
        })
      }
      function L(t, e, n) {
        function r(t) {
          return t && t.indexOf("###") > -1 ? t.replace(/###/g, ".") : t
        }
        function o() {
          return !t || "string" == typeof t
        }
        for (
          var a = "string" != typeof e ? [].concat(e) : e.split(".");
          a.length > 1;

        ) {
          if (o()) return {}
          var i = r(a.shift())
          !t[i] && n && (t[i] = new n()),
            (t = Object.prototype.hasOwnProperty.call(t, i) ? t[i] : {})
        }
        return o() ? {} : { obj: t, k: r(a.shift()) }
      }
      function N(t, e, n) {
        var r = L(t, e, Object)
        r.obj[r.k] = n
      }
      function A(t, e) {
        var n = L(t, e),
          r = n.obj,
          o = n.k
        if (r) return r[o]
      }
      function D(t, e, n) {
        var r = A(t, n)
        return void 0 !== r ? r : A(e, n)
      }
      function I(t, e, n) {
        for (var r in e)
          "__proto__" !== r &&
            "constructor" !== r &&
            (r in t
              ? "string" == typeof t[r] ||
                t[r] instanceof String ||
                "string" == typeof e[r] ||
                e[r] instanceof String
                ? n && (t[r] = e[r])
                : I(t[r], e[r], n)
              : (t[r] = e[r]))
        return t
      }
      function M(t) {
        return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
      }
      var T = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
      }
      function F(t) {
        return "string" == typeof t
          ? t.replace(/[&<>"'\/]/g, function (t) {
              return T[t]
            })
          : t
      }
      var U =
          "undefined" != typeof window &&
          window.navigator &&
          window.navigator.userAgent &&
          window.navigator.userAgent.indexOf("MSIE") > -1,
        z = [" ", ",", "?", "!", ";"]
      function W(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function H(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? W(Object(n), !0).forEach(function (e) {
                w.default(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : W(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                )
              })
        }
        return t
      }
      function q(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            )
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var n,
            r = b.default(t)
          if (e) {
            var o = b.default(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return y.default(this, n)
        }
      }
      function V(t, e) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "."
        if (t) {
          if (t[e]) return t[e]
          for (var r = e.split(n), o = t, a = 0; a < r.length; ++a) {
            if (!o) return
            if ("string" == typeof o[r[a]] && a + 1 < r.length) return
            if (void 0 === o[r[a]]) {
              for (
                var i = 2, s = r.slice(a, a + i).join(n), c = o[s];
                void 0 === c && r.length > a + i;

              )
                i++, (c = o[(s = r.slice(a, a + i).join(n))])
              if (void 0 === c) return
              if (e.endsWith(s)) {
                if ("string" == typeof c) return c
                if (s && "string" == typeof c[s]) return c[s]
              }
              var u = r.slice(a + i).join(n)
              return u ? V(c, u, n) : void 0
            }
            o = o[r[a]]
          }
          return o
        }
      }
      var B = (function (t) {
          m.default(n, t)
          var e = q(n)
          function n(t) {
            var r,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { ns: ["translation"], defaultNS: "translation" }
            return (
              h.default(this, n),
              (r = e.call(this)),
              U && E.call(v.default(r)),
              (r.data = t || {}),
              (r.options = o),
              void 0 === r.options.keySeparator &&
                (r.options.keySeparator = "."),
              void 0 === r.options.ignoreJSONStructure &&
                (r.options.ignoreJSONStructure = !0),
              r
            )
          }
          return (
            g.default(n, [
              {
                key: "addNamespaces",
                value: function (t) {
                  this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
                },
              },
              {
                key: "removeNamespaces",
                value: function (t) {
                  var e = this.options.ns.indexOf(t)
                  e > -1 && this.options.ns.splice(e, 1)
                },
              },
              {
                key: "getResource",
                value: function (t, e, n) {
                  var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    o =
                      void 0 !== r.keySeparator
                        ? r.keySeparator
                        : this.options.keySeparator,
                    a =
                      void 0 !== r.ignoreJSONStructure
                        ? r.ignoreJSONStructure
                        : this.options.ignoreJSONStructure,
                    i = [t, e]
                  n && "string" != typeof n && (i = i.concat(n)),
                    n &&
                      "string" == typeof n &&
                      (i = i.concat(o ? n.split(o) : n)),
                    t.indexOf(".") > -1 && (i = t.split("."))
                  var s = A(this.data, i)
                  return s || !a || "string" != typeof n
                    ? s
                    : V(this.data && this.data[t] && this.data[t][e], n, o)
                },
              },
              {
                key: "addResource",
                value: function (t, e, n, r) {
                  var o =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : { silent: !1 },
                    a = this.options.keySeparator
                  void 0 === a && (a = ".")
                  var i = [t, e]
                  n && (i = i.concat(a ? n.split(a) : n)),
                    t.indexOf(".") > -1 &&
                      ((r = e), (e = (i = t.split("."))[1])),
                    this.addNamespaces(e),
                    N(this.data, i, r),
                    o.silent || this.emit("added", t, e, n, r)
                },
              },
              {
                key: "addResources",
                value: function (t, e, n) {
                  var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : { silent: !1 }
                  for (var o in n)
                    ("string" != typeof n[o] &&
                      "[object Array]" !==
                        Object.prototype.toString.apply(n[o])) ||
                      this.addResource(t, e, o, n[o], { silent: !0 })
                  r.silent || this.emit("added", t, e, n)
                },
              },
              {
                key: "addResourceBundle",
                value: function (t, e, n, r, o) {
                  var a =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : { silent: !1 },
                    i = [t, e]
                  t.indexOf(".") > -1 &&
                    ((r = n), (n = e), (e = (i = t.split("."))[1])),
                    this.addNamespaces(e)
                  var s = A(this.data, i) || {}
                  r ? I(s, n, o) : (s = H(H({}, s), n)),
                    N(this.data, i, s),
                    a.silent || this.emit("added", t, e, n)
                },
              },
              {
                key: "removeResourceBundle",
                value: function (t, e) {
                  this.hasResourceBundle(t, e) && delete this.data[t][e],
                    this.removeNamespaces(e),
                    this.emit("removed", t, e)
                },
              },
              {
                key: "hasResourceBundle",
                value: function (t, e) {
                  return void 0 !== this.getResource(t, e)
                },
              },
              {
                key: "getResourceBundle",
                value: function (t, e) {
                  return (
                    e || (e = this.options.defaultNS),
                    "v1" === this.options.compatibilityAPI
                      ? H(H({}, {}), this.getResource(t, e))
                      : this.getResource(t, e)
                  )
                },
              },
              {
                key: "getDataByLanguage",
                value: function (t) {
                  return this.data[t]
                },
              },
              {
                key: "hasLanguageSomeTranslations",
                value: function (t) {
                  var e = this.getDataByLanguage(t)
                  return !!((e && Object.keys(e)) || []).find(function (t) {
                    return e[t] && Object.keys(e[t]).length > 0
                  })
                },
              },
              {
                key: "toJSON",
                value: function () {
                  return this.data
                },
              },
            ]),
            n
          )
        })(E),
        K = {
          processors: {},
          addPostProcessor: function (t) {
            this.processors[t.name] = t
          },
          handle: function (t, e, n, r, o) {
            var a = this
            return (
              t.forEach(function (t) {
                a.processors[t] && (e = a.processors[t].process(e, n, r, o))
              }),
              e
            )
          },
        }
      function J(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Q(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? J(Object(n), !0).forEach(function (e) {
                w.default(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : J(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                )
              })
        }
        return t
      }
      function Y(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            )
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var n,
            r = b.default(t)
          if (e) {
            var o = b.default(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return y.default(this, n)
        }
      }
      var G = {},
        Z = (function (t) {
          m.default(n, t)
          var e = Y(n)
          function n(t) {
            var r,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
            return (
              h.default(this, n),
              (r = e.call(this)),
              U && E.call(v.default(r)),
              C(
                [
                  "resourceStore",
                  "languageUtils",
                  "pluralResolver",
                  "interpolator",
                  "backendConnector",
                  "i18nFormat",
                  "utils",
                ],
                t,
                v.default(r)
              ),
              (r.options = o),
              void 0 === r.options.keySeparator &&
                (r.options.keySeparator = "."),
              (r.logger = j.create("translator")),
              r
            )
          }
          return (
            g.default(
              n,
              [
                {
                  key: "changeLanguage",
                  value: function (t) {
                    t && (this.language = t)
                  },
                },
                {
                  key: "exists",
                  value: function (t) {
                    var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { interpolation: {} }
                    if (null == t) return !1
                    var n = this.resolve(t, e)
                    return n && void 0 !== n.res
                  },
                },
                {
                  key: "extractFromKey",
                  value: function (t, e) {
                    var n =
                      void 0 !== e.nsSeparator
                        ? e.nsSeparator
                        : this.options.nsSeparator
                    void 0 === n && (n = ":")
                    var r =
                        void 0 !== e.keySeparator
                          ? e.keySeparator
                          : this.options.keySeparator,
                      o = e.ns || this.options.defaultNS || [],
                      a = n && t.indexOf(n) > -1,
                      i = !(
                        this.options.userDefinedKeySeparator ||
                        e.keySeparator ||
                        this.options.userDefinedNsSeparator ||
                        e.nsSeparator ||
                        (function (t, e, n) {
                          ;(e = e || ""), (n = n || "")
                          var r = z.filter(function (t) {
                            return e.indexOf(t) < 0 && n.indexOf(t) < 0
                          })
                          if (0 === r.length) return !0
                          var o = new RegExp(
                              "(".concat(
                                r
                                  .map(function (t) {
                                    return "?" === t ? "\\?" : t
                                  })
                                  .join("|"),
                                ")"
                              )
                            ),
                            a = !o.test(t)
                          if (!a) {
                            var i = t.indexOf(n)
                            i > 0 && !o.test(t.substring(0, i)) && (a = !0)
                          }
                          return a
                        })(t, n, r)
                      )
                    if (a && !i) {
                      var s = t.match(this.interpolator.nestingRegexp)
                      if (s && s.length > 0) return { key: t, namespaces: o }
                      var c = t.split(n)
                      ;(n !== r ||
                        (n === r && this.options.ns.indexOf(c[0]) > -1)) &&
                        (o = c.shift()),
                        (t = c.join(r))
                    }
                    return (
                      "string" == typeof o && (o = [o]),
                      { key: t, namespaces: o }
                    )
                  },
                },
                {
                  key: "translate",
                  value: function (t, e, r) {
                    var o = this
                    if (
                      ("object" !== d.default(e) &&
                        this.options.overloadTranslationOptionHandler &&
                        (e =
                          this.options.overloadTranslationOptionHandler(
                            arguments
                          )),
                      e || (e = {}),
                      null == t)
                    )
                      return ""
                    Array.isArray(t) || (t = [String(t)])
                    var a =
                        void 0 !== e.keySeparator
                          ? e.keySeparator
                          : this.options.keySeparator,
                      i = this.extractFromKey(t[t.length - 1], e),
                      s = i.key,
                      c = i.namespaces,
                      u = c[c.length - 1],
                      l = e.lng || this.language,
                      f =
                        e.appendNamespaceToCIMode ||
                        this.options.appendNamespaceToCIMode
                    if (l && "cimode" === l.toLowerCase()) {
                      if (f) {
                        var p = e.nsSeparator || this.options.nsSeparator
                        return u + p + s
                      }
                      return s
                    }
                    var h = this.resolve(t, e),
                      g = h && h.res,
                      v = (h && h.usedKey) || s,
                      m = (h && h.exactUsedKey) || s,
                      y = Object.prototype.toString.apply(g),
                      b = [
                        "[object Number]",
                        "[object Function]",
                        "[object RegExp]",
                      ],
                      w =
                        void 0 !== e.joinArrays
                          ? e.joinArrays
                          : this.options.joinArrays,
                      x = !this.i18nFormat || this.i18nFormat.handleAsObject,
                      O =
                        "string" != typeof g &&
                        "boolean" != typeof g &&
                        "number" != typeof g
                    if (
                      x &&
                      g &&
                      O &&
                      b.indexOf(y) < 0 &&
                      ("string" != typeof w || "[object Array]" !== y)
                    ) {
                      if (!e.returnObjects && !this.options.returnObjects)
                        return (
                          this.options.returnedObjectHandler ||
                            this.logger.warn(
                              "accessing an object - but returnObjects options is not enabled!"
                            ),
                          this.options.returnedObjectHandler
                            ? this.options.returnedObjectHandler(
                                v,
                                g,
                                Q(Q({}, e), {}, { ns: c })
                              )
                            : "key '"
                                .concat(s, " (")
                                .concat(
                                  this.language,
                                  ")' returned an object instead of string."
                                )
                        )
                      if (a) {
                        var k = "[object Array]" === y,
                          P = k ? [] : {},
                          S = k ? m : v
                        for (var j in g)
                          if (Object.prototype.hasOwnProperty.call(g, j)) {
                            var E = "".concat(S).concat(a).concat(j)
                            ;(P[j] = this.translate(
                              E,
                              Q(Q({}, e), { joinArrays: !1, ns: c })
                            )),
                              P[j] === E && (P[j] = g[j])
                          }
                        g = P
                      }
                    } else if (
                      x &&
                      "string" == typeof w &&
                      "[object Array]" === y
                    )
                      (g = g.join(w)) &&
                        (g = this.extendTranslation(g, t, e, r))
                    else {
                      var R = !1,
                        _ = !1,
                        C = void 0 !== e.count && "string" != typeof e.count,
                        L = n.hasDefaultValue(e),
                        N = C
                          ? this.pluralResolver.getSuffix(l, e.count, e)
                          : "",
                        A = e["defaultValue".concat(N)] || e.defaultValue
                      !this.isValidLookup(g) && L && ((R = !0), (g = A)),
                        this.isValidLookup(g) || ((_ = !0), (g = s))
                      var D =
                          e.missingKeyNoValueFallbackToKey ||
                          this.options.missingKeyNoValueFallbackToKey,
                        I = D && _ ? void 0 : g,
                        M = L && A !== g && this.options.updateMissing
                      if (_ || R || M) {
                        if (
                          (this.logger.log(
                            M ? "updateKey" : "missingKey",
                            l,
                            u,
                            s,
                            M ? A : g
                          ),
                          a)
                        ) {
                          var T = this.resolve(
                            s,
                            Q(Q({}, e), {}, { keySeparator: !1 })
                          )
                          T &&
                            T.res &&
                            this.logger.warn(
                              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                            )
                        }
                        var F = [],
                          U = this.languageUtils.getFallbackCodes(
                            this.options.fallbackLng,
                            e.lng || this.language
                          )
                        if (
                          "fallback" === this.options.saveMissingTo &&
                          U &&
                          U[0]
                        )
                          for (var z = 0; z < U.length; z++) F.push(U[z])
                        else
                          "all" === this.options.saveMissingTo
                            ? (F = this.languageUtils.toResolveHierarchy(
                                e.lng || this.language
                              ))
                            : F.push(e.lng || this.language)
                        var W = function (t, n, r) {
                          var a = L && r !== g ? r : I
                          o.options.missingKeyHandler
                            ? o.options.missingKeyHandler(t, u, n, a, M, e)
                            : o.backendConnector &&
                              o.backendConnector.saveMissing &&
                              o.backendConnector.saveMissing(t, u, n, a, M, e),
                            o.emit("missingKey", t, u, n, g)
                        }
                        this.options.saveMissing &&
                          (this.options.saveMissingPlurals && C
                            ? F.forEach(function (t) {
                                o.pluralResolver
                                  .getSuffixes(t)
                                  .forEach(function (n) {
                                    W(
                                      [t],
                                      s + n,
                                      e["defaultValue".concat(n)] || A
                                    )
                                  })
                              })
                            : W(F, s, A))
                      }
                      ;(g = this.extendTranslation(g, t, e, h, r)),
                        _ &&
                          g === s &&
                          this.options.appendNamespaceToMissingKey &&
                          (g = "".concat(u, ":").concat(s)),
                        (_ || R) &&
                          this.options.parseMissingKeyHandler &&
                          (g = this.options.parseMissingKeyHandler(g))
                    }
                    return g
                  },
                },
                {
                  key: "extendTranslation",
                  value: function (t, e, n, r, o) {
                    var a = this
                    if (this.i18nFormat && this.i18nFormat.parse)
                      t = this.i18nFormat.parse(
                        t,
                        n,
                        r.usedLng,
                        r.usedNS,
                        r.usedKey,
                        { resolved: r }
                      )
                    else if (!n.skipInterpolation) {
                      n.interpolation &&
                        this.interpolator.init(
                          Q(Q({}, n), {
                            interpolation: Q(
                              Q({}, this.options.interpolation),
                              n.interpolation
                            ),
                          })
                        )
                      var i,
                        s =
                          "string" == typeof t &&
                          ((n.interpolation &&
                            n.interpolation.skipOnVariables) ||
                            this.options.interpolation.skipOnVariables)
                      if (s) {
                        var c = t.match(this.interpolator.nestingRegexp)
                        i = c && c.length
                      }
                      var u =
                        n.replace && "string" != typeof n.replace
                          ? n.replace
                          : n
                      if (
                        (this.options.interpolation.defaultVariables &&
                          (u = Q(
                            Q({}, this.options.interpolation.defaultVariables),
                            u
                          )),
                        (t = this.interpolator.interpolate(
                          t,
                          u,
                          n.lng || this.language,
                          n
                        )),
                        s)
                      ) {
                        var l = t.match(this.interpolator.nestingRegexp)
                        i < (l && l.length) && (n.nest = !1)
                      }
                      !1 !== n.nest &&
                        (t = this.interpolator.nest(
                          t,
                          function () {
                            for (
                              var t = arguments.length, r = new Array(t), i = 0;
                              i < t;
                              i++
                            )
                              r[i] = arguments[i]
                            return o && o[0] === r[0] && !n.context
                              ? (a.logger.warn(
                                  "It seems you are nesting recursively key: "
                                    .concat(r[0], " in key: ")
                                    .concat(e[0])
                                ),
                                null)
                              : a.translate.apply(a, r.concat([e]))
                          },
                          n
                        )),
                        n.interpolation && this.interpolator.reset()
                    }
                    var f = n.postProcess || this.options.postProcess,
                      p = "string" == typeof f ? [f] : f
                    return (
                      null != t &&
                        p &&
                        p.length &&
                        !1 !== n.applyPostProcessor &&
                        (t = K.handle(
                          p,
                          t,
                          e,
                          this.options && this.options.postProcessPassResolved
                            ? Q({ i18nResolved: r }, n)
                            : n,
                          this
                        )),
                      t
                    )
                  },
                },
                {
                  key: "resolve",
                  value: function (t) {
                    var e,
                      n,
                      r,
                      o,
                      a,
                      i = this,
                      s =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {}
                    return (
                      "string" == typeof t && (t = [t]),
                      t.forEach(function (t) {
                        if (!i.isValidLookup(e)) {
                          var c = i.extractFromKey(t, s),
                            u = c.key
                          n = u
                          var l = c.namespaces
                          i.options.fallbackNS &&
                            (l = l.concat(i.options.fallbackNS))
                          var f =
                              void 0 !== s.count && "string" != typeof s.count,
                            p =
                              f &&
                              !s.ordinal &&
                              0 === s.count &&
                              i.pluralResolver.shouldUseIntlApi(),
                            d =
                              void 0 !== s.context &&
                              ("string" == typeof s.context ||
                                "number" == typeof s.context) &&
                              "" !== s.context,
                            h = s.lngs
                              ? s.lngs
                              : i.languageUtils.toResolveHierarchy(
                                  s.lng || i.language,
                                  s.fallbackLng
                                )
                          l.forEach(function (t) {
                            i.isValidLookup(e) ||
                              ((a = t),
                              !G["".concat(h[0], "-").concat(t)] &&
                                i.utils &&
                                i.utils.hasLoadedNamespace &&
                                !i.utils.hasLoadedNamespace(a) &&
                                ((G["".concat(h[0], "-").concat(t)] = !0),
                                i.logger.warn(
                                  'key "'
                                    .concat(n, '" for languages "')
                                    .concat(
                                      h.join(", "),
                                      '" won\'t get resolved as namespace "'
                                    )
                                    .concat(a, '" was not yet loaded'),
                                  "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                                )),
                              h.forEach(function (n) {
                                if (!i.isValidLookup(e)) {
                                  o = n
                                  var a,
                                    c = [u]
                                  if (
                                    i.i18nFormat &&
                                    i.i18nFormat.addLookupKeys
                                  )
                                    i.i18nFormat.addLookupKeys(c, u, n, t, s)
                                  else {
                                    var l
                                    f &&
                                      (l = i.pluralResolver.getSuffix(
                                        n,
                                        s.count,
                                        s
                                      ))
                                    var h = "_zero"
                                    if (
                                      (f && (c.push(u + l), p && c.push(u + h)),
                                      d)
                                    ) {
                                      var g = ""
                                        .concat(u)
                                        .concat(i.options.contextSeparator)
                                        .concat(s.context)
                                      c.push(g),
                                        f && (c.push(g + l), p && c.push(g + h))
                                    }
                                  }
                                  for (; (a = c.pop()); )
                                    i.isValidLookup(e) ||
                                      ((r = a), (e = i.getResource(n, t, a, s)))
                                }
                              }))
                          })
                        }
                      }),
                      {
                        res: e,
                        usedKey: n,
                        exactUsedKey: r,
                        usedLng: o,
                        usedNS: a,
                      }
                    )
                  },
                },
                {
                  key: "isValidLookup",
                  value: function (t) {
                    return !(
                      void 0 === t ||
                      (!this.options.returnNull && null === t) ||
                      (!this.options.returnEmptyString && "" === t)
                    )
                  },
                },
                {
                  key: "getResource",
                  value: function (t, e, n) {
                    var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {}
                    return this.i18nFormat && this.i18nFormat.getResource
                      ? this.i18nFormat.getResource(t, e, n, r)
                      : this.resourceStore.getResource(t, e, n, r)
                  },
                },
              ],
              [
                {
                  key: "hasDefaultValue",
                  value: function (t) {
                    var e = "defaultValue"
                    for (var n in t)
                      if (
                        Object.prototype.hasOwnProperty.call(t, n) &&
                        e === n.substring(0, e.length) &&
                        void 0 !== t[n]
                      )
                        return !0
                    return !1
                  },
                },
              ]
            ),
            n
          )
        })(E)
      function $(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
      }
      var X = (function () {
          function t(e) {
            h.default(this, t),
              (this.options = e),
              (this.supportedLngs = this.options.supportedLngs || !1),
              (this.logger = j.create("languageUtils"))
          }
          return (
            g.default(t, [
              {
                key: "getScriptPartFromCode",
                value: function (t) {
                  if (!t || t.indexOf("-") < 0) return null
                  var e = t.split("-")
                  return 2 === e.length
                    ? null
                    : (e.pop(),
                      "x" === e[e.length - 1].toLowerCase()
                        ? null
                        : this.formatLanguageCode(e.join("-")))
                },
              },
              {
                key: "getLanguagePartFromCode",
                value: function (t) {
                  if (!t || t.indexOf("-") < 0) return t
                  var e = t.split("-")
                  return this.formatLanguageCode(e[0])
                },
              },
              {
                key: "formatLanguageCode",
                value: function (t) {
                  if ("string" == typeof t && t.indexOf("-") > -1) {
                    var e = [
                        "hans",
                        "hant",
                        "latn",
                        "cyrl",
                        "cans",
                        "mong",
                        "arab",
                      ],
                      n = t.split("-")
                    return (
                      this.options.lowerCaseLng
                        ? (n = n.map(function (t) {
                            return t.toLowerCase()
                          }))
                        : 2 === n.length
                        ? ((n[0] = n[0].toLowerCase()),
                          (n[1] = n[1].toUpperCase()),
                          e.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = $(n[1].toLowerCase())))
                        : 3 === n.length &&
                          ((n[0] = n[0].toLowerCase()),
                          2 === n[1].length && (n[1] = n[1].toUpperCase()),
                          "sgn" !== n[0] &&
                            2 === n[2].length &&
                            (n[2] = n[2].toUpperCase()),
                          e.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = $(n[1].toLowerCase())),
                          e.indexOf(n[2].toLowerCase()) > -1 &&
                            (n[2] = $(n[2].toLowerCase()))),
                      n.join("-")
                    )
                  }
                  return this.options.cleanCode || this.options.lowerCaseLng
                    ? t.toLowerCase()
                    : t
                },
              },
              {
                key: "isSupportedCode",
                value: function (t) {
                  return (
                    ("languageOnly" === this.options.load ||
                      this.options.nonExplicitSupportedLngs) &&
                      (t = this.getLanguagePartFromCode(t)),
                    !this.supportedLngs ||
                      !this.supportedLngs.length ||
                      this.supportedLngs.indexOf(t) > -1
                  )
                },
              },
              {
                key: "getBestMatchFromCodes",
                value: function (t) {
                  var e,
                    n = this
                  return t
                    ? (t.forEach(function (t) {
                        if (!e) {
                          var r = n.formatLanguageCode(t)
                          ;(n.options.supportedLngs && !n.isSupportedCode(r)) ||
                            (e = r)
                        }
                      }),
                      !e &&
                        this.options.supportedLngs &&
                        t.forEach(function (t) {
                          if (!e) {
                            var r = n.getLanguagePartFromCode(t)
                            if (n.isSupportedCode(r)) return (e = r)
                            e = n.options.supportedLngs.find(function (t) {
                              if (0 === t.indexOf(r)) return t
                            })
                          }
                        }),
                      e ||
                        (e = this.getFallbackCodes(
                          this.options.fallbackLng
                        )[0]),
                      e)
                    : null
                },
              },
              {
                key: "getFallbackCodes",
                value: function (t, e) {
                  if (!t) return []
                  if (
                    ("function" == typeof t && (t = t(e)),
                    "string" == typeof t && (t = [t]),
                    "[object Array]" === Object.prototype.toString.apply(t))
                  )
                    return t
                  if (!e) return t.default || []
                  var n = t[e]
                  return (
                    n || (n = t[this.getScriptPartFromCode(e)]),
                    n || (n = t[this.formatLanguageCode(e)]),
                    n || (n = t[this.getLanguagePartFromCode(e)]),
                    n || (n = t.default),
                    n || []
                  )
                },
              },
              {
                key: "toResolveHierarchy",
                value: function (t, e) {
                  var n = this,
                    r = this.getFallbackCodes(
                      e || this.options.fallbackLng || [],
                      t
                    ),
                    o = [],
                    a = function (t) {
                      t &&
                        (n.isSupportedCode(t)
                          ? o.push(t)
                          : n.logger.warn(
                              "rejecting language code not found in supportedLngs: ".concat(
                                t
                              )
                            ))
                    }
                  return (
                    "string" == typeof t && t.indexOf("-") > -1
                      ? ("languageOnly" !== this.options.load &&
                          a(this.formatLanguageCode(t)),
                        "languageOnly" !== this.options.load &&
                          "currentOnly" !== this.options.load &&
                          a(this.getScriptPartFromCode(t)),
                        "currentOnly" !== this.options.load &&
                          a(this.getLanguagePartFromCode(t)))
                      : "string" == typeof t && a(this.formatLanguageCode(t)),
                    r.forEach(function (t) {
                      o.indexOf(t) < 0 && a(n.formatLanguageCode(t))
                    }),
                    o
                  )
                },
              },
            ]),
            t
          )
        })(),
        tt = [
          {
            lngs: [
              "ach",
              "ak",
              "am",
              "arn",
              "br",
              "fil",
              "gun",
              "ln",
              "mfe",
              "mg",
              "mi",
              "oc",
              "pt",
              "pt-BR",
              "tg",
              "tl",
              "ti",
              "tr",
              "uz",
              "wa",
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              "af",
              "an",
              "ast",
              "az",
              "bg",
              "bn",
              "ca",
              "da",
              "de",
              "dev",
              "el",
              "en",
              "eo",
              "es",
              "et",
              "eu",
              "fi",
              "fo",
              "fur",
              "fy",
              "gl",
              "gu",
              "ha",
              "hi",
              "hu",
              "hy",
              "ia",
              "it",
              "kk",
              "kn",
              "ku",
              "lb",
              "mai",
              "ml",
              "mn",
              "mr",
              "nah",
              "nap",
              "nb",
              "ne",
              "nl",
              "nn",
              "no",
              "nso",
              "pa",
              "pap",
              "pms",
              "ps",
              "pt-PT",
              "rm",
              "sco",
              "se",
              "si",
              "so",
              "son",
              "sq",
              "sv",
              "sw",
              "ta",
              "te",
              "tk",
              "ur",
              "yo",
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              "ay",
              "bo",
              "cgg",
              "fa",
              "ht",
              "id",
              "ja",
              "jbo",
              "ka",
              "km",
              "ko",
              "ky",
              "lo",
              "ms",
              "sah",
              "su",
              "th",
              "tt",
              "ug",
              "vi",
              "wo",
              "zh",
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
          { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
          { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ["fr"], nr: [1, 2], fc: 9 },
          { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ["is"], nr: [1, 2], fc: 12 },
          { lngs: ["jv"], nr: [0, 1], fc: 13 },
          { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
          { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
          { lngs: ["mk"], nr: [1, 2], fc: 17 },
          { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
          { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ["or"], nr: [2, 1], fc: 2 },
          { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
          { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
        ],
        et = {
          1: function (t) {
            return Number(t > 1)
          },
          2: function (t) {
            return Number(1 != t)
          },
          3: function (t) {
            return 0
          },
          4: function (t) {
            return Number(
              t % 10 == 1 && t % 100 != 11
                ? 0
                : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
                ? 1
                : 2
            )
          },
          5: function (t) {
            return Number(
              0 == t
                ? 0
                : 1 == t
                ? 1
                : 2 == t
                ? 2
                : t % 100 >= 3 && t % 100 <= 10
                ? 3
                : t % 100 >= 11
                ? 4
                : 5
            )
          },
          6: function (t) {
            return Number(1 == t ? 0 : t >= 2 && t <= 4 ? 1 : 2)
          },
          7: function (t) {
            return Number(
              1 == t
                ? 0
                : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
                ? 1
                : 2
            )
          },
          8: function (t) {
            return Number(1 == t ? 0 : 2 == t ? 1 : 8 != t && 11 != t ? 2 : 3)
          },
          9: function (t) {
            return Number(t >= 2)
          },
          10: function (t) {
            return Number(1 == t ? 0 : 2 == t ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4)
          },
          11: function (t) {
            return Number(
              1 == t || 11 == t
                ? 0
                : 2 == t || 12 == t
                ? 1
                : t > 2 && t < 20
                ? 2
                : 3
            )
          },
          12: function (t) {
            return Number(t % 10 != 1 || t % 100 == 11)
          },
          13: function (t) {
            return Number(0 !== t)
          },
          14: function (t) {
            return Number(1 == t ? 0 : 2 == t ? 1 : 3 == t ? 2 : 3)
          },
          15: function (t) {
            return Number(
              t % 10 == 1 && t % 100 != 11
                ? 0
                : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20)
                ? 1
                : 2
            )
          },
          16: function (t) {
            return Number(t % 10 == 1 && t % 100 != 11 ? 0 : 0 !== t ? 1 : 2)
          },
          17: function (t) {
            return Number(1 == t || (t % 10 == 1 && t % 100 != 11) ? 0 : 1)
          },
          18: function (t) {
            return Number(0 == t ? 0 : 1 == t ? 1 : 2)
          },
          19: function (t) {
            return Number(
              1 == t
                ? 0
                : 0 == t || (t % 100 > 1 && t % 100 < 11)
                ? 1
                : t % 100 > 10 && t % 100 < 20
                ? 2
                : 3
            )
          },
          20: function (t) {
            return Number(
              1 == t ? 0 : 0 == t || (t % 100 > 0 && t % 100 < 20) ? 1 : 2
            )
          },
          21: function (t) {
            return Number(
              t % 100 == 1
                ? 1
                : t % 100 == 2
                ? 2
                : t % 100 == 3 || t % 100 == 4
                ? 3
                : 0
            )
          },
          22: function (t) {
            return Number(
              1 == t ? 0 : 2 == t ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3
            )
          },
        },
        nt = ["v1", "v2", "v3"],
        rt = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }
      function ot() {
        var t = {}
        return (
          tt.forEach(function (e) {
            e.lngs.forEach(function (n) {
              t[n] = { numbers: e.nr, plurals: et[e.fc] }
            })
          }),
          t
        )
      }
      var at = (function () {
        function t(e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          h.default(this, t),
            (this.languageUtils = e),
            (this.options = n),
            (this.logger = j.create("pluralResolver")),
            (this.options.compatibilityJSON &&
              "v4" !== this.options.compatibilityJSON) ||
              ("undefined" != typeof Intl && Intl.PluralRules) ||
              ((this.options.compatibilityJSON = "v3"),
              this.logger.error(
                "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
              )),
            (this.rules = ot())
        }
        return (
          g.default(t, [
            {
              key: "addRule",
              value: function (t, e) {
                this.rules[t] = e
              },
            },
            {
              key: "getRule",
              value: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {}
                if (this.shouldUseIntlApi())
                  try {
                    return new Intl.PluralRules(t, {
                      type: e.ordinal ? "ordinal" : "cardinal",
                    })
                  } catch (n) {
                    return
                  }
                return (
                  this.rules[t] ||
                  this.rules[this.languageUtils.getLanguagePartFromCode(t)]
                )
              },
            },
            {
              key: "needsPlural",
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = this.getRule(t, e)
                return this.shouldUseIntlApi()
                  ? n && n.resolvedOptions().pluralCategories.length > 1
                  : n && n.numbers.length > 1
              },
            },
            {
              key: "getPluralFormsOfKey",
              value: function (t, e) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {}
                return this.getSuffixes(t, n).map(function (t) {
                  return "".concat(e).concat(t)
                })
              },
            },
            {
              key: "getSuffixes",
              value: function (t) {
                var e = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = this.getRule(t, n)
                return r
                  ? this.shouldUseIntlApi()
                    ? r
                        .resolvedOptions()
                        .pluralCategories.sort(function (t, e) {
                          return rt[t] - rt[e]
                        })
                        .map(function (t) {
                          return "".concat(e.options.prepend).concat(t)
                        })
                    : r.numbers.map(function (r) {
                        return e.getSuffix(t, r, n)
                      })
                  : []
              },
            },
            {
              key: "getSuffix",
              value: function (t, e) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  r = this.getRule(t, n)
                return r
                  ? this.shouldUseIntlApi()
                    ? "".concat(this.options.prepend).concat(r.select(e))
                    : this.getSuffixRetroCompatible(r, e)
                  : (this.logger.warn("no plural rule found for: ".concat(t)),
                    "")
              },
            },
            {
              key: "getSuffixRetroCompatible",
              value: function (t, e) {
                var n = this,
                  r = t.noAbs ? t.plurals(e) : t.plurals(Math.abs(e)),
                  o = t.numbers[r]
                this.options.simplifyPluralSuffix &&
                  2 === t.numbers.length &&
                  1 === t.numbers[0] &&
                  (2 === o ? (o = "plural") : 1 === o && (o = ""))
                var a = function () {
                  return n.options.prepend && o.toString()
                    ? n.options.prepend + o.toString()
                    : o.toString()
                }
                return "v1" === this.options.compatibilityJSON
                  ? 1 === o
                    ? ""
                    : "number" == typeof o
                    ? "_plural_".concat(o.toString())
                    : a()
                  : "v2" === this.options.compatibilityJSON ||
                    (this.options.simplifyPluralSuffix &&
                      2 === t.numbers.length &&
                      1 === t.numbers[0])
                  ? a()
                  : this.options.prepend && r.toString()
                  ? this.options.prepend + r.toString()
                  : r.toString()
              },
            },
            {
              key: "shouldUseIntlApi",
              value: function () {
                return !nt.includes(this.options.compatibilityJSON)
              },
            },
          ]),
          t
        )
      })()
      function it(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function st(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? it(Object(n), !0).forEach(function (e) {
                w.default(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : it(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                )
              })
        }
        return t
      }
      var ct = (function () {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          h.default(this, t),
            (this.logger = j.create("interpolator")),
            (this.options = e),
            (this.format =
              (e.interpolation && e.interpolation.format) ||
              function (t) {
                return t
              }),
            this.init(e)
        }
        return (
          g.default(t, [
            {
              key: "init",
              value: function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                t.interpolation || (t.interpolation = { escapeValue: !0 })
                var e = t.interpolation
                ;(this.escape = void 0 !== e.escape ? e.escape : F),
                  (this.escapeValue =
                    void 0 === e.escapeValue || e.escapeValue),
                  (this.useRawValueToEscape =
                    void 0 !== e.useRawValueToEscape && e.useRawValueToEscape),
                  (this.prefix = e.prefix
                    ? M(e.prefix)
                    : e.prefixEscaped || "{{"),
                  (this.suffix = e.suffix
                    ? M(e.suffix)
                    : e.suffixEscaped || "}}"),
                  (this.formatSeparator = e.formatSeparator
                    ? e.formatSeparator
                    : e.formatSeparator || ","),
                  (this.unescapePrefix = e.unescapeSuffix
                    ? ""
                    : e.unescapePrefix || "-"),
                  (this.unescapeSuffix = this.unescapePrefix
                    ? ""
                    : e.unescapeSuffix || ""),
                  (this.nestingPrefix = e.nestingPrefix
                    ? M(e.nestingPrefix)
                    : e.nestingPrefixEscaped || M("$t(")),
                  (this.nestingSuffix = e.nestingSuffix
                    ? M(e.nestingSuffix)
                    : e.nestingSuffixEscaped || M(")")),
                  (this.nestingOptionsSeparator = e.nestingOptionsSeparator
                    ? e.nestingOptionsSeparator
                    : e.nestingOptionsSeparator || ","),
                  (this.maxReplaces = e.maxReplaces ? e.maxReplaces : 1e3),
                  (this.alwaysFormat =
                    void 0 !== e.alwaysFormat && e.alwaysFormat),
                  this.resetRegExp()
              },
            },
            {
              key: "reset",
              value: function () {
                this.options && this.init(this.options)
              },
            },
            {
              key: "resetRegExp",
              value: function () {
                var t = "".concat(this.prefix, "(.+?)").concat(this.suffix)
                this.regexp = new RegExp(t, "g")
                var e = ""
                  .concat(this.prefix)
                  .concat(this.unescapePrefix, "(.+?)")
                  .concat(this.unescapeSuffix)
                  .concat(this.suffix)
                this.regexpUnescape = new RegExp(e, "g")
                var n = ""
                  .concat(this.nestingPrefix, "(.+?)")
                  .concat(this.nestingSuffix)
                this.nestingRegexp = new RegExp(n, "g")
              },
            },
            {
              key: "interpolate",
              value: function (t, e, n, r) {
                var o,
                  a,
                  i,
                  s = this,
                  c =
                    (this.options &&
                      this.options.interpolation &&
                      this.options.interpolation.defaultVariables) ||
                    {}
                function u(t) {
                  return t.replace(/\$/g, "$$$$")
                }
                var l = function (t) {
                  if (t.indexOf(s.formatSeparator) < 0) {
                    var o = D(e, c, t)
                    return s.alwaysFormat
                      ? s.format(
                          o,
                          void 0,
                          n,
                          st(st(st({}, r), e), {}, { interpolationkey: t })
                        )
                      : o
                  }
                  var a = t.split(s.formatSeparator),
                    i = a.shift().trim(),
                    u = a.join(s.formatSeparator).trim()
                  return s.format(
                    D(e, c, i),
                    u,
                    n,
                    st(st(st({}, r), e), {}, { interpolationkey: i })
                  )
                }
                this.resetRegExp()
                var f =
                    (r && r.missingInterpolationHandler) ||
                    this.options.missingInterpolationHandler,
                  p =
                    (r && r.interpolation && r.interpolation.skipOnVariables) ||
                    this.options.interpolation.skipOnVariables
                return (
                  [
                    {
                      regex: this.regexpUnescape,
                      safeValue: function (t) {
                        return u(t)
                      },
                    },
                    {
                      regex: this.regexp,
                      safeValue: function (t) {
                        return s.escapeValue ? u(s.escape(t)) : u(t)
                      },
                    },
                  ].forEach(function (e) {
                    for (i = 0; (o = e.regex.exec(t)); ) {
                      if (void 0 === (a = l(o[1].trim())))
                        if ("function" == typeof f) {
                          var n = f(t, o, r)
                          a = "string" == typeof n ? n : ""
                        } else {
                          if (p) {
                            a = o[0]
                            continue
                          }
                          s.logger.warn(
                            "missed to pass in variable "
                              .concat(o[1], " for interpolating ")
                              .concat(t)
                          ),
                            (a = "")
                        }
                      else
                        "string" == typeof a ||
                          s.useRawValueToEscape ||
                          (a = _(a))
                      var c = e.safeValue(a)
                      if (
                        ((t = t.replace(o[0], c)),
                        p
                          ? ((e.regex.lastIndex += c.length),
                            (e.regex.lastIndex -= o[0].length))
                          : (e.regex.lastIndex = 0),
                        ++i >= s.maxReplaces)
                      )
                        break
                    }
                  }),
                  t
                )
              },
            },
            {
              key: "nest",
              value: function (t, e) {
                var n,
                  r,
                  o = this,
                  a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  i = st({}, a)
                function s(t, e) {
                  var n = this.nestingOptionsSeparator
                  if (t.indexOf(n) < 0) return t
                  var r = t.split(new RegExp("".concat(n, "[ ]*{"))),
                    o = "{".concat(r[1])
                  ;(t = r[0]),
                    (o = (o = this.interpolate(o, i)).replace(/'/g, '"'))
                  try {
                    ;(i = JSON.parse(o)), e && (i = st(st({}, e), i))
                  } catch (a) {
                    return (
                      this.logger.warn(
                        "failed parsing options string in nesting for key ".concat(
                          t
                        ),
                        a
                      ),
                      "".concat(t).concat(n).concat(o)
                    )
                  }
                  return delete i.defaultValue, t
                }
                for (
                  i.applyPostProcessor = !1, delete i.defaultValue;
                  (n = this.nestingRegexp.exec(t));

                ) {
                  var c = [],
                    u = !1
                  if (
                    -1 !== n[0].indexOf(this.formatSeparator) &&
                    !/{.*}/.test(n[1])
                  ) {
                    var l = n[1].split(this.formatSeparator).map(function (t) {
                      return t.trim()
                    })
                    ;(n[1] = l.shift()), (c = l), (u = !0)
                  }
                  if (
                    (r = e(s.call(this, n[1].trim(), i), i)) &&
                    n[0] === t &&
                    "string" != typeof r
                  )
                    return r
                  "string" != typeof r && (r = _(r)),
                    r ||
                      (this.logger.warn(
                        "missed to resolve "
                          .concat(n[1], " for nesting ")
                          .concat(t)
                      ),
                      (r = "")),
                    u &&
                      (r = c.reduce(function (t, e) {
                        return o.format(
                          t,
                          e,
                          a.lng,
                          st(st({}, a), {}, { interpolationkey: n[1].trim() })
                        )
                      }, r.trim())),
                    (t = t.replace(n[0], r)),
                    (this.regexp.lastIndex = 0)
                }
                return t
              },
            },
          ]),
          t
        )
      })()
      function ut(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function lt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? ut(Object(n), !0).forEach(function (e) {
                w.default(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : ut(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                )
              })
        }
        return t
      }
      var ft = (function () {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          h.default(this, t),
            (this.logger = j.create("formatter")),
            (this.options = e),
            (this.formats = {
              number: function (t, e, n) {
                return new Intl.NumberFormat(e, n).format(t)
              },
              currency: function (t, e, n) {
                return new Intl.NumberFormat(
                  e,
                  lt(lt({}, n), {}, { style: "currency" })
                ).format(t)
              },
              datetime: function (t, e, n) {
                return new Intl.DateTimeFormat(e, lt({}, n)).format(t)
              },
              relativetime: function (t, e, n) {
                return new Intl.RelativeTimeFormat(e, lt({}, n)).format(
                  t,
                  n.range || "day"
                )
              },
              list: function (t, e, n) {
                return new Intl.ListFormat(e, lt({}, n)).format(t)
              },
            }),
            this.init(e)
        }
        return (
          g.default(t, [
            {
              key: "init",
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { interpolation: {} },
                  n = e.interpolation
                this.formatSeparator = n.formatSeparator
                  ? n.formatSeparator
                  : n.formatSeparator || ","
              },
            },
            {
              key: "add",
              value: function (t, e) {
                this.formats[t] = e
              },
            },
            {
              key: "format",
              value: function (t, e, n, r) {
                var o = this
                return e.split(this.formatSeparator).reduce(function (t, e) {
                  var a = (function (t) {
                      var e = t.toLowerCase().trim(),
                        n = {}
                      if (t.indexOf("(") > -1) {
                        var r = t.split("(")
                        e = r[0].toLowerCase().trim()
                        var o = r[1].substring(0, r[1].length - 1)
                        "currency" === e && o.indexOf(":") < 0
                          ? n.currency || (n.currency = o.trim())
                          : "relativetime" === e && o.indexOf(":") < 0
                          ? n.range || (n.range = o.trim())
                          : o.split(";").forEach(function (t) {
                              if (t) {
                                var e = t.split(":"),
                                  r = x.default(e),
                                  o = r[0],
                                  a = r.slice(1).join(":")
                                "false" === a.trim() && (n[o.trim()] = !1),
                                  "true" === a.trim() && (n[o.trim()] = !0),
                                  isNaN(a.trim()) ||
                                    (n[o.trim()] = parseInt(a.trim(), 10)),
                                  n[o.trim()] || (n[o.trim()] = a.trim())
                              }
                            })
                      }
                      return { formatName: e, formatOptions: n }
                    })(e),
                    i = a.formatName,
                    s = a.formatOptions
                  if (o.formats[i]) {
                    var c = t
                    try {
                      var u =
                          (r &&
                            r.formatParams &&
                            r.formatParams[r.interpolationkey]) ||
                          {},
                        l = u.locale || u.lng || r.locale || r.lng || n
                      c = o.formats[i](t, l, lt(lt(lt({}, s), r), u))
                    } catch (f) {
                      o.logger.warn(f)
                    }
                    return c
                  }
                  return (
                    o.logger.warn(
                      "there was no format function for ".concat(i)
                    ),
                    t
                  )
                }, t)
              },
            },
          ]),
          t
        )
      })()
      function pt(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function dt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? pt(Object(n), !0).forEach(function (e) {
                w.default(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : pt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                )
              })
        }
        return t
      }
      function ht(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            )
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var n,
            r = b.default(t)
          if (e) {
            var o = b.default(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return y.default(this, n)
        }
      }
      var gt = (function (t) {
        m.default(n, t)
        var e = ht(n)
        function n(t, r, o) {
          var a,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {}
          return (
            h.default(this, n),
            (a = e.call(this)),
            U && E.call(v.default(a)),
            (a.backend = t),
            (a.store = r),
            (a.services = o),
            (a.languageUtils = o.languageUtils),
            (a.options = i),
            (a.logger = j.create("backendConnector")),
            (a.state = {}),
            (a.queue = []),
            a.backend && a.backend.init && a.backend.init(o, i.backend, i),
            a
          )
        }
        return (
          g.default(n, [
            {
              key: "queueLoad",
              value: function (t, e, n, r) {
                var o = this,
                  a = [],
                  i = [],
                  s = [],
                  c = []
                return (
                  t.forEach(function (t) {
                    var r = !0
                    e.forEach(function (e) {
                      var s = "".concat(t, "|").concat(e)
                      !n.reload && o.store.hasResourceBundle(t, e)
                        ? (o.state[s] = 2)
                        : o.state[s] < 0 ||
                          (1 === o.state[s]
                            ? i.indexOf(s) < 0 && i.push(s)
                            : ((o.state[s] = 1),
                              (r = !1),
                              i.indexOf(s) < 0 && i.push(s),
                              a.indexOf(s) < 0 && a.push(s),
                              c.indexOf(e) < 0 && c.push(e)))
                    }),
                      r || s.push(t)
                  }),
                  (a.length || i.length) &&
                    this.queue.push({
                      pending: i,
                      loaded: {},
                      errors: [],
                      callback: r,
                    }),
                  {
                    toLoad: a,
                    pending: i,
                    toLoadLanguages: s,
                    toLoadNamespaces: c,
                  }
                )
              },
            },
            {
              key: "loaded",
              value: function (t, e, n) {
                var r = t.split("|"),
                  o = r[0],
                  a = r[1]
                e && this.emit("failedLoading", o, a, e),
                  n && this.store.addResourceBundle(o, a, n),
                  (this.state[t] = e ? -1 : 2)
                var i = {}
                this.queue.forEach(function (n) {
                  var r, s, c, u, l, f
                  ;(r = n.loaded),
                    (s = a),
                    (u = L(r, [o], Object)),
                    (l = u.obj),
                    (f = u.k),
                    (l[f] = l[f] || []),
                    c && (l[f] = l[f].concat(s)),
                    c || l[f].push(s),
                    (function (t, e) {
                      for (var n = t.indexOf(e); -1 !== n; )
                        t.splice(n, 1), (n = t.indexOf(e))
                    })(n.pending, t),
                    e && n.errors.push(e),
                    0 !== n.pending.length ||
                      n.done ||
                      (Object.keys(n.loaded).forEach(function (t) {
                        i[t] || (i[t] = []),
                          n.loaded[t].length &&
                            n.loaded[t].forEach(function (e) {
                              i[t].indexOf(e) < 0 && i[t].push(e)
                            })
                      }),
                      (n.done = !0),
                      n.errors.length ? n.callback(n.errors) : n.callback())
                }),
                  this.emit("loaded", i),
                  (this.queue = this.queue.filter(function (t) {
                    return !t.done
                  }))
              },
            },
            {
              key: "read",
              value: function (t, e, n) {
                var r = this,
                  o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  a =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 350,
                  i = arguments.length > 5 ? arguments[5] : void 0
                return t.length
                  ? this.backend[n](t, e, function (s, c) {
                      s && c && o < 5
                        ? setTimeout(function () {
                            r.read.call(r, t, e, n, o + 1, 2 * a, i)
                          }, a)
                        : i(s, c)
                    })
                  : i(null, {})
              },
            },
            {
              key: "prepareLoading",
              value: function (t, e) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  o = arguments.length > 3 ? arguments[3] : void 0
                if (!this.backend)
                  return (
                    this.logger.warn(
                      "No backend was added via i18next.use. Will not load resources."
                    ),
                    o && o()
                  )
                "string" == typeof t &&
                  (t = this.languageUtils.toResolveHierarchy(t)),
                  "string" == typeof e && (e = [e])
                var a = this.queueLoad(t, e, r, o)
                if (!a.toLoad.length) return a.pending.length || o(), null
                a.toLoad.forEach(function (t) {
                  n.loadOne(t)
                })
              },
            },
            {
              key: "load",
              value: function (t, e, n) {
                this.prepareLoading(t, e, {}, n)
              },
            },
            {
              key: "reload",
              value: function (t, e, n) {
                this.prepareLoading(t, e, { reload: !0 }, n)
              },
            },
            {
              key: "loadOne",
              value: function (t) {
                var e = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  r = t.split("|"),
                  o = r[0],
                  a = r[1]
                this.read(o, a, "read", void 0, void 0, function (r, i) {
                  r &&
                    e.logger.warn(
                      ""
                        .concat(n, "loading namespace ")
                        .concat(a, " for language ")
                        .concat(o, " failed"),
                      r
                    ),
                    !r &&
                      i &&
                      e.logger.log(
                        ""
                          .concat(n, "loaded namespace ")
                          .concat(a, " for language ")
                          .concat(o),
                        i
                      ),
                    e.loaded(t, r, i)
                })
              },
            },
            {
              key: "saveMissing",
              value: function (t, e, n, r, o) {
                var a =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : {}
                this.services.utils &&
                this.services.utils.hasLoadedNamespace &&
                !this.services.utils.hasLoadedNamespace(e)
                  ? this.logger.warn(
                      'did not save key "'
                        .concat(n, '" as the namespace "')
                        .concat(e, '" was not yet loaded'),
                      "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                    )
                  : null != n &&
                    "" !== n &&
                    (this.backend &&
                      this.backend.create &&
                      this.backend.create(
                        t,
                        e,
                        n,
                        r,
                        null,
                        dt(dt({}, a), {}, { isUpdate: o })
                      ),
                    t && t[0] && this.store.addResource(t[0], e, n, r))
              },
            },
          ]),
          n
        )
      })(E)
      function vt() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ["translation"],
          defaultNS: ["translation"],
          fallbackLng: ["dev"],
          fallbackNS: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: "all",
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: ".",
          nsSeparator: ":",
          pluralSeparator: "_",
          contextSeparator: "_",
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: "fallback",
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !0,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (t) {
            var e = {}
            if (
              ("object" === d.default(t[1]) && (e = t[1]),
              "string" == typeof t[1] && (e.defaultValue = t[1]),
              "string" == typeof t[2] && (e.tDescription = t[2]),
              "object" === d.default(t[2]) || "object" === d.default(t[3]))
            ) {
              var n = t[3] || t[2]
              Object.keys(n).forEach(function (t) {
                e[t] = n[t]
              })
            }
            return e
          },
          interpolation: {
            escapeValue: !0,
            format: function (t, e, n, r) {
              return t
            },
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0,
          },
        }
      }
      function mt(t) {
        return (
          "string" == typeof t.ns && (t.ns = [t.ns]),
          "string" == typeof t.fallbackLng && (t.fallbackLng = [t.fallbackLng]),
          "string" == typeof t.fallbackNS && (t.fallbackNS = [t.fallbackNS]),
          t.supportedLngs &&
            t.supportedLngs.indexOf("cimode") < 0 &&
            (t.supportedLngs = t.supportedLngs.concat(["cimode"])),
          t
        )
      }
      function yt(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function bt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? yt(Object(n), !0).forEach(function (e) {
                w.default(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : yt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                )
              })
        }
        return t
      }
      function wt(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            )
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var n,
            r = b.default(t)
          if (e) {
            var o = b.default(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return y.default(this, n)
        }
      }
      function xt() {}
      function Ot(t) {
        Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(function (
          e
        ) {
          "function" == typeof t[e] && (t[e] = t[e].bind(t))
        })
      }
      var kt = (function (t) {
        m.default(n, t)
        var e = wt(n)
        function n() {
          var t,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            o = arguments.length > 1 ? arguments[1] : void 0
          if (
            (h.default(this, n),
            (t = e.call(this)),
            U && E.call(v.default(t)),
            (t.options = mt(r)),
            (t.services = {}),
            (t.logger = j),
            (t.modules = { external: [] }),
            Ot(v.default(t)),
            o && !t.isInitialized && !r.isClone)
          ) {
            if (!t.options.initImmediate)
              return t.init(r, o), y.default(t, v.default(t))
            setTimeout(function () {
              t.init(r, o)
            }, 0)
          }
          return t
        }
        return (
          g.default(n, [
            {
              key: "init",
              value: function () {
                var t = this,
                  e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = arguments.length > 1 ? arguments[1] : void 0
                "function" == typeof e && ((n = e), (e = {})),
                  !e.defaultNS &&
                    e.ns &&
                    ("string" == typeof e.ns
                      ? (e.defaultNS = e.ns)
                      : e.ns.indexOf("translation") < 0 &&
                        (e.defaultNS = e.ns[0]))
                var r = vt()
                function o(t) {
                  return t ? ("function" == typeof t ? new t() : t) : null
                }
                if (
                  ((this.options = bt(bt(bt({}, r), this.options), mt(e))),
                  "v1" !== this.options.compatibilityAPI &&
                    (this.options.interpolation = bt(
                      bt({}, r.interpolation),
                      this.options.interpolation
                    )),
                  void 0 !== e.keySeparator &&
                    (this.options.userDefinedKeySeparator = e.keySeparator),
                  void 0 !== e.nsSeparator &&
                    (this.options.userDefinedNsSeparator = e.nsSeparator),
                  !this.options.isClone)
                ) {
                  var a
                  this.modules.logger
                    ? j.init(o(this.modules.logger), this.options)
                    : j.init(null, this.options),
                    this.modules.formatter
                      ? (a = this.modules.formatter)
                      : "undefined" != typeof Intl && (a = ft)
                  var i = new X(this.options)
                  this.store = new B(this.options.resources, this.options)
                  var s = this.services
                  ;(s.logger = j),
                    (s.resourceStore = this.store),
                    (s.languageUtils = i),
                    (s.pluralResolver = new at(i, {
                      prepend: this.options.pluralSeparator,
                      compatibilityJSON: this.options.compatibilityJSON,
                      simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                    })),
                    !a ||
                      (this.options.interpolation.format &&
                        this.options.interpolation.format !==
                          r.interpolation.format) ||
                      ((s.formatter = o(a)),
                      s.formatter.init(s, this.options),
                      (this.options.interpolation.format =
                        s.formatter.format.bind(s.formatter))),
                    (s.interpolator = new ct(this.options)),
                    (s.utils = {
                      hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
                    }),
                    (s.backendConnector = new gt(
                      o(this.modules.backend),
                      s.resourceStore,
                      s,
                      this.options
                    )),
                    s.backendConnector.on("*", function (e) {
                      for (
                        var n = arguments.length,
                          r = new Array(n > 1 ? n - 1 : 0),
                          o = 1;
                        o < n;
                        o++
                      )
                        r[o - 1] = arguments[o]
                      t.emit.apply(t, [e].concat(r))
                    }),
                    this.modules.languageDetector &&
                      ((s.languageDetector = o(this.modules.languageDetector)),
                      s.languageDetector.init(
                        s,
                        this.options.detection,
                        this.options
                      )),
                    this.modules.i18nFormat &&
                      ((s.i18nFormat = o(this.modules.i18nFormat)),
                      s.i18nFormat.init && s.i18nFormat.init(this)),
                    (this.translator = new Z(this.services, this.options)),
                    this.translator.on("*", function (e) {
                      for (
                        var n = arguments.length,
                          r = new Array(n > 1 ? n - 1 : 0),
                          o = 1;
                        o < n;
                        o++
                      )
                        r[o - 1] = arguments[o]
                      t.emit.apply(t, [e].concat(r))
                    }),
                    this.modules.external.forEach(function (e) {
                      e.init && e.init(t)
                    })
                }
                if (
                  ((this.format = this.options.interpolation.format),
                  n || (n = xt),
                  this.options.fallbackLng &&
                    !this.services.languageDetector &&
                    !this.options.lng)
                ) {
                  var c = this.services.languageUtils.getFallbackCodes(
                    this.options.fallbackLng
                  )
                  c.length > 0 && "dev" !== c[0] && (this.options.lng = c[0])
                }
                this.services.languageDetector ||
                  this.options.lng ||
                  this.logger.warn(
                    "init: no languageDetector is used and no lng is defined"
                  )
                var u = [
                  "getResource",
                  "hasResourceBundle",
                  "getResourceBundle",
                  "getDataByLanguage",
                ]
                u.forEach(function (e) {
                  t[e] = function () {
                    var n
                    return (n = t.store)[e].apply(n, arguments)
                  }
                })
                var l = [
                  "addResource",
                  "addResources",
                  "addResourceBundle",
                  "removeResourceBundle",
                ]
                l.forEach(function (e) {
                  t[e] = function () {
                    var n
                    return (n = t.store)[e].apply(n, arguments), t
                  }
                })
                var f = R(),
                  p = function () {
                    var e = function (e, r) {
                      t.isInitialized &&
                        !t.initializedStoreOnce &&
                        t.logger.warn(
                          "init: i18next is already initialized. You should call init just once!"
                        ),
                        (t.isInitialized = !0),
                        t.options.isClone ||
                          t.logger.log("initialized", t.options),
                        t.emit("initialized", t.options),
                        f.resolve(r),
                        n(e, r)
                    }
                    if (
                      t.languages &&
                      "v1" !== t.options.compatibilityAPI &&
                      !t.isInitialized
                    )
                      return e(null, t.t.bind(t))
                    t.changeLanguage(t.options.lng, e)
                  }
                return (
                  this.options.resources || !this.options.initImmediate
                    ? p()
                    : setTimeout(p, 0),
                  f
                )
              },
            },
            {
              key: "loadResources",
              value: function (t) {
                var e = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : xt,
                  r = n,
                  o = "string" == typeof t ? t : this.language
                if (
                  ("function" == typeof t && (r = t),
                  !this.options.resources ||
                    this.options.partialBundledLanguages)
                ) {
                  if (o && "cimode" === o.toLowerCase()) return r()
                  var a = [],
                    i = function (t) {
                      t &&
                        e.services.languageUtils
                          .toResolveHierarchy(t)
                          .forEach(function (t) {
                            a.indexOf(t) < 0 && a.push(t)
                          })
                    }
                  if (o) i(o)
                  else {
                    var s = this.services.languageUtils.getFallbackCodes(
                      this.options.fallbackLng
                    )
                    s.forEach(function (t) {
                      return i(t)
                    })
                  }
                  this.options.preload &&
                    this.options.preload.forEach(function (t) {
                      return i(t)
                    }),
                    this.services.backendConnector.load(a, this.options.ns, r)
                } else r(null)
              },
            },
            {
              key: "reloadResources",
              value: function (t, e, n) {
                var r = R()
                return (
                  t || (t = this.languages),
                  e || (e = this.options.ns),
                  n || (n = xt),
                  this.services.backendConnector.reload(t, e, function (t) {
                    r.resolve(), n(t)
                  }),
                  r
                )
              },
            },
            {
              key: "use",
              value: function (t) {
                if (!t)
                  throw new Error(
                    "You are passing an undefined module! Please check the object you are passing to i18next.use()"
                  )
                if (!t.type)
                  throw new Error(
                    "You are passing a wrong module! Please check the object you are passing to i18next.use()"
                  )
                return (
                  "backend" === t.type && (this.modules.backend = t),
                  ("logger" === t.type || (t.log && t.warn && t.error)) &&
                    (this.modules.logger = t),
                  "languageDetector" === t.type &&
                    (this.modules.languageDetector = t),
                  "i18nFormat" === t.type && (this.modules.i18nFormat = t),
                  "postProcessor" === t.type && K.addPostProcessor(t),
                  "formatter" === t.type && (this.modules.formatter = t),
                  "3rdParty" === t.type && this.modules.external.push(t),
                  this
                )
              },
            },
            {
              key: "changeLanguage",
              value: function (t, e) {
                var n = this
                this.isLanguageChangingTo = t
                var r = R()
                this.emit("languageChanging", t)
                var o = function (t) {
                    if (
                      ((n.language = t),
                      (n.languages =
                        n.services.languageUtils.toResolveHierarchy(t)),
                      (n.resolvedLanguage = void 0),
                      !(["cimode", "dev"].indexOf(t) > -1))
                    )
                      for (var e = 0; e < n.languages.length; e++) {
                        var r = n.languages[e]
                        if (
                          !(["cimode", "dev"].indexOf(r) > -1) &&
                          n.store.hasLanguageSomeTranslations(r)
                        ) {
                          n.resolvedLanguage = r
                          break
                        }
                      }
                  },
                  a = function (a) {
                    t || a || !n.services.languageDetector || (a = [])
                    var i =
                      "string" == typeof a
                        ? a
                        : n.services.languageUtils.getBestMatchFromCodes(a)
                    i &&
                      (n.language || o(i),
                      n.translator.language || n.translator.changeLanguage(i),
                      n.services.languageDetector &&
                        n.services.languageDetector.cacheUserLanguage(i)),
                      n.loadResources(i, function (t) {
                        !(function (t, a) {
                          a
                            ? (o(a),
                              n.translator.changeLanguage(a),
                              (n.isLanguageChangingTo = void 0),
                              n.emit("languageChanged", a),
                              n.logger.log("languageChanged", a))
                            : (n.isLanguageChangingTo = void 0),
                            r.resolve(function () {
                              return n.t.apply(n, arguments)
                            }),
                            e &&
                              e(t, function () {
                                return n.t.apply(n, arguments)
                              })
                        })(t, i)
                      })
                  }
                return (
                  t ||
                  !this.services.languageDetector ||
                  this.services.languageDetector.async
                    ? !t &&
                      this.services.languageDetector &&
                      this.services.languageDetector.async
                      ? this.services.languageDetector.detect(a)
                      : a(t)
                    : a(this.services.languageDetector.detect()),
                  r
                )
              },
            },
            {
              key: "getFixedT",
              value: function (t, e, n) {
                var r = this,
                  o = function t(e, o) {
                    var a
                    if ("object" !== d.default(o)) {
                      for (
                        var i = arguments.length,
                          s = new Array(i > 2 ? i - 2 : 0),
                          c = 2;
                        c < i;
                        c++
                      )
                        s[c - 2] = arguments[c]
                      a = r.options.overloadTranslationOptionHandler(
                        [e, o].concat(s)
                      )
                    } else a = bt({}, o)
                    ;(a.lng = a.lng || t.lng),
                      (a.lngs = a.lngs || t.lngs),
                      (a.ns = a.ns || t.ns)
                    var u = r.options.keySeparator || ".",
                      l = n ? "".concat(n).concat(u).concat(e) : e
                    return r.t(l, a)
                  }
                return (
                  "string" == typeof t ? (o.lng = t) : (o.lngs = t),
                  (o.ns = e),
                  (o.keyPrefix = n),
                  o
                )
              },
            },
            {
              key: "t",
              value: function () {
                var t
                return (
                  this.translator &&
                  (t = this.translator).translate.apply(t, arguments)
                )
              },
            },
            {
              key: "exists",
              value: function () {
                var t
                return (
                  this.translator &&
                  (t = this.translator).exists.apply(t, arguments)
                )
              },
            },
            {
              key: "setDefaultNamespace",
              value: function (t) {
                this.options.defaultNS = t
              },
            },
            {
              key: "hasLoadedNamespace",
              value: function (t) {
                var e = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {}
                if (!this.isInitialized)
                  return (
                    this.logger.warn(
                      "hasLoadedNamespace: i18next was not initialized",
                      this.languages
                    ),
                    !1
                  )
                if (!this.languages || !this.languages.length)
                  return (
                    this.logger.warn(
                      "hasLoadedNamespace: i18n.languages were undefined or empty",
                      this.languages
                    ),
                    !1
                  )
                var r = this.resolvedLanguage || this.languages[0],
                  o = !!this.options && this.options.fallbackLng,
                  a = this.languages[this.languages.length - 1]
                if ("cimode" === r.toLowerCase()) return !0
                var i = function (t, n) {
                  var r =
                    e.services.backendConnector.state[
                      "".concat(t, "|").concat(n)
                    ]
                  return -1 === r || 2 === r
                }
                if (n.precheck) {
                  var s = n.precheck(this, i)
                  if (void 0 !== s) return s
                }
                return (
                  !!this.hasResourceBundle(r, t) ||
                  !this.services.backendConnector.backend ||
                  !(!i(r, t) || (o && !i(a, t)))
                )
              },
            },
            {
              key: "loadNamespaces",
              value: function (t, e) {
                var n = this,
                  r = R()
                return this.options.ns
                  ? ("string" == typeof t && (t = [t]),
                    t.forEach(function (t) {
                      n.options.ns.indexOf(t) < 0 && n.options.ns.push(t)
                    }),
                    this.loadResources(function (t) {
                      r.resolve(), e && e(t)
                    }),
                    r)
                  : (e && e(), Promise.resolve())
              },
            },
            {
              key: "loadLanguages",
              value: function (t, e) {
                var n = R()
                "string" == typeof t && (t = [t])
                var r = this.options.preload || [],
                  o = t.filter(function (t) {
                    return r.indexOf(t) < 0
                  })
                return o.length
                  ? ((this.options.preload = r.concat(o)),
                    this.loadResources(function (t) {
                      n.resolve(), e && e(t)
                    }),
                    n)
                  : (e && e(), Promise.resolve())
              },
            },
            {
              key: "dir",
              value: function (t) {
                if (
                  (t ||
                    (t =
                      this.resolvedLanguage ||
                      (this.languages && this.languages.length > 0
                        ? this.languages[0]
                        : this.language)),
                  !t)
                )
                  return "rtl"
                return [
                  "ar",
                  "shu",
                  "sqr",
                  "ssh",
                  "xaa",
                  "yhd",
                  "yud",
                  "aao",
                  "abh",
                  "abv",
                  "acm",
                  "acq",
                  "acw",
                  "acx",
                  "acy",
                  "adf",
                  "ads",
                  "aeb",
                  "aec",
                  "afb",
                  "ajp",
                  "apc",
                  "apd",
                  "arb",
                  "arq",
                  "ars",
                  "ary",
                  "arz",
                  "auz",
                  "avl",
                  "ayh",
                  "ayl",
                  "ayn",
                  "ayp",
                  "bbz",
                  "pga",
                  "he",
                  "iw",
                  "ps",
                  "pbt",
                  "pbu",
                  "pst",
                  "prp",
                  "prd",
                  "ug",
                  "ur",
                  "ydd",
                  "yds",
                  "yih",
                  "ji",
                  "yi",
                  "hbo",
                  "men",
                  "xmn",
                  "fa",
                  "jpr",
                  "peo",
                  "pes",
                  "prs",
                  "dv",
                  "sam",
                  "ckb",
                ].indexOf(
                  this.services.languageUtils.getLanguagePartFromCode(t)
                ) > -1 || t.toLowerCase().indexOf("-arab") > 1
                  ? "rtl"
                  : "ltr"
              },
            },
            {
              key: "cloneInstance",
              value: function () {
                var t = this,
                  e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : xt,
                  o = bt(bt(bt({}, this.options), e), { isClone: !0 }),
                  a = new n(o),
                  i = ["store", "services", "language"]
                return (
                  i.forEach(function (e) {
                    a[e] = t[e]
                  }),
                  (a.services = bt({}, this.services)),
                  (a.services.utils = {
                    hasLoadedNamespace: a.hasLoadedNamespace.bind(a),
                  }),
                  (a.translator = new Z(a.services, a.options)),
                  a.translator.on("*", function (t) {
                    for (
                      var e = arguments.length,
                        n = new Array(e > 1 ? e - 1 : 0),
                        r = 1;
                      r < e;
                      r++
                    )
                      n[r - 1] = arguments[r]
                    a.emit.apply(a, [t].concat(n))
                  }),
                  a.init(o, r),
                  (a.translator.options = a.options),
                  (a.translator.backendConnector.services.utils = {
                    hasLoadedNamespace: a.hasLoadedNamespace.bind(a),
                  }),
                  a
                )
              },
            },
            {
              key: "toJSON",
              value: function () {
                return {
                  options: this.options,
                  store: this.store,
                  language: this.language,
                  languages: this.languages,
                  resolvedLanguage: this.resolvedLanguage,
                }
              },
            },
          ]),
          n
        )
      })(E)
      w.default(kt, "createInstance", function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments.length > 1 ? arguments[1] : void 0
        return new kt(t, e)
      })
      var Pt = kt.createInstance()
      ;(Pt.createInstance = kt.createInstance), (t.exports = Pt)
    },
    8003: function (t, e, n) {
      "use strict"
      function r() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
      }
      function o() {
        return "undefined" != typeof WeakMap
          ? new WeakMap()
          : {
              add: r,
              delete: r,
              get: r,
              set: r,
              has: function (t) {
                return !1
              },
            }
      }
      n.r(e),
        n.d(e, {
          outdent: function () {
            return v
          },
        }),
        (t = n.hmd(t))
      var a = Object.prototype.hasOwnProperty,
        i = function (t, e) {
          return a.call(t, e)
        }
      function s(t, e) {
        for (var n in e) i(e, n) && (t[n] = e[n])
        return t
      }
      var c = /^[ \t]*(?:\r\n|\r|\n)/,
        u = /(?:\r\n|\r|\n)[ \t]*$/,
        l = /^(?:[\r\n]|$)/,
        f = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/,
        p = /^[ \t]*[\r\n][ \t\r\n]*$/
      function d(t, e, n) {
        var r = 0,
          o = t[0].match(f)
        o && (r = o[1].length)
        var a = new RegExp("(\\r\\n|\\r|\\n).{0," + r + "}", "g")
        e && (t = t.slice(1))
        var i = n.newline,
          s = n.trimLeadingNewline,
          l = n.trimTrailingNewline,
          p = "string" == typeof i,
          d = t.length
        return t.map(function (t, e) {
          return (
            (t = t.replace(a, "$1")),
            0 === e && s && (t = t.replace(c, "")),
            e === d - 1 && l && (t = t.replace(u, "")),
            p &&
              (t = t.replace(/\r\n|\n|\r/g, function (t) {
                return i
              })),
            t
          )
        })
      }
      function h(t, e) {
        for (var n = "", r = 0, o = t.length; r < o; r++)
          (n += t[r]), r < o - 1 && (n += e[r])
        return n
      }
      function g(t) {
        return i(t, "raw") && i(t, "length")
      }
      var v = (function t(e) {
        var n = o(),
          r = o(),
          a = s(
            function o(a) {
              for (var i = [], c = 1; c < arguments.length; c++)
                i[c - 1] = arguments[c]
              if (g(a)) {
                var u = a,
                  f =
                    (i[0] === o || i[0] === v) && p.test(u[0]) && l.test(u[1]),
                  m = f ? r : n,
                  y = m.get(u)
                if ((y || ((y = d(u, f, e)), m.set(u, y)), 0 === i.length))
                  return y[0]
                var b = h(y, f ? i.slice(1) : i)
                return b
              }
              return t(s(s({}, e), a || {}))
            },
            {
              string: function (t) {
                return d([t], !1, e)[0]
              },
            }
          )
        return a
      })({ trimLeadingNewline: !0, trimTrailingNewline: !0 })
      e.default = v
      try {
        ;(t.exports = v),
          Object.defineProperty(v, "__esModule", { value: !0 }),
          (v.default = v),
          (v.outdent = v)
      } catch (m) {}
    },
    1421: function (t, e, n) {
      "use strict"
      n.r(e),
        n.d(e, {
          I18nContext: function () {
            return N
          },
          I18nextProvider: function () {
            return ht
          },
          Trans: function () {
            return nt
          },
          Translation: function () {
            return dt
          },
          composeInitialProps: function () {
            return U
          },
          date: function () {
            return bt
          },
          getDefaults: function () {
            return D
          },
          getI18n: function () {
            return T
          },
          getInitialProps: function () {
            return z
          },
          initReactI18next: function () {
            return F
          },
          number: function () {
            return xt
          },
          plural: function () {
            return kt
          },
          select: function () {
            return Ot
          },
          selectOrdinal: function () {
            return Pt
          },
          setDefaults: function () {
            return A
          },
          setI18n: function () {
            return M
          },
          time: function () {
            return wt
          },
          useSSR: function () {
            return gt
          },
          useTranslation: function () {
            return st
          },
          withSSR: function () {
            return yt
          },
          withTranslation: function () {
            return ft
          },
        })
      var r = n(6479),
        o = n.n(r),
        a = n(8),
        i = n.n(a),
        s = n(9713),
        c = n.n(s),
        u = n(7294),
        l = n(8262),
        f = n.n(l),
        p = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g
      function d(t) {
        var e = {
            type: "tag",
            name: "",
            voidElement: !1,
            attrs: {},
            children: [],
          },
          n = t.match(/<\/?([^\s]+?)[/\s>]/)
        if (
          n &&
          ((e.name = n[1]),
          (f()[n[1]] || "/" === t.charAt(t.length - 2)) && (e.voidElement = !0),
          e.name.startsWith("!--"))
        ) {
          var r = t.indexOf("--\x3e")
          return { type: "comment", comment: -1 !== r ? t.slice(4, r) : "" }
        }
        for (var o = new RegExp(p), a = null; null !== (a = o.exec(t)); )
          if (a[0].trim())
            if (a[1]) {
              var i = a[1].trim(),
                s = [i, ""]
              i.indexOf("=") > -1 && (s = i.split("=")),
                (e.attrs[s[0]] = s[1]),
                o.lastIndex--
            } else
              a[2] &&
                (e.attrs[a[2]] = a[3].trim().substring(1, a[3].length - 1))
        return e
      }
      var h = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
        g = /^\s*$/,
        v = Object.create(null)
      function m(t, e) {
        switch (e.type) {
          case "text":
            return t + e.content
          case "tag":
            return (
              (t +=
                "<" +
                e.name +
                (e.attrs
                  ? (function (t) {
                      var e = []
                      for (var n in t) e.push(n + '="' + t[n] + '"')
                      return e.length ? " " + e.join(" ") : ""
                    })(e.attrs)
                  : "") +
                (e.voidElement ? "/>" : ">")),
              e.voidElement
                ? t
                : t + e.children.reduce(m, "") + "</" + e.name + ">"
            )
          case "comment":
            return t + "\x3c!--" + e.comment + "--\x3e"
        }
      }
      var y = {
          parse: function (t, e) {
            e || (e = {}), e.components || (e.components = v)
            var n,
              r = [],
              o = [],
              a = -1,
              i = !1
            if (0 !== t.indexOf("<")) {
              var s = t.indexOf("<")
              r.push({
                type: "text",
                content: -1 === s ? t : t.substring(0, s),
              })
            }
            return (
              t.replace(h, function (s, c) {
                if (i) {
                  if (s !== "</" + n.name + ">") return
                  i = !1
                }
                var u,
                  l = "/" !== s.charAt(1),
                  f = s.startsWith("\x3c!--"),
                  p = c + s.length,
                  h = t.charAt(p)
                if (f) {
                  var v = d(s)
                  return a < 0
                    ? (r.push(v), r)
                    : ((u = o[a]).children.push(v), r)
                }
                if (
                  (l &&
                    (a++,
                    "tag" === (n = d(s)).type &&
                      e.components[n.name] &&
                      ((n.type = "component"), (i = !0)),
                    n.voidElement ||
                      i ||
                      !h ||
                      "<" === h ||
                      n.children.push({
                        type: "text",
                        content: t.slice(p, t.indexOf("<", p)),
                      }),
                    0 === a && r.push(n),
                    (u = o[a - 1]) && u.children.push(n),
                    (o[a] = n)),
                  (!l || n.voidElement) &&
                    (a > -1 &&
                      (n.voidElement || n.name === s.slice(2, -1)) &&
                      (a--, (n = -1 === a ? r : o[a])),
                    !i && "<" !== h && h))
                ) {
                  u = -1 === a ? r : o[a].children
                  var m = t.indexOf("<", p),
                    y = t.slice(p, -1 === m ? void 0 : m)
                  g.test(y) && (y = " "),
                    ((m > -1 && a + u.length >= 0) || " " !== y) &&
                      u.push({ type: "text", content: y })
                }
              }),
              r
            )
          },
          stringify: function (t) {
            return t.reduce(function (t, e) {
              return t + m("", e)
            }, "")
          },
        },
        b = y,
        w = "".replace,
        x = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,
        O = {
          "&amp;": "&",
          "&#38;": "&",
          "&lt;": "<",
          "&#60;": "<",
          "&gt;": ">",
          "&#62;": ">",
          "&apos;": "'",
          "&#39;": "'",
          "&quot;": '"',
          "&#34;": '"',
        }
      function k(t) {
        return O[t]
      }
      var P = n(4575),
        S = n.n(P),
        j = n(3913),
        E = n.n(j)
      function R(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function _(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? R(Object(n), !0).forEach(function (e) {
                c()(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : R(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                )
              })
        }
        return t
      }
      var C,
        L = {
          bindI18n: "languageChanged",
          bindI18nStore: "",
          transEmptyNodeValue: "",
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: "",
          transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
          useSuspense: !0,
        },
        N = u.createContext()
      function A() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        L = _(_({}, L), t)
      }
      function D() {
        return L
      }
      var I = (function () {
        function t() {
          S()(this, t), (this.usedNamespaces = {})
        }
        return (
          E()(t, [
            {
              key: "addUsedNamespaces",
              value: function (t) {
                var e = this
                t.forEach(function (t) {
                  e.usedNamespaces[t] || (e.usedNamespaces[t] = !0)
                })
              },
            },
            {
              key: "getUsedNamespaces",
              value: function () {
                return Object.keys(this.usedNamespaces)
              },
            },
          ]),
          t
        )
      })()
      function M(t) {
        C = t
      }
      function T() {
        return C
      }
      var F = {
        type: "3rdParty",
        init: function (t) {
          A(t.options.react), M(t)
        },
      }
      function U(t) {
        return function (e) {
          return new Promise(function (n) {
            var r = z()
            t.getInitialProps
              ? t.getInitialProps(e).then(function (t) {
                  n(_(_({}, t), r))
                })
              : n(r)
          })
        }
      }
      function z() {
        var t = T(),
          e = t.reportNamespaces ? t.reportNamespaces.getUsedNamespaces() : [],
          n = {},
          r = {}
        return (
          t.languages.forEach(function (n) {
            ;(r[n] = {}),
              e.forEach(function (e) {
                r[n][e] = t.getResourceBundle(n, e) || {}
              })
          }),
          (n.initialI18nStore = r),
          (n.initialLanguage = t.language),
          n
        )
      }
      function W() {
        if (console && console.warn) {
          for (var t, e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r]
          "string" == typeof n[0] && (n[0] = "react-i18next:: ".concat(n[0])),
            (t = console).warn.apply(t, n)
        }
      }
      var H = {}
      function q() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n]
        ;("string" == typeof e[0] && H[e[0]]) ||
          ("string" == typeof e[0] && (H[e[0]] = new Date()),
          W.apply(void 0, e))
      }
      function V(t, e, n) {
        t.loadNamespaces(e, function () {
          if (t.isInitialized) n()
          else {
            t.on("initialized", function e() {
              setTimeout(function () {
                t.off("initialized", e)
              }, 0),
                n()
            })
          }
        })
      }
      function B(t, e) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        if (!e.languages || !e.languages.length)
          return q("i18n.languages were undefined or empty", e.languages), !0
        var r = e.languages[0],
          o = !!e.options && e.options.fallbackLng,
          a = e.languages[e.languages.length - 1]
        if ("cimode" === r.toLowerCase()) return !0
        var i = function (t, n) {
          var r = e.services.backendConnector.state["".concat(t, "|").concat(n)]
          return -1 === r || 2 === r
        }
        return (
          !(
            n.bindI18n &&
            n.bindI18n.indexOf("languageChanging") > -1 &&
            e.services.backendConnector.backend &&
            e.isLanguageChangingTo &&
            !i(e.isLanguageChangingTo, t)
          ) &&
          (!!e.hasResourceBundle(r, t) ||
            !e.services.backendConnector.backend ||
            !(!i(r, t) || (o && !i(a, t))))
        )
      }
      function K(t) {
        return (
          t.displayName ||
          t.name ||
          ("string" == typeof t && t.length > 0 ? t : "Unknown")
        )
      }
      var J = ["format"],
        Q = [
          "children",
          "count",
          "parent",
          "i18nKey",
          "tOptions",
          "values",
          "defaults",
          "components",
          "ns",
          "i18n",
          "t",
          "shouldUnescape",
        ]
      function Y(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function G(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? Y(Object(n), !0).forEach(function (e) {
                c()(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Y(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                )
              })
        }
        return t
      }
      function Z(t, e) {
        if (!t) return !1
        var n = t.props ? t.props.children : t.children
        return e ? n.length > 0 : !!n
      }
      function $(t) {
        return t
          ? t && t.children
            ? t.children
            : t.props && t.props.children
          : []
      }
      function X(t) {
        return Array.isArray(t) ? t : [t]
      }
      function tt(t, e) {
        if (!t) return ""
        var n = "",
          r = X(t),
          a = e.transKeepBasicHtmlNodesFor || []
        return (
          r.forEach(function (t, r) {
            if ("string" == typeof t) n += "".concat(t)
            else if (u.isValidElement(t)) {
              var s = Object.keys(t.props).length,
                c = a.indexOf(t.type) > -1,
                l = t.props.children
              if (!l && c && 0 === s) n += "<".concat(t.type, "/>")
              else if (l || (c && 0 === s))
                if (t.props.i18nIsDynamicList)
                  n += "<".concat(r, "></").concat(r, ">")
                else if (c && 1 === s && "string" == typeof l)
                  n += "<"
                    .concat(t.type, ">")
                    .concat(l, "</")
                    .concat(t.type, ">")
                else {
                  var f = tt(l, e)
                  n += "<".concat(r, ">").concat(f, "</").concat(r, ">")
                }
              else n += "<".concat(r, "></").concat(r, ">")
            } else if (null === t)
              W(
                "Trans: the passed in value is invalid - seems you passed in a null child."
              )
            else if ("object" === i()(t)) {
              var p = t.format,
                d = o()(t, J),
                h = Object.keys(d)
              if (1 === h.length) {
                var g = p ? "".concat(h[0], ", ").concat(p) : h[0]
                n += "{{".concat(g, "}}")
              } else
                W(
                  "react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",
                  t
                )
            } else
              W(
                "Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",
                t
              )
          }),
          n
        )
      }
      function et(t, e, n, r, o, a) {
        if ("" === e) return []
        var s = r.transKeepBasicHtmlNodesFor || [],
          c = e && new RegExp(s.join("|")).test(e)
        if (!t && !c) return [e]
        var l = {}
        !(function t(e) {
          X(e).forEach(function (e) {
            "string" != typeof e &&
              (Z(e)
                ? t($(e))
                : "object" !== i()(e) ||
                  u.isValidElement(e) ||
                  Object.assign(l, e))
          })
        })(t)
        var f = b.parse("<0>".concat(e, "</0>")),
          p = G(G({}, l), o)
        function d(t, e, n) {
          var r = $(t),
            o = g(r, e.children, n)
          return (function (t) {
            return (
              "[object Array]" === Object.prototype.toString.call(t) &&
              t.every(function (t) {
                return u.isValidElement(t)
              })
            )
          })(r) && 0 === o.length
            ? r
            : o
        }
        function h(t, e, n, r, o) {
          t.dummy && (t.children = e),
            n.push(
              u.cloneElement(
                t,
                G(G({}, t.props), {}, { key: r }),
                o ? void 0 : e
              )
            )
        }
        function g(e, o, l) {
          var f = X(e)
          return X(o).reduce(function (e, o, v) {
            var m,
              y,
              b,
              O,
              P =
                o.children &&
                o.children[0] &&
                o.children[0].content &&
                n.services.interpolator.interpolate(
                  o.children[0].content,
                  p,
                  n.language
                )
            if ("tag" === o.type) {
              var S = f[parseInt(o.name, 10)]
              !S && 1 === l.length && l[0][o.name] && (S = l[0][o.name]),
                S || (S = {})
              var j =
                  0 !== Object.keys(o.attrs).length
                    ? ((y = { props: o.attrs }),
                      ((O = G({}, (b = S))).props = Object.assign(
                        y.props,
                        b.props
                      )),
                      O)
                    : S,
                E = u.isValidElement(j),
                R = E && Z(o, !0) && !o.voidElement,
                _ = c && "object" === i()(j) && j.dummy && !E,
                C =
                  "object" === i()(t) &&
                  null !== t &&
                  Object.hasOwnProperty.call(t, o.name)
              if ("string" == typeof j) {
                var L = n.services.interpolator.interpolate(j, p, n.language)
                e.push(L)
              } else if (Z(j) || R) {
                h(j, d(j, o, l), e, v)
              } else if (_) {
                var N = g(f, o.children, l)
                e.push(u.cloneElement(j, G(G({}, j.props), {}, { key: v }), N))
              } else if (Number.isNaN(parseFloat(o.name))) {
                if (C) h(j, d(j, o, l), e, v, o.voidElement)
                else if (r.transSupportBasicHtmlNodes && s.indexOf(o.name) > -1)
                  if (o.voidElement)
                    e.push(
                      u.createElement(o.name, {
                        key: "".concat(o.name, "-").concat(v),
                      })
                    )
                  else {
                    var A = g(f, o.children, l)
                    e.push(
                      u.createElement(
                        o.name,
                        { key: "".concat(o.name, "-").concat(v) },
                        A
                      )
                    )
                  }
                else if (o.voidElement) e.push("<".concat(o.name, " />"))
                else {
                  var D = g(f, o.children, l)
                  e.push(
                    "<".concat(o.name, ">").concat(D, "</").concat(o.name, ">")
                  )
                }
              } else if ("object" !== i()(j) || E)
                1 === o.children.length && P
                  ? e.push(
                      u.cloneElement(j, G(G({}, j.props), {}, { key: v }), P)
                    )
                  : e.push(u.cloneElement(j, G(G({}, j.props), {}, { key: v })))
              else {
                var I = o.children[0] ? P : null
                I && e.push(I)
              }
            } else if ("text" === o.type) {
              var M = r.transWrapTextNodes,
                T = a
                  ? ((m = n.services.interpolator.interpolate(
                      o.content,
                      p,
                      n.language
                    )),
                    w.call(m, x, k))
                  : n.services.interpolator.interpolate(
                      o.content,
                      p,
                      n.language
                    )
              M
                ? e.push(
                    u.createElement(
                      M,
                      { key: "".concat(o.name, "-").concat(v) },
                      T
                    )
                  )
                : e.push(T)
            }
            return e
          }, [])
        }
        return $(g([{ dummy: !0, children: t || [] }], f, X(t || []))[0])
      }
      function nt(t) {
        var e = t.children,
          n = t.count,
          r = t.parent,
          a = t.i18nKey,
          i = t.tOptions,
          s = void 0 === i ? {} : i,
          c = t.values,
          l = t.defaults,
          f = t.components,
          p = t.ns,
          d = t.i18n,
          h = t.t,
          g = t.shouldUnescape,
          v = o()(t, Q),
          m = (0, u.useContext)(N) || {},
          y = m.i18n,
          b = m.defaultNS,
          w = d || y || T()
        if (!w)
          return (
            q(
              "You will need to pass in an i18next instance by using i18nextReactModule"
            ),
            e
          )
        var x =
            h ||
            w.t.bind(w) ||
            function (t) {
              return t
            },
          O = G(G({}, D()), w.options && w.options.react),
          k = p || x.ns || b || (w.options && w.options.defaultNS)
        k = "string" == typeof k ? [k] : k || ["translation"]
        var P = l || tt(e, O) || O.transEmptyNodeValue || a,
          S = O.hashTransKey,
          j = a || (S ? S(P) : P),
          E = c
            ? s.interpolation
            : {
                interpolation: G(
                  G({}, s.interpolation),
                  {},
                  { prefix: "#$?", suffix: "?$#" }
                ),
              },
          R = G(
            G(G(G({}, s), {}, { count: n }, c), E),
            {},
            { defaultValue: P, ns: k }
          ),
          _ = et(f || e, j ? x(j, R) : P, w, O, R, g),
          C = void 0 !== r ? r : O.defaultTransParent
        return C ? u.createElement(C, v, _) : _
      }
      var rt = n(3038),
        ot = n.n(rt)
      function at(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function it(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? at(Object(n), !0).forEach(function (e) {
                c()(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : at(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                )
              })
        }
        return t
      }
      function st(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.i18n,
          r = (0, u.useContext)(N) || {},
          o = r.i18n,
          a = r.defaultNS,
          i = n || o || T()
        if ((i && !i.reportNamespaces && (i.reportNamespaces = new I()), !i)) {
          q(
            "You will need to pass in an i18next instance by using initReactI18next"
          )
          var s = function (t) {
              return Array.isArray(t) ? t[t.length - 1] : t
            },
            c = [s, {}, !1]
          return (c.t = s), (c.i18n = {}), (c.ready = !1), c
        }
        i.options.react &&
          void 0 !== i.options.react.wait &&
          q(
            "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
          )
        var l = it(it(it({}, D()), i.options.react), e),
          f = l.useSuspense,
          p = l.keyPrefix,
          d = t || a || (i.options && i.options.defaultNS)
        ;(d = "string" == typeof d ? [d] : d || ["translation"]),
          i.reportNamespaces.addUsedNamespaces &&
            i.reportNamespaces.addUsedNamespaces(d)
        var h =
          (i.isInitialized || i.initializedStoreOnce) &&
          d.every(function (t) {
            return B(t, i, l)
          })
        function g() {
          return i.getFixedT(null, "fallback" === l.nsMode ? d : d[0], p)
        }
        var v = (0, u.useState)(g),
          m = ot()(v, 2),
          y = m[0],
          b = m[1],
          w = (0, u.useRef)(!0)
        ;(0, u.useEffect)(
          function () {
            var t = l.bindI18n,
              e = l.bindI18nStore
            function n() {
              w.current && b(g)
            }
            return (
              (w.current = !0),
              h ||
                f ||
                V(i, d, function () {
                  w.current && b(g)
                }),
              t && i && i.on(t, n),
              e && i && i.store.on(e, n),
              function () {
                ;(w.current = !1),
                  t &&
                    i &&
                    t.split(" ").forEach(function (t) {
                      return i.off(t, n)
                    }),
                  e &&
                    i &&
                    e.split(" ").forEach(function (t) {
                      return i.store.off(t, n)
                    })
              }
            )
          },
          [i, d.join()]
        )
        var x = (0, u.useRef)(!0)
        ;(0, u.useEffect)(
          function () {
            w.current && !x.current && b(g), (x.current = !1)
          },
          [i]
        )
        var O = [y, i, h]
        if (((O.t = y), (O.i18n = i), (O.ready = h), h)) return O
        if (!h && !f) return O
        throw new Promise(function (t) {
          V(i, d, function () {
            t()
          })
        })
      }
      var ct = ["forwardedRef"]
      function ut(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function lt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? ut(Object(n), !0).forEach(function (e) {
                c()(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : ut(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                )
              })
        }
        return t
      }
      function ft(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        return function (n) {
          function r(r) {
            var a = r.forwardedRef,
              i = o()(r, ct),
              s = st(t, i),
              c = ot()(s, 3),
              l = c[0],
              f = c[1],
              p = c[2],
              d = lt(lt({}, i), {}, { t: l, i18n: f, tReady: p })
            return (
              e.withRef && a
                ? (d.ref = a)
                : !e.withRef && a && (d.forwardedRef = a),
              u.createElement(n, d)
            )
          }
          ;(r.displayName = "withI18nextTranslation(".concat(K(n), ")")),
            (r.WrappedComponent = n)
          return e.withRef
            ? u.forwardRef(function (t, e) {
                return u.createElement(
                  r,
                  Object.assign({}, t, { forwardedRef: e })
                )
              })
            : r
        }
      }
      var pt = ["ns", "children"]
      function dt(t) {
        var e = t.ns,
          n = t.children,
          r = st(e, o()(t, pt)),
          a = ot()(r, 3),
          i = a[0],
          s = a[1],
          c = a[2]
        return n(i, { i18n: s, lng: s.language }, c)
      }
      function ht(t) {
        var e = t.i18n,
          n = t.defaultNS,
          r = t.children,
          o = (0, u.useMemo)(
            function () {
              return { i18n: e, defaultNS: n }
            },
            [e, n]
          )
        return (0, u.createElement)(N.Provider, { value: o }, r)
      }
      function gt(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.i18n,
          o = (0, u.useContext)(N) || {},
          a = o.i18n,
          i = r || a || T()
        ;(i.options && i.options.isClone) ||
          (t &&
            !i.initializedStoreOnce &&
            ((i.services.resourceStore.data = t),
            (i.options.ns = Object.values(t).reduce(function (t, e) {
              return (
                Object.keys(e).forEach(function (e) {
                  t.indexOf(e) < 0 && t.push(e)
                }),
                t
              )
            }, i.options.ns)),
            (i.initializedStoreOnce = !0),
            (i.isInitialized = !0)),
          e &&
            !i.initializedLanguageOnce &&
            (i.changeLanguage(e), (i.initializedLanguageOnce = !0)))
      }
      var vt = ["initialI18nStore", "initialLanguage"]
      function mt(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function yt() {
        return function (t) {
          function e(e) {
            var n = e.initialI18nStore,
              r = e.initialLanguage,
              a = o()(e, vt)
            return (
              gt(n, r),
              u.createElement(
                t,
                (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {}
                    e % 2
                      ? mt(Object(n), !0).forEach(function (e) {
                          c()(t, e, n[e])
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : mt(Object(n)).forEach(function (e) {
                          Object.defineProperty(
                            t,
                            e,
                            Object.getOwnPropertyDescriptor(n, e)
                          )
                        })
                  }
                  return t
                })({}, a)
              )
            )
          }
          return (
            (e.getInitialProps = U(t)),
            (e.displayName = "withI18nextSSR(".concat(K(t), ")")),
            (e.WrappedComponent = t),
            e
          )
        }
      }
      var bt = function () {
          return ""
        },
        wt = function () {
          return ""
        },
        xt = function () {
          return ""
        },
        Ot = function () {
          return ""
        },
        kt = function () {
          return ""
        },
        Pt = function () {
          return ""
        }
    },
    8262: function (t) {
      t.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    },
    8037: function (t, e, n) {
      "use strict"
      var r = n(5318)
      ;(e.dq = g),
        (e.mc = function (t) {
          return g(t, v())
        }),
        (e.c4 = e.ZP = void 0)
      var o = r(n(7316)),
        a = r(n(1506)),
        i = r(n(5354)),
        s = r(n(7154)),
        c = r(n(5697)),
        u = r(n(7294)),
        l = n(9499),
        f = n(2098),
        p = n(1752)
      e.cP = p.parsePath
      var d = [
          "to",
          "getProps",
          "onClick",
          "onMouseEnter",
          "activeClassName",
          "activeStyle",
          "innerRef",
          "partiallyActive",
          "state",
          "replace",
          "_location",
        ],
        h = function (t) {
          return null == t ? void 0 : t.startsWith("/")
        }
      function g(t, e) {
        var n, r
        if ((void 0 === e && (e = m()), !y(t))) return t
        if (t.startsWith("./") || t.startsWith("../")) return t
        var o =
          null !== (n = null !== (r = e) && void 0 !== r ? r : v()) &&
          void 0 !== n
            ? n
            : "/"
        return (
          "" +
          (null != o && o.endsWith("/") ? o.slice(0, -1) : o) +
          (t.startsWith("/") ? t : "/" + t)
        )
      }
      var v = function () {
          return ""
        },
        m = function () {
          return ""
        },
        y = function (t) {
          return (
            t &&
            !t.startsWith("http://") &&
            !t.startsWith("https://") &&
            !t.startsWith("//")
          )
        }
      var b = function (t, e) {
          return "number" == typeof t
            ? t
            : y(t)
            ? h(t)
              ? g(t)
              : (function (t, e) {
                  return h(t) ? t : (0, f.resolve)(t, e)
                })(t, e)
            : t
        },
        w = {
          activeClassName: c.default.string,
          activeStyle: c.default.object,
          partiallyActive: c.default.bool,
        }
      function x(t) {
        return u.default.createElement(l.Location, null, function (e) {
          var n = e.location
          return u.default.createElement(
            O,
            (0, s.default)({}, t, { _location: n })
          )
        })
      }
      var O = (function (t) {
        function e(e) {
          var n
          ;(n = t.call(this, e) || this).defaultGetProps = function (t) {
            var e = t.isPartiallyCurrent,
              r = t.isCurrent
            return (n.props.partiallyActive ? e : r)
              ? {
                  className: [n.props.className, n.props.activeClassName]
                    .filter(Boolean)
                    .join(" "),
                  style: (0, s.default)({}, n.props.style, n.props.activeStyle),
                }
              : null
          }
          var r = !1
          return (
            "undefined" != typeof window &&
              window.IntersectionObserver &&
              (r = !0),
            (n.state = { IOSupported: r }),
            (n.abortPrefetch = null),
            (n.handleRef = n.handleRef.bind((0, a.default)(n))),
            n
          )
        }
        ;(0, i.default)(e, t)
        var n = e.prototype
        return (
          (n._prefetch = function () {
            var t = window.location.pathname + window.location.search
            this.props._location &&
              this.props._location.pathname &&
              (t = this.props._location.pathname + this.props._location.search)
            var e = b(this.props.to, t),
              n = (0, p.parsePath)(e),
              r = n.pathname + n.search
            if (t !== r) return ___loader.enqueue(r)
          }),
          (n.componentWillUnmount = function () {
            if (this.io) {
              var t = this.io,
                e = t.instance,
                n = t.el
              this.abortPrefetch && this.abortPrefetch.abort(),
                e.unobserve(n),
                e.disconnect()
            }
          }),
          (n.handleRef = function (t) {
            var e,
              n,
              r,
              o = this
            this.props.innerRef &&
            Object.prototype.hasOwnProperty.call(this.props.innerRef, "current")
              ? (this.props.innerRef.current = t)
              : this.props.innerRef && this.props.innerRef(t),
              this.state.IOSupported &&
                t &&
                (this.io =
                  ((e = t),
                  (n = function (t) {
                    t
                      ? (o.abortPrefetch = o._prefetch())
                      : o.abortPrefetch && o.abortPrefetch.abort()
                  }),
                  (r = new window.IntersectionObserver(function (t) {
                    t.forEach(function (t) {
                      e === t.target &&
                        n(t.isIntersecting || t.intersectionRatio > 0)
                    })
                  })).observe(e),
                  { instance: r, el: e }))
          }),
          (n.render = function () {
            var t = this,
              e = this.props,
              n = e.to,
              r = e.getProps,
              a = void 0 === r ? this.defaultGetProps : r,
              i = e.onClick,
              c = e.onMouseEnter,
              f =
                (e.activeClassName,
                e.activeStyle,
                e.innerRef,
                e.partiallyActive,
                e.state),
              h = e.replace,
              g = e._location,
              v = (0, o.default)(e, d)
            var m = b(n, g.pathname)
            return y(m)
              ? u.default.createElement(
                  l.Link,
                  (0, s.default)(
                    {
                      to: m,
                      state: f,
                      getProps: a,
                      innerRef: this.handleRef,
                      onMouseEnter: function (t) {
                        c && c(t)
                        var e = (0, p.parsePath)(m)
                        ___loader.hovering(e.pathname + e.search)
                      },
                      onClick: function (e) {
                        if (
                          (i && i(e),
                          !(
                            0 !== e.button ||
                            t.props.target ||
                            e.defaultPrevented ||
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          ))
                        ) {
                          e.preventDefault()
                          var n = h,
                            r = encodeURI(m) === g.pathname
                          "boolean" != typeof h && r && (n = !0),
                            window.___navigate(m, { state: f, replace: n })
                        }
                        return !0
                      },
                    },
                    v
                  )
                )
              : u.default.createElement("a", (0, s.default)({ href: m }, v))
          }),
          e
        )
      })(u.default.Component)
      O.propTypes = (0, s.default)({}, w, {
        onClick: c.default.func,
        to: c.default.string.isRequired,
        replace: c.default.bool,
        state: c.default.object,
      })
      var k = u.default.forwardRef(function (t, e) {
        return u.default.createElement(x, (0, s.default)({ innerRef: e }, t))
      })
      e.ZP = k
      e.c4 = function (t, e) {
        window.___navigate(b(t, window.location.pathname), e)
      }
    },
    1752: function (t, e) {
      "use strict"
      ;(e.__esModule = !0),
        (e.parsePath = function (t) {
          var e = t || "/",
            n = "",
            r = "",
            o = e.indexOf("#")
          ;-1 !== o && ((r = e.substr(o)), (e = e.substr(0, o)))
          var a = e.indexOf("?")
          ;-1 !== a && ((n = e.substr(a)), (e = e.substr(0, a)))
          return {
            pathname: e,
            search: "?" === n ? "" : n,
            hash: "#" === r ? "" : r,
          }
        })
    },
    9679: function (t, e, n) {
      "use strict"
      e.p2 = e.$C = void 0
      var r = n(1432)
      e.$C = r.ScrollHandler
      var o = n(4855)
      e.p2 = o.useScrollRestoration
    },
    1432: function (t, e, n) {
      "use strict"
      var r = n(5318)
      ;(e.__esModule = !0), (e.ScrollHandler = e.ScrollContext = void 0)
      var o = r(n(1506)),
        a = r(n(5354)),
        i = (function (t, e) {
          if (!e && t && t.__esModule) return t
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return { default: t }
          var n = u(e)
          if (n && n.has(t)) return n.get(t)
          var r = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var a in t)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(t, a)) {
              var i = o ? Object.getOwnPropertyDescriptor(t, a) : null
              i && (i.get || i.set)
                ? Object.defineProperty(r, a, i)
                : (r[a] = t[a])
            }
          ;(r.default = t), n && n.set(t, r)
          return r
        })(n(7294)),
        s = r(n(5697)),
        c = n(1142)
      function u(t) {
        if ("function" != typeof WeakMap) return null
        var e = new WeakMap(),
          n = new WeakMap()
        return (u = function (t) {
          return t ? n : e
        })(t)
      }
      var l = i.createContext(new c.SessionStorage())
      ;(e.ScrollContext = l), (l.displayName = "GatsbyScrollContext")
      var f = (function (t) {
        function e() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a]
          return (
            ((e = t.call.apply(t, [this].concat(r)) || this)._stateStorage =
              new c.SessionStorage()),
            (e._isTicking = !1),
            (e._latestKnownScrollY = 0),
            (e.scrollListener = function () {
              ;(e._latestKnownScrollY = window.scrollY),
                e._isTicking ||
                  ((e._isTicking = !0),
                  requestAnimationFrame(e._saveScroll.bind((0, o.default)(e))))
            }),
            (e.windowScroll = function (t, n) {
              e.shouldUpdateScroll(n, e.props) && window.scrollTo(0, t)
            }),
            (e.scrollToHash = function (t, n) {
              var r = document.getElementById(t.substring(1))
              r && e.shouldUpdateScroll(n, e.props) && r.scrollIntoView()
            }),
            (e.shouldUpdateScroll = function (t, n) {
              var r = e.props.shouldUpdateScroll
              return !r || r.call((0, o.default)(e), t, n)
            }),
            e
          )
        }
        ;(0, a.default)(e, t)
        var n = e.prototype
        return (
          (n._saveScroll = function () {
            var t = this.props.location.key || null
            t &&
              this._stateStorage.save(
                this.props.location,
                t,
                this._latestKnownScrollY
              ),
              (this._isTicking = !1)
          }),
          (n.componentDidMount = function () {
            var t
            window.addEventListener("scroll", this.scrollListener)
            var e = this.props.location,
              n = e.key,
              r = e.hash
            n && (t = this._stateStorage.read(this.props.location, n)),
              t
                ? this.windowScroll(t, void 0)
                : r && this.scrollToHash(decodeURI(r), void 0)
          }),
          (n.componentWillUnmount = function () {
            window.removeEventListener("scroll", this.scrollListener)
          }),
          (n.componentDidUpdate = function (t) {
            var e,
              n = this.props.location,
              r = n.hash,
              o = n.key
            o && (e = this._stateStorage.read(this.props.location, o)),
              r ? this.scrollToHash(decodeURI(r), t) : this.windowScroll(e, t)
          }),
          (n.render = function () {
            return i.createElement(
              l.Provider,
              { value: this._stateStorage },
              this.props.children
            )
          }),
          e
        )
      })(i.Component)
      ;(e.ScrollHandler = f),
        (f.propTypes = {
          shouldUpdateScroll: s.default.func,
          children: s.default.element.isRequired,
          location: s.default.object.isRequired,
        })
    },
    1142: function (t, e) {
      "use strict"
      ;(e.__esModule = !0), (e.SessionStorage = void 0)
      var n = "___GATSBY_REACT_ROUTER_SCROLL",
        r = (function () {
          function t() {}
          var e = t.prototype
          return (
            (e.read = function (t, e) {
              var r = this.getStateKey(t, e)
              try {
                var o = window.sessionStorage.getItem(r)
                return o ? JSON.parse(o) : 0
              } catch (a) {
                return window && window[n] && window[n][r] ? window[n][r] : 0
              }
            }),
            (e.save = function (t, e, r) {
              var o = this.getStateKey(t, e),
                a = JSON.stringify(r)
              try {
                window.sessionStorage.setItem(o, a)
              } catch (i) {
                ;(window && window[n]) || (window[n] = {}),
                  (window[n][o] = JSON.parse(a))
              }
            }),
            (e.getStateKey = function (t, e) {
              var n = "@@scroll|" + t.pathname
              return null == e ? n : n + "|" + e
            }),
            t
          )
        })()
      e.SessionStorage = r
    },
    4855: function (t, e, n) {
      "use strict"
      ;(e.__esModule = !0),
        (e.useScrollRestoration = function (t) {
          var e = (0, a.useLocation)(),
            n = (0, o.useContext)(r.ScrollContext),
            i = (0, o.useRef)(null)
          return (
            (0, o.useLayoutEffect)(
              function () {
                if (i.current) {
                  var r = n.read(e, t)
                  i.current.scrollTo(0, r || 0)
                }
              },
              [e.key]
            ),
            {
              ref: i,
              onScroll: function () {
                i.current && n.save(e, t, i.current.scrollTop)
              },
            }
          )
        })
      var r = n(1432),
        o = n(7294),
        a = n(9499)
    },
    4999: function (t, e, n) {
      e.components = {
        "component---src-pages-404-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(883)]).then(
            n.bind(n, 9616)
          )
        },
        "component---src-pages-admissions-admissions-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(393), n.e(704)]).then(
            n.bind(n, 3240)
          )
        },
        "component---src-pages-directions-directions-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(393), n.e(773)]).then(
            n.bind(n, 8334)
          )
        },
        "component---src-pages-graduates-graduates-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(393), n.e(127)]).then(
            n.bind(n, 754)
          )
        },
        "component---src-pages-history-history-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(393), n.e(428)]).then(
            n.bind(n, 3070)
          )
        },
        "component---src-pages-index-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(393), n.e(678)]).then(
            n.bind(n, 8995)
          )
        },
        "component---src-pages-news-item-news-item-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(393), n.e(129)]).then(
            n.bind(n, 3737)
          )
        },
        "component---src-pages-news-news-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(393), n.e(21)]).then(
            n.bind(n, 5579)
          )
        },
        "component---src-pages-offer-offer-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(393), n.e(553)]).then(
            n.bind(n, 7471)
          )
        },
        "component---src-pages-page-2-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(617)]).then(
            n.bind(n, 9863)
          )
        },
        "component---src-pages-sections-sections-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(393), n.e(724)]).then(
            n.bind(n, 2930)
          )
        },
        "component---src-pages-studentscience-studentscience-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(393), n.e(898)]).then(
            n.bind(n, 6709)
          )
        },
        "component---src-pages-teacher-teacher-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(393), n.e(842)]).then(
            n.bind(n, 5911)
          )
        },
        "component---src-pages-using-ssr-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(476)]).then(
            n.bind(n, 9579)
          )
        },
        "component---src-pages-using-typescript-tsx": function () {
          return Promise.all([n.e(532), n.e(351), n.e(970)]).then(
            n.bind(n, 2815)
          )
        },
        "component---src-pages-works-works-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(393), n.e(753)]).then(
            n.bind(n, 7950)
          )
        },
        "component---src-templates-using-dsg-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(713)]).then(
            n.bind(n, 8243)
          )
        },
      }
    },
    5182: function (t, e, n) {
      t.exports = [
        { plugin: n(6988), options: { plugins: [] } },
        { plugin: n(9478), options: { plugins: [] } },
        {
          plugin: n(992),
          options: {
            plugins: [],
            name: "gatsby-starter-default",
            short_name: "starter",
            start_url: "/",
            background_color: "#663399",
            display: "minimal-ui",
            icon: "src/images/gatsby-icon.png",
            legacy: !0,
            theme_color_in_head: !0,
            cache_busting_mode: "query",
            crossOrigin: "anonymous",
            include_favicon: !0,
            cacheDigest: "4a9773549091c227cd2eb82ccd9c5e3a",
          },
        },
        {
          plugin: n(733),
          options: {
            plugins: [],
            localeJsonSourceName: "locale",
            languages: ["ua", "ru", "en"],
            defaultLanguage: "ru",
            siteUrl: "http://localhost:8000/",
            i18nextOptions: {
              interpolation: { escapeValue: !1 },
              keySeparator: !1,
              nsSeparator: !1,
            },
            pages: [
              {
                matchPath: "/:lang?/blog/:uid",
                getLanguageFromPath: !0,
                excludeLanguages: ["es"],
              },
              { matchPath: "/preview", languages: ["ru"] },
            ],
          },
        },
        { plugin: n(9037), options: { plugins: [] } },
      ]
    },
    7343: function (t, e, n) {
      var r = n(5182),
        o = n(5894).jN,
        a = o.getResourceURLsForPathname,
        i = o.loadPage,
        s = o.loadPageSync
      ;(e.h = function (t, e, n, o) {
        void 0 === e && (e = {})
        var c = r.map(function (n) {
          if (n.plugin[t]) {
            ;(e.getResourceURLsForPathname = a),
              (e.loadPage = i),
              (e.loadPageSync = s)
            var r = n.plugin[t](e, n.options)
            return r && o && (e = o({ args: e, result: r, plugin: n })), r
          }
        })
        return (c = c.filter(function (t) {
          return void 0 !== t
        })).length > 0
          ? c
          : n
          ? [n]
          : []
      }),
        (e.I = function (t, e, n) {
          return r.reduce(function (n, r) {
            return r.plugin[t]
              ? n.then(function () {
                  return r.plugin[t](e, r.options)
                })
              : n
          }, Promise.resolve())
        })
    },
    8110: function (t, e, n) {
      "use strict"
      n.d(e, {
        Z: function () {
          return r
        },
      })
      var r = (function (t) {
        return (
          (t = t || Object.create(null)),
          {
            on: function (e, n) {
              ;(t[e] || (t[e] = [])).push(n)
            },
            off: function (e, n) {
              t[e] && t[e].splice(t[e].indexOf(n) >>> 0, 1)
            },
            emit: function (e, n) {
              ;(t[e] || []).slice().map(function (t) {
                t(n)
              }),
                (t["*"] || []).slice().map(function (t) {
                  t(e, n)
                })
            },
          }
        )
      })()
    },
    2257: function (t, e, n) {
      "use strict"
      n.d(e, {
        UD: function () {
          return p
        },
        Cj: function () {
          return h
        },
        GA: function () {
          return d
        },
        DS: function () {
          return f
        },
      })
      var r = n(2098),
        o = n(1578),
        a = function (t) {
          if (void 0 === t) return t
          var e = t.split("?"),
            n = e[0],
            r = e[1],
            o = void 0 === r ? "" : r
          return (
            o && (o = "?" + o),
            "/" === n
              ? "/" + o
              : "/" === n.charAt(n.length - 1)
              ? n.slice(0, -1) + o
              : n + o
          )
        },
        i = n(969),
        s = new Map(),
        c = [],
        u = function (t) {
          var e = decodeURIComponent(t)
          return (0, o.Z)(e, decodeURIComponent("")).split("#")[0]
        }
      function l(t) {
        return t.startsWith("/") ||
          t.startsWith("https://") ||
          t.startsWith("http://")
          ? t
          : new URL(
              t,
              window.location.href +
                (window.location.href.endsWith("/") ? "" : "/")
            ).pathname
      }
      var f = function (t) {
          c = t
        },
        p = function (t) {
          var e = g(t),
            n = c.map(function (t) {
              var e = t.path
              return { path: t.matchPath, originalPath: e }
            }),
            o = (0, r.pick)(n, e)
          return o ? a(o.route.originalPath) : null
        },
        d = function (t) {
          var e = g(t),
            n = c.map(function (t) {
              var e = t.path
              return { path: t.matchPath, originalPath: e }
            }),
            o = (0, r.pick)(n, e)
          return o ? o.params : {}
        },
        h = function t(e) {
          var n = u(l(e))
          if (s.has(n)) return s.get(n)
          var r = (0, i.J)(e)
          if (r) return t(r.toPath)
          var o = p(n)
          return o || (o = g(e)), s.set(n, o), o
        },
        g = function (t) {
          var e = u(l(t))
          return "/index.html" === e && (e = "/"), (e = a(e))
        }
    },
    5444: function (t, e, n) {
      "use strict"
      n.r(e),
        n.d(e, {
          Link: function () {
            return o.ZP
          },
          withAssetPrefix: function () {
            return o.mc
          },
          withPrefix: function () {
            return o.dq
          },
          graphql: function () {
            return d
          },
          parsePath: function () {
            return o.cP
          },
          navigate: function () {
            return o.c4
          },
          useScrollRestoration: function () {
            return a.p2
          },
          StaticQueryContext: function () {
            return u
          },
          StaticQuery: function () {
            return f
          },
          PageRenderer: function () {
            return s.a
          },
          useStaticQuery: function () {
            return p
          },
          prefetchPathname: function () {
            return c
          },
        })
      var r = n(7294),
        o = n(8037),
        a = n(9679),
        i = n(861),
        s = n.n(i),
        c = n(5894).ZP.enqueue,
        u = r.createContext({})
      function l(t) {
        var e = t.staticQueryData,
          n = t.data,
          o = t.query,
          a = t.render,
          i = n ? n.data : e[o] && e[o].data
        return r.createElement(
          r.Fragment,
          null,
          i && a(i),
          !i && r.createElement("div", null, "Loading (StaticQuery)")
        )
      }
      var f = function (t) {
          var e = t.data,
            n = t.query,
            o = t.render,
            a = t.children
          return r.createElement(u.Consumer, null, function (t) {
            return r.createElement(l, {
              data: e,
              query: n,
              render: o || a,
              staticQueryData: t,
            })
          })
        },
        p = function (t) {
          var e
          r.useContext
          var n = r.useContext(u)
          if (isNaN(Number(t)))
            throw new Error(
              "useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`" +
                t +
                "`);\n"
            )
          if (null !== (e = n[t]) && void 0 !== e && e.data) return n[t].data
          throw new Error(
            "The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues"
          )
        }
      function d() {
        throw new Error(
          "It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby."
        )
      }
    },
    5894: function (t, e, n) {
      "use strict"
      n.d(e, {
        uQ: function () {
          return f
        },
        kL: function () {
          return b
        },
        ZP: function () {
          return O
        },
        hs: function () {
          return k
        },
        jN: function () {
          return x
        },
        N1: function () {
          return w
        },
      })
      var r = n(1721)
      function o(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
        return r
      }
      function a(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return o(t)
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t)
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return o(t, e)
              var n = Object.prototype.toString.call(t).slice(8, -1)
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? o(t, e)
                  : void 0
              )
            }
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            )
          })()
        )
      }
      var i = (function (t) {
          if ("undefined" == typeof document) return !1
          var e = document.createElement("link")
          try {
            if (e.relList && "function" == typeof e.relList.supports)
              return e.relList.supports(t)
          } catch (n) {
            return !1
          }
          return !1
        })("prefetch")
          ? function (t, e) {
              return new Promise(function (n, r) {
                if ("undefined" != typeof document) {
                  var o = document.createElement("link")
                  o.setAttribute("rel", "prefetch"),
                    o.setAttribute("href", t),
                    Object.keys(e).forEach(function (t) {
                      o.setAttribute(t, e[t])
                    }),
                    (o.onload = n),
                    (o.onerror = r),
                    (
                      document.getElementsByTagName("head")[0] ||
                      document.getElementsByName("script")[0].parentNode
                    ).appendChild(o)
                } else r()
              })
            }
          : function (t) {
              return new Promise(function (e, n) {
                var r = new XMLHttpRequest()
                r.open("GET", t, !0),
                  (r.onload = function () {
                    200 === r.status ? e() : n()
                  }),
                  r.send(null)
              })
            },
        s = {},
        c = function (t, e) {
          return new Promise(function (n) {
            s[t]
              ? n()
              : i(t, e)
                  .then(function () {
                    n(), (s[t] = !0)
                  })
                  .catch(function () {})
          })
        },
        u = n(8110),
        l = n(2257),
        f = { Error: "error", Success: "success" },
        p = function (t) {
          return (t && t.default) || t
        },
        d = function (t) {
          var e = t.split("?"),
            n = e[0],
            r = e[1]
          return (
            "/page-data/" +
            ("/" === n
              ? "index"
              : (function (t) {
                  return (t = "/" === t[0] ? t.slice(1) : t).endsWith("/")
                    ? t.slice(0, -1)
                    : t
                })(n)) +
            "/page-data.json" +
            (r ? "?" + r : "")
          )
        }
      function h(t, e) {
        return (
          void 0 === e && (e = "GET"),
          new Promise(function (n) {
            var r = new XMLHttpRequest()
            r.open(e, t, !0),
              (r.onreadystatechange = function () {
                4 == r.readyState && n(r)
              }),
              r.send(null)
          })
        )
      }
      var g,
        v = function (t, e) {
          void 0 === e && (e = null)
          var n = {
            componentChunkName: t.componentChunkName,
            path: t.path,
            webpackCompilationHash: t.webpackCompilationHash,
            matchPath: t.matchPath,
            staticQueryHashes: t.staticQueryHashes,
            getServerDataError: t.getServerDataError,
          }
          return { component: e, json: t.result, page: n }
        },
        m = (function () {
          function t(t, e) {
            ;(this.inFlightNetworkRequests = new Map()),
              (this.pageDb = new Map()),
              (this.inFlightDb = new Map()),
              (this.staticQueryDb = {}),
              (this.pageDataDb = new Map()),
              (this.isPrefetchQueueRunning = !1),
              (this.prefetchQueued = []),
              (this.prefetchTriggered = new Set()),
              (this.prefetchCompleted = new Set()),
              (this.loadComponent = t),
              (0, l.DS)(e)
          }
          var e = t.prototype
          return (
            (e.memoizedGet = function (t) {
              var e = this,
                n = this.inFlightNetworkRequests.get(t)
              return (
                n ||
                  ((n = h(t, "GET")), this.inFlightNetworkRequests.set(t, n)),
                n
                  .then(function (n) {
                    return e.inFlightNetworkRequests.delete(t), n
                  })
                  .catch(function (n) {
                    throw (e.inFlightNetworkRequests.delete(t), n)
                  })
              )
            }),
            (e.setApiRunner = function (t) {
              ;(this.apiRunner = t),
                (this.prefetchDisabled = t("disableCorePrefetching").some(
                  function (t) {
                    return t
                  }
                ))
            }),
            (e.fetchPageDataJson = function (t) {
              var e = this,
                n = t.pagePath,
                r = t.retries,
                o = void 0 === r ? 0 : r,
                a = d(n)
              return this.memoizedGet(a).then(function (r) {
                var a = r.status,
                  i = r.responseText
                if (200 === a)
                  try {
                    var s = JSON.parse(i)
                    if (void 0 === s.path)
                      throw new Error("not a valid pageData response")
                    var c = n.split("?")[1]
                    return (
                      c && !s.path.includes(c) && (s.path += "?" + c),
                      Object.assign(t, { status: f.Success, payload: s })
                    )
                  } catch (u) {}
                return 404 === a || 200 === a
                  ? "/404.html" === n || "/500.html" === n
                    ? Object.assign(t, { status: f.Error })
                    : e.fetchPageDataJson(
                        Object.assign(t, {
                          pagePath: "/404.html",
                          notFound: !0,
                        })
                      )
                  : 500 === a
                  ? e.fetchPageDataJson(
                      Object.assign(t, {
                        pagePath: "/500.html",
                        internalServerError: !0,
                      })
                    )
                  : o < 3
                  ? e.fetchPageDataJson(Object.assign(t, { retries: o + 1 }))
                  : Object.assign(t, { status: f.Error })
              })
            }),
            (e.loadPageDataJson = function (t) {
              var e = this,
                n = (0, l.Cj)(t)
              if (this.pageDataDb.has(n)) {
                var r = this.pageDataDb.get(n)
                return Promise.resolve(r)
              }
              return this.fetchPageDataJson({ pagePath: n }).then(function (t) {
                return e.pageDataDb.set(n, t), t
              })
            }),
            (e.findMatchPath = function (t) {
              return (0, l.UD)(t)
            }),
            (e.loadPage = function (t) {
              var e = this,
                n = (0, l.Cj)(t)
              if (this.pageDb.has(n)) {
                var r = this.pageDb.get(n)
                return r.error
                  ? { error: r.error, status: r.status }
                  : Promise.resolve(r.payload)
              }
              if (this.inFlightDb.has(n)) return this.inFlightDb.get(n)
              var o = Promise.all([
                this.loadAppData(),
                this.loadPageDataJson(n),
              ]).then(function (t) {
                var r = t[1]
                if (r.status === f.Error) return { status: f.Error }
                var o = r.payload,
                  a = o,
                  i = a.componentChunkName,
                  s = a.staticQueryHashes,
                  c = void 0 === s ? [] : s,
                  l = {},
                  p = e.loadComponent(i).then(function (e) {
                    var n
                    return (
                      (l.createdAt = new Date()),
                      !e || e instanceof Error
                        ? ((l.status = f.Error), (l.error = e))
                        : ((l.status = f.Success),
                          !0 === r.notFound && (l.notFound = !0),
                          (o = Object.assign(o, {
                            webpackCompilationHash: t[0]
                              ? t[0].webpackCompilationHash
                              : "",
                          })),
                          (n = v(o, e))),
                      n
                    )
                  }),
                  d = Promise.all(
                    c.map(function (t) {
                      if (e.staticQueryDb[t]) {
                        var n = e.staticQueryDb[t]
                        return { staticQueryHash: t, jsonPayload: n }
                      }
                      return e
                        .memoizedGet("/page-data/sq/d/" + t + ".json")
                        .then(function (e) {
                          var n = JSON.parse(e.responseText)
                          return { staticQueryHash: t, jsonPayload: n }
                        })
                        .catch(function () {
                          throw new Error(
                            "We couldn't load \"/page-data/sq/d/" + t + '.json"'
                          )
                        })
                    })
                  ).then(function (t) {
                    var n = {}
                    return (
                      t.forEach(function (t) {
                        var r = t.staticQueryHash,
                          o = t.jsonPayload
                        ;(n[r] = o), (e.staticQueryDb[r] = o)
                      }),
                      n
                    )
                  })
                return Promise.all([p, d])
                  .then(function (t) {
                    var r,
                      o = t[0],
                      a = t[1]
                    return (
                      o &&
                        ((r = Object.assign({}, o, { staticQueryResults: a })),
                        (l.payload = r),
                        u.Z.emit("onPostLoadPageResources", {
                          page: r,
                          pageResources: r,
                        })),
                      e.pageDb.set(n, l),
                      l.error ? { error: l.error, status: l.status } : r
                    )
                  })
                  .catch(function (t) {
                    return { error: t, status: f.Error }
                  })
              })
              return (
                o
                  .then(function () {
                    e.inFlightDb.delete(n)
                  })
                  .catch(function (t) {
                    throw (e.inFlightDb.delete(n), t)
                  }),
                this.inFlightDb.set(n, o),
                o
              )
            }),
            (e.loadPageSync = function (t, e) {
              void 0 === e && (e = {})
              var n = (0, l.Cj)(t)
              if (this.pageDb.has(n)) {
                var r,
                  o = this.pageDb.get(n)
                if (o.payload) return o.payload
                if (null !== (r = e) && void 0 !== r && r.withErrorDetails)
                  return { error: o.error, status: o.status }
              }
            }),
            (e.shouldPrefetch = function (t) {
              return (
                !!(function () {
                  if (
                    "connection" in navigator &&
                    void 0 !== navigator.connection
                  ) {
                    if (
                      (navigator.connection.effectiveType || "").includes("2g")
                    )
                      return !1
                    if (navigator.connection.saveData) return !1
                  }
                  return !0
                })() && !this.pageDb.has(t)
              )
            }),
            (e.prefetch = function (t) {
              var e = this
              if (!this.shouldPrefetch(t))
                return {
                  then: function (t) {
                    return t(!1)
                  },
                  abort: function () {},
                }
              if (this.prefetchTriggered.has(t))
                return {
                  then: function (t) {
                    return t(!0)
                  },
                  abort: function () {},
                }
              var n = { resolve: null, reject: null, promise: null }
              ;(n.promise = new Promise(function (t, e) {
                ;(n.resolve = t), (n.reject = e)
              })),
                this.prefetchQueued.push([t, n])
              var r = new AbortController()
              return (
                r.signal.addEventListener("abort", function () {
                  var n = e.prefetchQueued.findIndex(function (e) {
                    return e[0] === t
                  })
                  ;-1 !== n && e.prefetchQueued.splice(n, 1)
                }),
                this.isPrefetchQueueRunning ||
                  ((this.isPrefetchQueueRunning = !0),
                  setTimeout(function () {
                    e._processNextPrefetchBatch()
                  }, 3e3)),
                {
                  then: function (t, e) {
                    return n.promise.then(t, e)
                  },
                  abort: r.abort.bind(r),
                }
              )
            }),
            (e._processNextPrefetchBatch = function () {
              var t = this
              ;(
                window.requestIdleCallback ||
                function (t) {
                  return setTimeout(t, 0)
                }
              )(function () {
                var e = t.prefetchQueued.splice(0, 4),
                  n = Promise.all(
                    e.map(function (e) {
                      var n = e[0],
                        r = e[1]
                      return (
                        t.prefetchTriggered.has(n) ||
                          (t.apiRunner("onPrefetchPathname", { pathname: n }),
                          t.prefetchTriggered.add(n)),
                        t.prefetchDisabled
                          ? r.resolve(!1)
                          : t.doPrefetch((0, l.Cj)(n)).then(function () {
                              t.prefetchCompleted.has(n) ||
                                (t.apiRunner("onPostPrefetchPathname", {
                                  pathname: n,
                                }),
                                t.prefetchCompleted.add(n)),
                                r.resolve(!0)
                            })
                      )
                    })
                  )
                t.prefetchQueued.length
                  ? n.then(function () {
                      setTimeout(function () {
                        t._processNextPrefetchBatch()
                      }, 3e3)
                    })
                  : (t.isPrefetchQueueRunning = !1)
              })
            }),
            (e.doPrefetch = function (t) {
              var e = this,
                n = d(t)
              return c(n, { crossOrigin: "anonymous", as: "fetch" }).then(
                function () {
                  return e.loadPageDataJson(t)
                }
              )
            }),
            (e.hovering = function (t) {
              this.loadPage(t)
            }),
            (e.getResourceURLsForPathname = function (t) {
              var e = (0, l.Cj)(t),
                n = this.pageDataDb.get(e)
              if (n) {
                var r = v(n.payload)
                return [].concat(a(y(r.page.componentChunkName)), [d(e)])
              }
              return null
            }),
            (e.isPageNotFound = function (t) {
              var e = (0, l.Cj)(t),
                n = this.pageDb.get(e)
              return !n || n.notFound
            }),
            (e.loadAppData = function (t) {
              var e = this
              return (
                void 0 === t && (t = 0),
                this.memoizedGet("/page-data/app-data.json").then(function (n) {
                  var r,
                    o = n.status,
                    a = n.responseText
                  if (200 !== o && t < 3) return e.loadAppData(t + 1)
                  if (200 === o)
                    try {
                      var i = JSON.parse(a)
                      if (void 0 === i.webpackCompilationHash)
                        throw new Error("not a valid app-data response")
                      r = i
                    } catch (s) {}
                  return r
                })
              )
            }),
            t
          )
        })(),
        y = function (t) {
          return (window.___chunkMapping[t] || []).map(function (t) {
            return "" + t
          })
        },
        b = (function (t) {
          function e(e, n, r) {
            var o
            return (
              (o =
                t.call(
                  this,
                  function (t) {
                    if (!e.components[t])
                      throw new Error(
                        "We couldn't find the correct component chunk with the name " +
                          t
                      )
                    return e.components[t]()
                      .then(p)
                      .catch(function (t) {
                        return t
                      })
                  },
                  n
                ) || this),
              r &&
                o.pageDataDb.set((0, l.Cj)(r.path), {
                  pagePath: r.path,
                  payload: r,
                  status: "success",
                }),
              o
            )
          }
          ;(0, r.Z)(e, t)
          var n = e.prototype
          return (
            (n.doPrefetch = function (e) {
              return t.prototype.doPrefetch.call(this, e).then(function (t) {
                if (t.status !== f.Success) return Promise.resolve()
                var e = t.payload,
                  n = e.componentChunkName,
                  r = y(n)
                return Promise.all(r.map(c)).then(function () {
                  return e
                })
              })
            }),
            (n.loadPageDataJson = function (e) {
              return t.prototype.loadPageDataJson
                .call(this, e)
                .then(function (t) {
                  return t.notFound
                    ? h(e, "HEAD").then(function (e) {
                        return 200 === e.status ? { status: f.Error } : t
                      })
                    : t
                })
            }),
            e
          )
        })(m),
        w = function (t) {
          g = t
        },
        x = {
          enqueue: function (t) {
            return g.prefetch(t)
          },
          getResourceURLsForPathname: function (t) {
            return g.getResourceURLsForPathname(t)
          },
          loadPage: function (t) {
            return g.loadPage(t)
          },
          loadPageSync: function (t, e) {
            return void 0 === e && (e = {}), g.loadPageSync(t, e)
          },
          prefetch: function (t) {
            return g.prefetch(t)
          },
          isPageNotFound: function (t) {
            return g.isPageNotFound(t)
          },
          hovering: function (t) {
            return g.hovering(t)
          },
          loadAppData: function () {
            return g.loadAppData()
          },
        },
        O = x
      function k() {
        return g ? g.staticQueryDb : {}
      }
    },
    804: function (t, e, n) {
      "use strict"
      var r = n(1721),
        o = n(7294),
        a = n(7343),
        i = n(2257),
        s = (function (t) {
          function e() {
            return t.apply(this, arguments) || this
          }
          return (
            (0, r.Z)(e, t),
            (e.prototype.render = function () {
              var t = Object.assign({}, this.props, {
                  params: Object.assign(
                    {},
                    (0, i.GA)(this.props.location.pathname),
                    this.props.pageResources.json.pageContext.__params
                  ),
                }),
                e = (0, o.createElement)(
                  this.props.pageResources.component,
                  Object.assign({}, t, {
                    key: this.props.path || this.props.pageResources.page.path,
                  })
                )
              return (0, a.h)(
                "wrapPageElement",
                { element: e, props: t },
                e,
                function (e) {
                  return { element: e.result, props: t }
                }
              ).pop()
            }),
            e
          )
        })(o.Component)
      e.Z = s
    },
    9917: function (t, e, n) {
      "use strict"
      var r = n(1721),
        o = n(7343),
        a = n(7294),
        i = n(3935),
        s = n(9499),
        c = n(9679),
        u = n(5444),
        l = n(5894),
        f = n(969),
        p = n(8110),
        d = {
          id: "gatsby-announcer",
          style: {
            position: "absolute",
            top: 0,
            width: 1,
            height: 1,
            padding: 0,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: 0,
          },
          "aria-live": "assertive",
          "aria-atomic": "true",
        },
        h = n(2393),
        g = n(8037)
      function v(t) {
        var e = (0, f.J)(t),
          n = window.location,
          r = n.hash,
          o = n.search
        return null != e && (window.___replace(e.toPath + o + r), !0)
      }
      var m = ""
      window.addEventListener("unhandledrejection", function (t) {
        ;/loading chunk \d* failed./i.test(t.reason) &&
          m &&
          (window.location.pathname = m)
      })
      var y = function (t, e) {
          v(t.pathname) ||
            ((m = t.pathname),
            (0, o.h)("onPreRouteUpdate", { location: t, prevLocation: e }))
        },
        b = function (t, e) {
          v(t.pathname) ||
            (0, o.h)("onRouteUpdate", { location: t, prevLocation: e })
        },
        w = function (t, e) {
          if ((void 0 === e && (e = {}), "number" != typeof t)) {
            var n = (0, g.cP)(t),
              r = n.pathname,
              a = n.search,
              i = n.hash,
              c = (0, f.J)(r)
            if ((c && (t = c.toPath + a + i), window.___swUpdated))
              window.location = r + a + i
            else {
              var u = setTimeout(function () {
                p.Z.emit("onDelayedLoadPageResources", { pathname: r }),
                  (0, o.h)("onRouteUpdateDelayed", {
                    location: window.location,
                  })
              }, 1e3)
              l.ZP.loadPage(r + a).then(function (n) {
                if (!n || n.status === l.uQ.Error)
                  return (
                    window.history.replaceState({}, "", location.href),
                    (window.location = r),
                    void clearTimeout(u)
                  )
                n &&
                  n.page.webpackCompilationHash !==
                    window.___webpackCompilationHash &&
                  ("serviceWorker" in navigator &&
                    null !== navigator.serviceWorker.controller &&
                    "activated" === navigator.serviceWorker.controller.state &&
                    navigator.serviceWorker.controller.postMessage({
                      gatsbyApi: "clearPathResources",
                    }),
                  (window.location = r + a + i)),
                  (0, s.navigate)(t, e),
                  clearTimeout(u)
              })
            }
          } else h.V5.navigate(t)
        }
      function x(t, e) {
        var n = this,
          r = e.location,
          a = r.pathname,
          i = r.hash,
          s = (0, o.h)("shouldUpdateScroll", {
            prevRouterProps: t,
            pathname: a,
            routerProps: { location: r },
            getSavedScrollPosition: function (t) {
              return [0, n._stateStorage.read(t, t.key)]
            },
          })
        if (s.length > 0) return s[s.length - 1]
        if (t && t.location.pathname === a)
          return i ? decodeURI(i.slice(1)) : [0, 0]
        return !0
      }
      var O = (function (t) {
          function e(e) {
            var n
            return (
              ((n = t.call(this, e) || this).announcementRef = a.createRef()), n
            )
          }
          ;(0, r.Z)(e, t)
          var n = e.prototype
          return (
            (n.componentDidUpdate = function (t, e) {
              var n = this
              requestAnimationFrame(function () {
                var t = "new page at " + n.props.location.pathname
                document.title && (t = document.title)
                var e = document.querySelectorAll("#gatsby-focus-wrapper h1")
                e && e.length && (t = e[0].textContent)
                var r = "Navigated to " + t
                n.announcementRef.current &&
                  n.announcementRef.current.innerText !== r &&
                  (n.announcementRef.current.innerText = r)
              })
            }),
            (n.render = function () {
              return a.createElement(
                "div",
                Object.assign({}, d, { ref: this.announcementRef })
              )
            }),
            e
          )
        })(a.Component),
        k = function (t, e) {
          var n, r
          return (
            t.href !== e.href ||
            (null == t || null === (n = t.state) || void 0 === n
              ? void 0
              : n.key) !==
              (null == e || null === (r = e.state) || void 0 === r
                ? void 0
                : r.key)
          )
        },
        P = (function (t) {
          function e(e) {
            var n
            return (n = t.call(this, e) || this), y(e.location, null), n
          }
          ;(0, r.Z)(e, t)
          var n = e.prototype
          return (
            (n.componentDidMount = function () {
              b(this.props.location, null)
            }),
            (n.shouldComponentUpdate = function (t) {
              return (
                !!k(t.location, this.props.location) &&
                (y(this.props.location, t.location), !0)
              )
            }),
            (n.componentDidUpdate = function (t) {
              k(t.location, this.props.location) &&
                b(this.props.location, t.location)
            }),
            (n.render = function () {
              return a.createElement(
                a.Fragment,
                null,
                this.props.children,
                a.createElement(O, { location: location })
              )
            }),
            e
          )
        })(a.Component),
        S = n(804),
        j = n(4999)
      function E(t, e) {
        for (var n in t) if (!(n in e)) return !0
        for (var r in e) if (t[r] !== e[r]) return !0
        return !1
      }
      var R = (function (t) {
          function e(e) {
            var n
            n = t.call(this) || this
            var r = e.location,
              o = e.pageResources
            return (
              (n.state = {
                location: Object.assign({}, r),
                pageResources:
                  o ||
                  l.ZP.loadPageSync(r.pathname + r.search, {
                    withErrorDetails: !0,
                  }),
              }),
              n
            )
          }
          ;(0, r.Z)(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              var n = t.location
              return e.location.href !== n.href
                ? {
                    pageResources: l.ZP.loadPageSync(n.pathname + n.search, {
                      withErrorDetails: !0,
                    }),
                    location: Object.assign({}, n),
                  }
                : { location: Object.assign({}, n) }
            })
          var n = e.prototype
          return (
            (n.loadResources = function (t) {
              var e = this
              l.ZP.loadPage(t).then(function (n) {
                n && n.status !== l.uQ.Error
                  ? e.setState({
                      location: Object.assign({}, window.location),
                      pageResources: n,
                    })
                  : (window.history.replaceState({}, "", location.href),
                    (window.location = t))
              })
            }),
            (n.shouldComponentUpdate = function (t, e) {
              return e.pageResources
                ? this.state.pageResources !== e.pageResources ||
                    this.state.pageResources.component !==
                      e.pageResources.component ||
                    this.state.pageResources.json !== e.pageResources.json ||
                    !(
                      this.state.location.key === e.location.key ||
                      !e.pageResources.page ||
                      (!e.pageResources.page.matchPath &&
                        !e.pageResources.page.path)
                    ) ||
                    (function (t, e, n) {
                      return E(t.props, e) || E(t.state, n)
                    })(this, t, e)
                : (this.loadResources(t.location.pathname + t.location.search),
                  !1)
            }),
            (n.render = function () {
              return this.props.children(this.state)
            }),
            e
          )
        })(a.Component),
        _ = n(1578),
        C = JSON.parse(
          '[{"path":"/en/admissions/admissions/","matchPath":"/en/admissions/admissions/"},{"path":"/en/directions/directions/","matchPath":"/en/directions/directions/"},{"path":"/en/graduates/graduates/","matchPath":"/en/graduates/graduates/"},{"path":"/en/history/history/","matchPath":"/en/history/history/"},{"path":"/en/news_item/news_item/","matchPath":"/en/news_item/news_item/"},{"path":"/en/news/news/","matchPath":"/en/news/news/"},{"path":"/en/offer/offer/","matchPath":"/en/offer/offer/"},{"path":"/en/sections/sections/","matchPath":"/en/sections/sections/"},{"path":"/en/studentscience/studentscience/","matchPath":"/en/studentscience/studentscience/"},{"path":"/en/teacher/teacher/","matchPath":"/en/teacher/teacher/"},{"path":"/en/works/works/","matchPath":"/en/works/works/"},{"path":"/ua/admissions/admissions/","matchPath":"/ua/admissions/admissions/"},{"path":"/ua/directions/directions/","matchPath":"/ua/directions/directions/"},{"path":"/ua/graduates/graduates/","matchPath":"/ua/graduates/graduates/"},{"path":"/ua/history/history/","matchPath":"/ua/history/history/"},{"path":"/ua/news_item/news_item/","matchPath":"/ua/news_item/news_item/"},{"path":"/ua/news/news/","matchPath":"/ua/news/news/"},{"path":"/ua/offer/offer/","matchPath":"/ua/offer/offer/"},{"path":"/ua/sections/sections/","matchPath":"/ua/sections/sections/"},{"path":"/ua/studentscience/studentscience/","matchPath":"/ua/studentscience/studentscience/"},{"path":"/ua/teacher/teacher/","matchPath":"/ua/teacher/teacher/"},{"path":"/ua/works/works/","matchPath":"/ua/works/works/"},{"path":"/en/404.html","matchPath":"/en/404.html"},{"path":"/en/page-2/","matchPath":"/en/page-2/"},{"path":"/en/using-dsg","matchPath":"/en/using-dsg"},{"path":"/en/using-ssr/","matchPath":"/en/using-ssr/"},{"path":"/en/using-typescript/","matchPath":"/en/using-typescript/"},{"path":"/ua/404.html","matchPath":"/ua/404.html"},{"path":"/ua/page-2/","matchPath":"/ua/page-2/"},{"path":"/ua/using-dsg","matchPath":"/ua/using-dsg"},{"path":"/ua/using-ssr/","matchPath":"/ua/using-ssr/"},{"path":"/ua/using-typescript/","matchPath":"/ua/using-typescript/"},{"path":"/en/","matchPath":"/en/"},{"path":"/ua/","matchPath":"/ua/"},{"path":"/en/404/","matchPath":"/en/*"},{"path":"/ua/404/","matchPath":"/ua/*"}]'
        ),
        L = new l.kL(j, C, window.pageData)
      ;(0, l.N1)(L),
        L.setApiRunner(o.h),
        (window.asyncRequires = j),
        (window.___emitter = p.Z),
        (window.___loader = l.jN),
        h.V5.listen(function (t) {
          t.location.action = t.action
        }),
        (window.___push = function (t) {
          return w(t, { replace: !1 })
        }),
        (window.___replace = function (t) {
          return w(t, { replace: !0 })
        }),
        (window.___navigate = function (t, e) {
          return w(t, e)
        })
      var N = "gatsby-reload-compilation-hash-match"
      ;(0, o.I)("onClientEntry").then(function () {
        ;(0, o.h)("registerServiceWorker").filter(Boolean).length > 0 && n(154)
        var t = function (t) {
            return a.createElement(
              s.BaseContext.Provider,
              { value: { baseuri: "/", basepath: "/" } },
              a.createElement(S.Z, t)
            )
          },
          e = a.createContext({}),
          f = (function (t) {
            function n() {
              return t.apply(this, arguments) || this
            }
            return (
              (0, r.Z)(n, t),
              (n.prototype.render = function () {
                var t = this.props.children
                return a.createElement(s.Location, null, function (n) {
                  var r = n.location
                  return a.createElement(R, { location: r }, function (n) {
                    var r = n.pageResources,
                      o = n.location,
                      i = (0, l.hs)()
                    return a.createElement(
                      u.StaticQueryContext.Provider,
                      { value: i },
                      a.createElement(
                        e.Provider,
                        { value: { pageResources: r, location: o } },
                        t
                      )
                    )
                  })
                })
              }),
              n
            )
          })(a.Component),
          p = (function (n) {
            function o() {
              return n.apply(this, arguments) || this
            }
            return (
              (0, r.Z)(o, n),
              (o.prototype.render = function () {
                var n = this
                return a.createElement(e.Consumer, null, function (e) {
                  var r = e.pageResources,
                    o = e.location
                  return a.createElement(
                    P,
                    { location: o },
                    a.createElement(
                      c.$C,
                      { location: o, shouldUpdateScroll: x },
                      a.createElement(
                        s.Router,
                        {
                          basepath: "",
                          location: o,
                          id: "gatsby-focus-wrapper",
                        },
                        a.createElement(
                          t,
                          Object.assign(
                            {
                              path:
                                "/404.html" === r.page.path ||
                                "/500.html" === r.page.path
                                  ? (0, _.Z)(o.pathname, "")
                                  : encodeURI(
                                      (r.page.matchPath || r.page.path).split(
                                        "?"
                                      )[0]
                                    ),
                            },
                            n.props,
                            { location: o, pageResources: r },
                            r.json
                          )
                        )
                      )
                    )
                  )
                })
              }),
              o
            )
          })(a.Component),
          d = window,
          h = d.pagePath,
          g = d.location
        h &&
          "" + h !== g.pathname + (h.includes("?") ? g.search : "") &&
          !(
            L.findMatchPath((0, _.Z)(g.pathname, "")) ||
            h.match(/^\/(404|500)(\/?|.html)$/) ||
            h.match(/^\/offline-plugin-app-shell-fallback\/?$/)
          ) &&
          (0, s.navigate)("" + h + (h.includes("?") ? "" : g.search) + g.hash, {
            replace: !0,
          }),
          l.jN.loadPage(g.pathname + g.search).then(function (t) {
            if (
              t.page.webpackCompilationHash !==
                window.___webpackCompilationHash &&
              ("serviceWorker" in navigator &&
                null !== navigator.serviceWorker.controller &&
                "activated" === navigator.serviceWorker.controller.state &&
                navigator.serviceWorker.controller.postMessage({
                  gatsbyApi: "clearPathResources",
                }),
              sessionStorage && !("1" === sessionStorage.getItem(N)))
            )
              return (
                sessionStorage.setItem(N, "1"), void window.location.reload(!0)
              )
            if (
              (sessionStorage && sessionStorage.removeItem(N),
              !t || t.status === l.uQ.Error)
            ) {
              var e =
                "page resources for " +
                g.pathname +
                " not found. Not rendering React"
              if (t && t.error) throw (console.error(e), t.error)
              throw new Error(e)
            }
            var n = (0, o.h)(
                "wrapRootElement",
                { element: a.createElement(p, null) },
                a.createElement(p, null),
                function (t) {
                  return { element: t.result }
                }
              ).pop(),
              r = function () {
                var t = a.useRef(!1)
                return (
                  a.useEffect(function () {
                    t.current ||
                      ((t.current = !0),
                      performance.mark &&
                        performance.mark("onInitialClientRender"),
                      (0, o.h)("onInitialClientRender"))
                  }, []),
                  a.createElement(f, null, n)
                )
              },
              s = (0, o.h)(
                "replaceHydrateFunction",
                void 0,
                i.hydrateRoot ? i.hydrateRoot : i.hydrate
              )[0]
            function c() {
              var t =
                "undefined" != typeof window
                  ? document.getElementById("___gatsby")
                  : null
              s === i.hydrateRoot
                ? s(t, a.createElement(r, null))
                : s(a.createElement(r, null), t)
            }
            var u = document
            if (
              "complete" === u.readyState ||
              ("loading" !== u.readyState && !u.documentElement.doScroll)
            )
              setTimeout(function () {
                c()
              }, 0)
            else {
              var d = function t() {
                u.removeEventListener("DOMContentLoaded", t, !1),
                  window.removeEventListener("load", t, !1),
                  c()
              }
              u.addEventListener("DOMContentLoaded", d, !1),
                window.addEventListener("load", d, !1)
            }
          })
      })
    },
    6947: function (t, e, n) {
      "use strict"
      n.r(e)
      var r = n(7294),
        o = n(5894),
        a = n(804)
      e.default = function (t) {
        var e = t.location,
          n = o.ZP.loadPageSync(e.pathname)
        return n
          ? r.createElement(
              a.Z,
              Object.assign({ location: e, pageResources: n }, n.json)
            )
          : null
      }
    },
    861: function (t, e, n) {
      var r
      t.exports = ((r = n(6947)) && r.default) || r
    },
    3639: function (t, e) {
      e.O = function (t) {
        return t
      }
    },
    969: function (t, e, n) {
      "use strict"
      n.d(e, {
        J: function () {
          return a
        },
      })
      var r = new Map(),
        o = new Map()
      function a(t) {
        var e = r.get(t)
        return e || (e = o.get(t.toLowerCase())), e
      }
      ;[].forEach(function (t) {
        t.ignoreCase ? o.set(t.fromPath, t) : r.set(t.fromPath, t)
      })
    },
    154: function (t, e, n) {
      "use strict"
      n.r(e)
      var r = n(7343)
      "https:" !== window.location.protocol &&
      "localhost" !== window.location.hostname
        ? console.error(
            "Service workers can only be used over HTTPS, or on localhost for development"
          )
        : "serviceWorker" in navigator &&
          navigator.serviceWorker
            .register("/sw.js")
            .then(function (t) {
              t.addEventListener("updatefound", function () {
                ;(0, r.h)("onServiceWorkerUpdateFound", { serviceWorker: t })
                var e = t.installing
                console.log("installingWorker", e),
                  e.addEventListener("statechange", function () {
                    switch (e.state) {
                      case "installed":
                        navigator.serviceWorker.controller
                          ? ((window.___swUpdated = !0),
                            (0, r.h)("onServiceWorkerUpdateReady", {
                              serviceWorker: t,
                            }),
                            window.___failedResources &&
                              (console.log(
                                "resources failed, SW updated - reloading"
                              ),
                              window.location.reload()))
                          : (console.log("Content is now available offline!"),
                            (0, r.h)("onServiceWorkerInstalled", {
                              serviceWorker: t,
                            }))
                        break
                      case "redundant":
                        console.error(
                          "The installing service worker became redundant."
                        ),
                          (0, r.h)("onServiceWorkerRedundant", {
                            serviceWorker: t,
                          })
                        break
                      case "activated":
                        ;(0, r.h)("onServiceWorkerActive", { serviceWorker: t })
                    }
                  })
              })
            })
            .catch(function (t) {
              console.error("Error during service worker registration:", t)
            })
    },
    1578: function (t, e, n) {
      "use strict"
      function r(t, e) {
        return (
          void 0 === e && (e = ""),
          e
            ? t === e
              ? "/"
              : t.startsWith(e + "/")
              ? t.slice(e.length)
              : t
            : t
        )
      }
      n.d(e, {
        Z: function () {
          return r
        },
      })
    },
    9037: function () {},
    9478: function (t, e, n) {
      var r = n(4694).config
      e.onClientEntry = function () {
        r.autoAddCss = !1
      }
    },
    6125: function (t, e, n) {
      "use strict"
      n.d(e, {
        L: function () {
          return b
        },
        M: function () {
          return j
        },
        P: function () {
          return S
        },
        S: function () {
          return T
        },
        _: function () {
          return u
        },
        a: function () {
          return s
        },
        b: function () {
          return h
        },
        c: function () {
          return F
        },
        g: function () {
          return g
        },
      })
      var r = n(7294),
        o = (n(4041), n(1224), n(5697)),
        a = n.n(o),
        i = n(3935)
      function s() {
        return (
          (s =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
              }
              return t
            }),
          s.apply(this, arguments)
        )
      }
      function c(t, e) {
        return (
          (c =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t
            }),
          c(t, e)
        )
      }
      function u(t, e) {
        if (null == t) return {}
        var n,
          r,
          o = {},
          a = Object.keys(t)
        for (r = 0; r < a.length; r++)
          e.indexOf((n = a[r])) >= 0 || (o[n] = t[n])
        return o
      }
      var l = new Set(),
        f = function () {
          return (
            "undefined" != typeof HTMLImageElement &&
            "loading" in HTMLImageElement.prototype
          )
        }
      function p(t) {
        t && l.add(t)
      }
      function d(t) {
        return l.has(t)
      }
      function h(t, e, r, o, a, i, c, u) {
        var l, f
        return (
          void 0 === u && (u = {}),
          null != c &&
            c.current &&
            !("objectFit" in document.documentElement.style) &&
            ((c.current.dataset.objectFit =
              null != (l = u.objectFit) ? l : "cover"),
            (c.current.dataset.objectPosition =
              "" + (null != (f = u.objectPosition) ? f : "50% 50%")),
            (function (t) {
              try {
                var e = function () {
                    window.objectFitPolyfill(t.current)
                  },
                  r = (function () {
                    if (!("objectFitPolyfill" in window))
                      return Promise.resolve(
                        n.e(231).then(n.t.bind(n, 7231, 23))
                      ).then(function () {})
                  })()
                Promise.resolve(r && r.then ? r.then(e) : e())
              } catch (t) {
                return Promise.reject(t)
              }
            })(c)),
          s({}, r, {
            loading: o,
            shouldLoad: t,
            "data-main-image": "",
            style: s({}, u, { opacity: e ? 1 : 0 }),
            onLoad: function (t) {
              if (!e) {
                p(i)
                var n = t.currentTarget,
                  r = new Image()
                ;(r.src = n.currentSrc),
                  r.decode
                    ? r
                        .decode()
                        .catch(function () {})
                        .then(function () {
                          a(!0)
                        })
                    : a(!0)
              }
            },
            ref: c,
          })
        )
      }
      function g(t, e, n, r, o, a, i, c) {
        var u = {}
        a &&
          ((u.backgroundColor = a),
          "fixed" === n
            ? ((u.width = r),
              (u.height = o),
              (u.backgroundColor = a),
              (u.position = "relative"))
            : ("constrained" === n || "fullWidth" === n) &&
              ((u.position = "absolute"),
              (u.top = 0),
              (u.left = 0),
              (u.bottom = 0),
              (u.right = 0))),
          i && (u.objectFit = i),
          c && (u.objectPosition = c)
        var l = s({}, t, {
          "aria-hidden": !0,
          "data-placeholder-image": "",
          style: s(
            { opacity: e ? 0 : 1, transition: "opacity 500ms linear" },
            u
          ),
        })
        return l
      }
      var v,
        m = ["children"],
        y = function (t) {
          var e = t.layout,
            n = t.width,
            o = t.height
          return "fullWidth" === e
            ? r.createElement("div", {
                "aria-hidden": !0,
                style: { paddingTop: (o / n) * 100 + "%" },
              })
            : "constrained" === e
            ? r.createElement(
                "div",
                { style: { maxWidth: n, display: "block" } },
                r.createElement("img", {
                  alt: "",
                  role: "presentation",
                  "aria-hidden": "true",
                  src:
                    "data:image/svg+xml;charset=utf-8,%3Csvg height='" +
                    o +
                    "' width='" +
                    n +
                    "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
                  style: {
                    maxWidth: "100%",
                    display: "block",
                    position: "static",
                  },
                })
              )
            : null
        },
        b = function (t) {
          var e = t.children,
            n = u(t, m)
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(y, s({}, n)),
            e,
            !1
          )
        },
        w = ["src", "srcSet", "loading", "alt", "shouldLoad", "innerRef"],
        x = ["fallback", "sources", "shouldLoad"],
        O = function (t) {
          var e = t.src,
            n = t.srcSet,
            o = t.loading,
            a = t.alt,
            i = void 0 === a ? "" : a,
            c = t.shouldLoad,
            l = t.innerRef,
            f = u(t, w)
          return r.createElement(
            "img",
            s({}, f, {
              decoding: "async",
              loading: o,
              src: c ? e : void 0,
              "data-src": c ? void 0 : e,
              srcSet: c ? n : void 0,
              "data-srcset": c ? void 0 : n,
              alt: i,
              ref: l,
            })
          )
        },
        k = (0, r.forwardRef)(function (t, e) {
          var n = t.fallback,
            o = t.sources,
            a = void 0 === o ? [] : o,
            i = t.shouldLoad,
            c = void 0 === i || i,
            l = u(t, x),
            f = l.sizes || (null == n ? void 0 : n.sizes),
            p = r.createElement(
              O,
              s({}, l, n, { sizes: f, shouldLoad: c, innerRef: e })
            )
          return a.length
            ? r.createElement(
                "picture",
                null,
                a.map(function (t) {
                  var e = t.media,
                    n = t.srcSet,
                    o = t.type
                  return r.createElement("source", {
                    key: e + "-" + o + "-" + n,
                    type: o,
                    media: e,
                    srcSet: c ? n : void 0,
                    "data-srcset": c ? void 0 : n,
                    sizes: f,
                  })
                }),
                p
              )
            : p
        })
      ;(O.propTypes = {
        src: o.string.isRequired,
        alt: o.string.isRequired,
        sizes: o.string,
        srcSet: o.string,
        shouldLoad: o.bool,
      }),
        (k.displayName = "Picture"),
        (k.propTypes = {
          alt: o.string.isRequired,
          shouldLoad: o.bool,
          fallback: o.exact({
            src: o.string.isRequired,
            srcSet: o.string,
            sizes: o.string,
          }),
          sources: o.arrayOf(
            o.oneOfType([
              o.exact({
                media: o.string.isRequired,
                type: o.string,
                sizes: o.string,
                srcSet: o.string.isRequired,
              }),
              o.exact({
                media: o.string,
                type: o.string.isRequired,
                sizes: o.string,
                srcSet: o.string.isRequired,
              }),
            ])
          ),
        })
      var P = ["fallback"],
        S = function (t) {
          var e = t.fallback,
            n = u(t, P)
          return e
            ? r.createElement(
                k,
                s({}, n, { fallback: { src: e }, "aria-hidden": !0, alt: "" })
              )
            : r.createElement("div", s({}, n))
        }
      ;(S.displayName = "Placeholder"),
        (S.propTypes = {
          fallback: o.string,
          sources: null == (v = k.propTypes) ? void 0 : v.sources,
          alt: function (t, e, n) {
            return t[e]
              ? new Error(
                  "Invalid prop `" +
                    e +
                    "` supplied to `" +
                    n +
                    "`. Validation failed."
                )
              : null
          },
        })
      var j = (0, r.forwardRef)(function (t, e) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(k, s({ ref: e }, t)),
          r.createElement(
            "noscript",
            null,
            r.createElement(k, s({}, t, { shouldLoad: !0 }))
          )
        )
      })
      ;(j.displayName = "MainImage"), (j.propTypes = k.propTypes)
      var E = function (t, e, n) {
          return t.alt || "" === t.alt
            ? a().string.apply(
                a(),
                [t, e, n].concat([].slice.call(arguments, 3))
              )
            : new Error(
                'The "alt" prop is required in ' +
                  n +
                  '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html'
              )
        },
        R = { image: a().object.isRequired, alt: E },
        _ = ["style", "className"],
        C = (function (t) {
          var e, o
          function a(e) {
            var n
            return (
              ((n = t.call(this, e) || this).root = (0, r.createRef)()),
              (n.hydrated = { current: !1 }),
              (n.forceRender = { current: !1 }),
              (n.lazyHydrator = null),
              (n.ref = (0, r.createRef)()),
              (n.unobserveRef = void 0),
              (n.state = { isLoading: f(), isLoaded: !1 }),
              n
            )
          }
          ;(o = t),
            ((e = a).prototype = Object.create(o.prototype)),
            (e.prototype.constructor = e),
            c(e, o)
          var l = a.prototype
          return (
            (l._lazyHydrate = function (t, e) {
              var r = this,
                o = this.root.current.querySelector("[data-gatsby-image-ssr]")
              return f() && o && !this.hydrated.current
                ? ((this.hydrated.current = !0), Promise.resolve())
                : n
                    .e(503)
                    .then(n.bind(n, 9503))
                    .then(function (n) {
                      var o = n.lazyHydrate,
                        a = JSON.stringify(r.props.image.images)
                      r.lazyHydrator = o(
                        s(
                          {
                            image: t.image.images,
                            isLoading: e.isLoading || d(a),
                            isLoaded: e.isLoaded || d(a),
                            toggleIsLoaded: function () {
                              null == t.onLoad || t.onLoad(),
                                r.setState({ isLoaded: !0 })
                            },
                            ref: r.ref,
                          },
                          t
                        ),
                        r.root,
                        r.hydrated,
                        r.forceRender
                      )
                    })
            }),
            (l._setupIntersectionObserver = function (t) {
              var e = this
              void 0 === t && (t = !0),
                n
                  .e(175)
                  .then(n.bind(n, 7175))
                  .then(function (n) {
                    var r = (0, n.createIntersectionObserver)(function () {
                      if (e.root.current) {
                        var n = JSON.stringify(e.props.image.images)
                        null == e.props.onStartLoad ||
                          e.props.onStartLoad({ wasCached: t && d(n) }),
                          e.setState({ isLoading: !0, isLoaded: t && d(n) })
                      }
                    })
                    e.root.current && (e.unobserveRef = r(e.root))
                  })
            }),
            (l.shouldComponentUpdate = function (t, e) {
              var n = this,
                r = !1
              return (
                this.state.isLoading ||
                  !e.isLoading ||
                  e.isLoaded ||
                  (this.forceRender.current = !0),
                this.props.image.images !== t.image.images &&
                  (this.unobserveRef &&
                    (this.unobserveRef(),
                    this.hydrated.current &&
                      this.lazyHydrator &&
                      (0, i.render)(null, this.root.current)),
                  this.setState({ isLoading: !1, isLoaded: !1 }, function () {
                    n._setupIntersectionObserver(!1)
                  }),
                  (r = !0)),
                this.root.current && !r && this._lazyHydrate(t, e),
                !1
              )
            }),
            (l.componentDidMount = function () {
              if (this.root.current) {
                var t = this.root.current.querySelector(
                    "[data-gatsby-image-ssr]"
                  ),
                  e = JSON.stringify(this.props.image.images)
                if (f() && t) {
                  var n, r
                  if (
                    (null == (n = (r = this.props).onStartLoad) ||
                      n.call(r, { wasCached: !1 }),
                    t.complete)
                  ) {
                    var o, a
                    null == (o = (a = this.props).onLoad) || o.call(a), p(e)
                  } else {
                    var i = this
                    t.addEventListener("load", function n() {
                      t.removeEventListener("load", n),
                        null == i.props.onLoad || i.props.onLoad(),
                        p(e)
                    })
                  }
                  return
                }
                this._setupIntersectionObserver(!0)
              }
            }),
            (l.componentWillUnmount = function () {
              this.unobserveRef &&
                (this.unobserveRef(),
                this.hydrated.current &&
                  this.lazyHydrator &&
                  this.lazyHydrator())
            }),
            (l.render = function () {
              var t = this.props.as || "div",
                e = this.props.image,
                n = e.width,
                o = e.height,
                a = e.layout,
                i = (function (t, e, n) {
                  var r = {},
                    o = "gatsby-image-wrapper"
                  return (
                    "fixed" === n
                      ? ((r.width = t), (r.height = e))
                      : "constrained" === n &&
                        (o =
                          "gatsby-image-wrapper gatsby-image-wrapper-constrained"),
                    { className: o, "data-gatsby-image-wrapper": "", style: r }
                  )
                })(n, o, a),
                c = i.style,
                l = i.className,
                f = u(i, _),
                p = this.props.className
              this.props.class && (p = this.props.class)
              var d = (function (t, e, n) {
                var r = null
                return (
                  "fullWidth" === t &&
                    (r =
                      '<div aria-hidden="true" style="padding-top: ' +
                      (n / e) * 100 +
                      '%;"></div>'),
                  "constrained" === t &&
                    (r =
                      '<div style="max-width: ' +
                      e +
                      'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\'' +
                      n +
                      "' width='" +
                      e +
                      "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),
                  r
                )
              })(a, n, o)
              return r.createElement(
                t,
                s({}, f, {
                  style: s({}, c, this.props.style, {
                    backgroundColor: this.props.backgroundColor,
                  }),
                  className: l + (p ? " " + p : ""),
                  ref: this.root,
                  dangerouslySetInnerHTML: { __html: d },
                  suppressHydrationWarning: !0,
                })
              )
            }),
            a
          )
        })(r.Component),
        L = function (t) {
          if (!t.image) return null
          var e = t.image,
            n = JSON.stringify([
              e.width,
              e.height,
              e.layout,
              t.className,
              t.class,
              t.backgroundColor,
            ])
          return r.createElement(C, s({ key: n }, t))
        }
      ;(L.propTypes = R), (L.displayName = "GatsbyImage")
      var N,
        A = [
          "src",
          "__imageData",
          "__error",
          "width",
          "height",
          "aspectRatio",
          "tracedSVGOptions",
          "placeholder",
          "formats",
          "quality",
          "transformOptions",
          "jpgOptions",
          "pngOptions",
          "webpOptions",
          "avifOptions",
          "blurredOptions",
        ],
        D = function (t, e) {
          return "fullWidth" !== t.layout ||
            ("width" !== e && "height" !== e) ||
            !t[e]
            ? a().number.apply(a(), [t, e].concat([].slice.call(arguments, 2)))
            : new Error(
                '"' +
                  e +
                  '" ' +
                  t[e] +
                  " may not be passed when layout is fullWidth."
              )
        },
        I = new Set(["fixed", "fullWidth", "constrained"]),
        M = {
          src: a().string.isRequired,
          alt: E,
          width: D,
          height: D,
          sizes: a().string,
          layout: function (t) {
            if (void 0 !== t.layout && !I.has(t.layout))
              return new Error(
                "Invalid value " +
                  t.layout +
                  '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".'
              )
          },
        },
        T =
          ((N = L),
          function (t) {
            var e = t.src,
              n = t.__imageData,
              o = t.__error,
              a = u(t, A)
            return (
              o && console.warn(o),
              n
                ? r.createElement(N, s({ image: n }, a))
                : (console.warn("Image not loaded", e), null)
            )
          })
      function F(t) {
        var e = t.children
        return (
          r.useEffect(function () {
            n.e(503).then(n.bind(n, 9503))
          }, []),
          e
        )
      }
      ;(T.displayName = "StaticImage"), (T.propTypes = M)
    },
    6988: function (t, e, n) {
      "use strict"
      n.r(e),
        n.d(e, {
          wrapRootElement: function () {
            return a
          },
        })
      var r = n(7294),
        o = n(6125)
      function a(t) {
        var e = t.element
        return r.createElement(o.c, null, e)
      }
    },
    1224: function (t) {
      "use strict"
      var e = function (t, e) {
        if ("string" != typeof t && !Array.isArray(t))
          throw new TypeError("Expected the input to be `string | string[]`")
        e = Object.assign({ pascalCase: !1 }, e)
        var n
        return (
          (t = Array.isArray(t)
            ? t
                .map(function (t) {
                  return t.trim()
                })
                .filter(function (t) {
                  return t.length
                })
                .join("-")
            : t.trim()),
          0 === t.length
            ? ""
            : 1 === t.length
            ? e.pascalCase
              ? t.toUpperCase()
              : t.toLowerCase()
            : (t !== t.toLowerCase() &&
                (t = (function (t) {
                  for (var e = !1, n = !1, r = !1, o = 0; o < t.length; o++) {
                    var a = t[o]
                    e && /[a-zA-Z]/.test(a) && a.toUpperCase() === a
                      ? ((t = t.slice(0, o) + "-" + t.slice(o)),
                        (e = !1),
                        (r = n),
                        (n = !0),
                        o++)
                      : n && r && /[a-zA-Z]/.test(a) && a.toLowerCase() === a
                      ? ((t = t.slice(0, o - 1) + "-" + t.slice(o - 1)),
                        (r = n),
                        (n = !1),
                        (e = !0))
                      : ((e = a.toLowerCase() === a && a.toUpperCase() !== a),
                        (r = n),
                        (n = a.toUpperCase() === a && a.toLowerCase() !== a))
                  }
                  return t
                })(t)),
              (t = t
                .replace(/^[_.\- ]+/, "")
                .toLowerCase()
                .replace(/[_.\- ]+(\w|$)/g, function (t, e) {
                  return e.toUpperCase()
                })
                .replace(/\d+(\w|$)/g, function (t) {
                  return t.toUpperCase()
                })),
              (n = t),
              e.pascalCase ? n.charAt(0).toUpperCase() + n.slice(1) : n)
        )
      }
      ;(t.exports = e), (t.exports.default = e)
    },
    992: function (t, e, n) {
      "use strict"
      var r = n(5318)
      n(5444), r(n(1632))
    },
    1632: function (t, e, n) {
      "use strict"
      ;(e.__esModule = !0), (e.default = void 0)
      var r = n(5444)
      e.default = function (t, e, n) {
        void 0 === n && (n = !1)
        var o = "manifest.webmanifest"
        if (!Array.isArray(e)) return o
        var a = e.find(function (e) {
          var o = e.start_url
          return n && (o = (0, r.withPrefix)(o)), t.startsWith(o)
        })
        return a ? "manifest_" + a.lang + ".webmanifest" : o
      }
    },
    9604: function (t, e, n) {
      "use strict"
      var r = n(5318)
      ;(e.__esModule = !0), (e.I18nextContext = void 0)
      var o = r(n(7294)).default.createContext({
        language: "en",
        languages: ["en"],
        routed: !1,
        defaultLanguage: "en",
        generateDefaultLanguagePage: !1,
        originalPath: "/",
        path: "/",
      })
      e.I18nextContext = o
    },
    2094: function (t, e, n) {
      "use strict"
      var r = n(5318)
      ;(e.__esModule = !0), (e.wrapPageElement = void 0)
      var o = r(n(7154)),
        a = (r(n(5179)), r(n(7294))),
        i = n(5444),
        s = r(n(9771)),
        c = n(8742),
        u = r(n(6678)),
        l = n(1421),
        f = n(9604)
      r(n(8003))
      e.wrapPageElement = function (t, e) {
        var n,
          r = t.element,
          p = t.props,
          d = e.i18nextOptions,
          h = void 0 === d ? {} : d,
          g = e.redirect,
          v = void 0 === g || g,
          m = e.generateDefaultLanguagePage,
          y = void 0 !== m && m,
          b = e.siteUrl,
          w = e.localeJsonNodeName,
          x = void 0 === w ? "locales" : w,
          O = e.fallbackLanguage
        if (p) {
          var k,
            P,
            S = p.data,
            j = p.pageContext,
            E = p.location,
            R = j.i18n,
            _ = R.routed,
            C = R.language,
            L = R.languages,
            N = R.originalPath,
            A = R.defaultLanguage,
            D = R.path
          if (v && !_) {
            var I = E.search
            if ("undefined" != typeof window) {
              var M =
                window.localStorage.getItem(c.LANGUAGE_KEY) ||
                (0, s.default)({ languages: L, fallback: O || C })
              if (
                (L.includes(M) || (M = C),
                window.localStorage.setItem(c.LANGUAGE_KEY, M),
                M !== A)
              ) {
                var T = I || "",
                  F = (0, i.withPrefix)(
                    "/" +
                      M +
                      ((k = E.pathname),
                      (P = (0, i.withPrefix)("/")),
                      k.startsWith(P) ? k.replace(P, "/") : k) +
                      T +
                      E.hash
                  )
                return window.___replace(F), null
              }
            }
          }
          var U =
            (null == S || null === (n = S[x]) || void 0 === n
              ? void 0
              : n.edges) || []
          L.length > 1 && U.length, 0
          var z = U.map(function (t) {
              return t.node.ns
            }),
            W = h.defaultNS || "translation"
          W =
            z.find(function (t) {
              return t !== W
            }) || W
          var H = z.filter(function (t) {
              return t !== W
            }),
            q = U.reduce(function (t, e) {
              var n = e.node,
                r = JSON.parse(n.data)
              return (
                n.language in t || (t[n.language] = {}),
                (t[n.language][n.ns] = r),
                t
              )
            }, {}),
            V = u.default.createInstance()
          return (
            V.init(
              (0, o.default)({}, h, {
                resources: q,
                lng: C,
                fallbackLng: A,
                defaultNS: W,
                fallbackNS: H,
                react: { useSuspense: !1 },
              })
            ),
            V.language !== C && V.changeLanguage(C),
            (function (t, e) {
              return function (n) {
                return a.default.createElement(
                  l.I18nextProvider,
                  { i18n: t },
                  a.default.createElement(
                    f.I18nextContext.Provider,
                    { value: e },
                    n
                  )
                )
              }
            })(V, {
              routed: _,
              language: C,
              languages: L,
              originalPath: N,
              defaultLanguage: A,
              generateDefaultLanguagePage: y,
              siteUrl: b,
              path: D,
            })(r)
          )
        }
      }
    },
    8742: function (t, e) {
      "use strict"
      ;(e.__esModule = !0), (e.LANGUAGE_KEY = void 0)
      e.LANGUAGE_KEY = "gatsby-i18next-language"
    },
    733: function (t, e, n) {
      var r = n(2094).wrapPageElement
      e.wrapPageElement = r
    },
    9499: function (t, e, n) {
      "use strict"
      n.r(e),
        n.d(e, {
          BaseContext: function () {
            return T
          },
          Link: function () {
            return J
          },
          Location: function () {
            return D
          },
          LocationProvider: function () {
            return I
          },
          Match: function () {
            return X
          },
          Redirect: function () {
            return $
          },
          Router: function () {
            return F
          },
          ServerLocation: function () {
            return M
          },
          createHistory: function () {
            return O
          },
          createMemorySource: function () {
            return k
          },
          globalHistory: function () {
            return S
          },
          isRedirect: function () {
            return Y
          },
          matchPath: function () {
            return u
          },
          navigate: function () {
            return j
          },
          redirectTo: function () {
            return G
          },
          useLocation: function () {
            return tt
          },
          useMatch: function () {
            return rt
          },
          useNavigate: function () {
            return et
          },
          useParams: function () {
            return nt
          },
        })
      var r = n(7294),
        o = n(1143),
        a = n.n(o),
        i = n(3639),
        s = function (t, e) {
          return t.substr(0, e.length) === e
        },
        c = function (t, e) {
          for (
            var n = void 0,
              r = void 0,
              o = e.split("?")[0],
              i = m(o),
              s = "" === i[0],
              c = v(t),
              u = 0,
              l = c.length;
            u < l;
            u++
          ) {
            var f = !1,
              d = c[u].route
            if (d.default) r = { route: d, params: {}, uri: e }
            else {
              for (
                var g = m(d.path),
                  y = {},
                  w = Math.max(i.length, g.length),
                  x = 0;
                x < w;
                x++
              ) {
                var O = g[x],
                  k = i[x]
                if (h(O)) {
                  y[O.slice(1) || "*"] = i
                    .slice(x)
                    .map(decodeURIComponent)
                    .join("/")
                  break
                }
                if (void 0 === k) {
                  f = !0
                  break
                }
                var P = p.exec(O)
                if (P && !s) {
                  ;-1 === b.indexOf(P[1]) || a()(!1)
                  var S = decodeURIComponent(k)
                  y[P[1]] = S
                } else if (O !== k) {
                  f = !0
                  break
                }
              }
              if (!f) {
                n = { route: d, params: y, uri: "/" + i.slice(0, x).join("/") }
                break
              }
            }
          }
          return n || r || null
        },
        u = function (t, e) {
          return c([{ path: t }], e)
        },
        l = function (t, e) {
          if (s(t, "/")) return t
          var n = t.split("?"),
            r = n[0],
            o = n[1],
            a = e.split("?")[0],
            i = m(r),
            c = m(a)
          if ("" === i[0]) return y(a, o)
          if (!s(i[0], ".")) {
            var u = c.concat(i).join("/")
            return y(("/" === a ? "" : "/") + u, o)
          }
          for (var l = c.concat(i), f = [], p = 0, d = l.length; p < d; p++) {
            var h = l[p]
            ".." === h ? f.pop() : "." !== h && f.push(h)
          }
          return y("/" + f.join("/"), o)
        },
        f = function (t, e) {
          var n = t.split("?"),
            r = n[0],
            o = n[1],
            a = void 0 === o ? "" : o,
            i =
              "/" +
              m(r)
                .map(function (t) {
                  var n = p.exec(t)
                  return n ? e[n[1]] : t
                })
                .join("/"),
            s = e.location,
            c = (s = void 0 === s ? {} : s).search,
            u = (void 0 === c ? "" : c).split("?")[1] || ""
          return (i = y(i, a, u))
        },
        p = /^:(.+)/,
        d = function (t) {
          return p.test(t)
        },
        h = function (t) {
          return t && "*" === t[0]
        },
        g = function (t, e) {
          return {
            route: t,
            score: t.default
              ? 0
              : m(t.path).reduce(function (t, e) {
                  return (
                    (t += 4),
                    !(function (t) {
                      return "" === t
                    })(e)
                      ? d(e)
                        ? (t += 2)
                        : h(e)
                        ? (t -= 5)
                        : (t += 3)
                      : (t += 1),
                    t
                  )
                }, 0),
            index: e,
          }
        },
        v = function (t) {
          return t.map(g).sort(function (t, e) {
            return t.score < e.score
              ? 1
              : t.score > e.score
              ? -1
              : t.index - e.index
          })
        },
        m = function (t) {
          return t.replace(/(^\/+|\/+$)/g, "").split("/")
        },
        y = function (t) {
          for (
            var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r]
          return (
            t +
            ((n = n.filter(function (t) {
              return t && t.length > 0
            })) && n.length > 0
              ? "?" + n.join("&")
              : "")
          )
        },
        b = ["uri", "path"],
        w =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
          },
        x = function (t) {
          var e = t.location,
            n = e.search,
            r = e.hash,
            o = e.href,
            a = e.origin,
            i = e.protocol,
            s = e.host,
            c = e.hostname,
            u = e.port,
            l = t.location.pathname
          !l && o && P && (l = new URL(o).pathname)
          return {
            pathname: encodeURI(decodeURI(l)),
            search: n,
            hash: r,
            href: o,
            origin: a,
            protocol: i,
            host: s,
            hostname: c,
            port: u,
            state: t.history.state,
            key: (t.history.state && t.history.state.key) || "initial",
          }
        },
        O = function (t, e) {
          var n = [],
            r = x(t),
            o = !1,
            a = function () {}
          return {
            get location() {
              return r
            },
            get transitioning() {
              return o
            },
            _onTransitionComplete: function () {
              ;(o = !1), a()
            },
            listen: function (e) {
              n.push(e)
              var o = function () {
                ;(r = x(t)), e({ location: r, action: "POP" })
              }
              return (
                t.addEventListener("popstate", o),
                function () {
                  t.removeEventListener("popstate", o),
                    (n = n.filter(function (t) {
                      return t !== e
                    }))
                }
              )
            },
            navigate: function (e) {
              var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                s = i.state,
                c = i.replace,
                u = void 0 !== c && c
              if ("number" == typeof e) t.history.go(e)
              else {
                s = w({}, s, { key: Date.now() + "" })
                try {
                  o || u
                    ? t.history.replaceState(s, null, e)
                    : t.history.pushState(s, null, e)
                } catch (f) {
                  t.location[u ? "replace" : "assign"](e)
                }
              }
              ;(r = x(t)), (o = !0)
              var l = new Promise(function (t) {
                return (a = t)
              })
              return (
                n.forEach(function (t) {
                  return t({ location: r, action: "PUSH" })
                }),
                l
              )
            },
          }
        },
        k = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            e = t.indexOf("?"),
            n = {
              pathname: e > -1 ? t.substr(0, e) : t,
              search: e > -1 ? t.substr(e) : "",
            },
            r = 0,
            o = [n],
            a = [null]
          return {
            get location() {
              return o[r]
            },
            addEventListener: function (t, e) {},
            removeEventListener: function (t, e) {},
            history: {
              get entries() {
                return o
              },
              get index() {
                return r
              },
              get state() {
                return a[r]
              },
              pushState: function (t, e, n) {
                var i = n.split("?"),
                  s = i[0],
                  c = i[1],
                  u = void 0 === c ? "" : c
                r++,
                  o.push({ pathname: s, search: u.length ? "?" + u : u }),
                  a.push(t)
              },
              replaceState: function (t, e, n) {
                var i = n.split("?"),
                  s = i[0],
                  c = i[1],
                  u = void 0 === c ? "" : c
                ;(o[r] = { pathname: s, search: u }), (a[r] = t)
              },
              go: function (t) {
                var e = r + t
                e < 0 || e > a.length - 1 || (r = e)
              },
            },
          }
        },
        P = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        S = O(P ? window : k()),
        j = S.navigate,
        E =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
          }
      function R(t, e) {
        var n = {}
        for (var r in t)
          e.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]))
        return n
      }
      function _(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function")
      }
      function C(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e
      }
      function L(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          )
        ;(t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e))
      }
      var N = function (t, e) {
          var n = (0, r.createContext)(e)
          return (n.displayName = t), n
        },
        A = N("Location"),
        D = function (t) {
          var e = t.children
          return r.createElement(A.Consumer, null, function (t) {
            return t ? e(t) : r.createElement(I, null, e)
          })
        },
        I = (function (t) {
          function e() {
            var n, r
            _(this, e)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i]
            return (
              (n = r = C(this, t.call.apply(t, [this].concat(a)))),
              (r.state = { context: r.getContext(), refs: { unlisten: null } }),
              C(r, n)
            )
          }
          return (
            L(e, t),
            (e.prototype.getContext = function () {
              var t = this.props.history
              return { navigate: t.navigate, location: t.location }
            }),
            (e.prototype.componentDidCatch = function (t, e) {
              if (!Y(t)) throw t
              ;(0, this.props.history.navigate)(t.uri, { replace: !0 })
            }),
            (e.prototype.componentDidUpdate = function (t, e) {
              e.context.location !== this.state.context.location &&
                this.props.history._onTransitionComplete()
            }),
            (e.prototype.componentDidMount = function () {
              var t = this,
                e = this.state.refs,
                n = this.props.history
              n._onTransitionComplete(),
                (e.unlisten = n.listen(function () {
                  Promise.resolve().then(function () {
                    requestAnimationFrame(function () {
                      t.unmounted ||
                        t.setState(function () {
                          return { context: t.getContext() }
                        })
                    })
                  })
                }))
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this.state.refs
              ;(this.unmounted = !0), t.unlisten()
            }),
            (e.prototype.render = function () {
              var t = this.state.context,
                e = this.props.children
              return r.createElement(
                A.Provider,
                { value: t },
                "function" == typeof e ? e(t) : e || null
              )
            }),
            e
          )
        })(r.Component)
      I.defaultProps = { history: S }
      var M = function (t) {
          var e = t.url,
            n = t.children,
            o = e.indexOf("?"),
            a = void 0,
            i = ""
          return (
            o > -1 ? ((a = e.substring(0, o)), (i = e.substring(o))) : (a = e),
            r.createElement(
              A.Provider,
              {
                value: {
                  location: { pathname: a, search: i, hash: "" },
                  navigate: function () {
                    throw new Error("You can't call navigate on the server.")
                  },
                },
              },
              n
            )
          )
        },
        T = N("Base", { baseuri: "/", basepath: "/", navigate: S.navigate }),
        F = function (t) {
          return r.createElement(T.Consumer, null, function (e) {
            return r.createElement(D, null, function (n) {
              return r.createElement(U, E({}, e, n, t))
            })
          })
        },
        U = (function (t) {
          function e() {
            return _(this, e), C(this, t.apply(this, arguments))
          }
          return (
            L(e, t),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.location,
                n = t.navigate,
                o = t.basepath,
                a = t.primary,
                i = t.children,
                s = (t.baseuri, t.component),
                u = void 0 === s ? "div" : s,
                f = R(t, [
                  "location",
                  "navigate",
                  "basepath",
                  "primary",
                  "children",
                  "baseuri",
                  "component",
                ]),
                p = r.Children.toArray(i).reduce(function (t, e) {
                  var n = at(o)(e)
                  return t.concat(n)
                }, []),
                d = e.pathname,
                h = c(p, d)
              if (h) {
                var g = h.params,
                  v = h.uri,
                  m = h.route,
                  y = h.route.value
                o = m.default ? o : m.path.replace(/\*$/, "")
                var b = E({}, g, {
                    uri: v,
                    location: e,
                    navigate: function (t, e) {
                      return n(l(t, v), e)
                    },
                  }),
                  w = r.cloneElement(
                    y,
                    b,
                    y.props.children
                      ? r.createElement(
                          F,
                          { location: e, primary: a },
                          y.props.children
                        )
                      : void 0
                  ),
                  x = a ? W : u,
                  O = a ? E({ uri: v, location: e, component: u }, f) : f
                return r.createElement(
                  T.Provider,
                  { value: { baseuri: v, basepath: o, navigate: b.navigate } },
                  r.createElement(x, O, w)
                )
              }
              return null
            }),
            e
          )
        })(r.PureComponent)
      U.defaultProps = { primary: !0 }
      var z = N("Focus"),
        W = function (t) {
          var e = t.uri,
            n = t.location,
            o = t.component,
            a = R(t, ["uri", "location", "component"])
          return r.createElement(z.Consumer, null, function (t) {
            return r.createElement(
              V,
              E({}, a, { component: o, requestFocus: t, uri: e, location: n })
            )
          })
        },
        H = !0,
        q = 0,
        V = (function (t) {
          function e() {
            var n, r
            _(this, e)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i]
            return (
              (n = r = C(this, t.call.apply(t, [this].concat(a)))),
              (r.state = {}),
              (r.requestFocus = function (t) {
                !r.state.shouldFocus && t && t.focus()
              }),
              C(r, n)
            )
          }
          return (
            L(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              if (null == e.uri) return E({ shouldFocus: !0 }, t)
              var n = t.uri !== e.uri,
                r =
                  e.location.pathname !== t.location.pathname &&
                  t.location.pathname === t.uri
              return E({ shouldFocus: n || r }, t)
            }),
            (e.prototype.componentDidMount = function () {
              q++, this.focus()
            }),
            (e.prototype.componentWillUnmount = function () {
              0 === --q && (H = !0)
            }),
            (e.prototype.componentDidUpdate = function (t, e) {
              t.location !== this.props.location &&
                this.state.shouldFocus &&
                this.focus()
            }),
            (e.prototype.focus = function () {
              var t = this.props.requestFocus
              t
                ? t(this.node)
                : H
                ? (H = !1)
                : this.node &&
                  (this.node.contains(document.activeElement) ||
                    this.node.focus())
            }),
            (e.prototype.render = function () {
              var t = this,
                e = this.props,
                n = (e.children, e.style),
                o = (e.requestFocus, e.component),
                a = void 0 === o ? "div" : o,
                i =
                  (e.uri,
                  e.location,
                  R(e, [
                    "children",
                    "style",
                    "requestFocus",
                    "component",
                    "uri",
                    "location",
                  ]))
              return r.createElement(
                a,
                E(
                  {
                    style: E({ outline: "none" }, n),
                    tabIndex: "-1",
                    ref: function (e) {
                      return (t.node = e)
                    },
                  },
                  i
                ),
                r.createElement(
                  z.Provider,
                  { value: this.requestFocus },
                  this.props.children
                )
              )
            }),
            e
          )
        })(r.Component)
      ;(0, i.O)(V)
      var B = function () {},
        K = r.forwardRef
      void 0 === K &&
        (K = function (t) {
          return t
        })
      var J = K(function (t, e) {
        var n = t.innerRef,
          o = R(t, ["innerRef"])
        return r.createElement(T.Consumer, null, function (t) {
          t.basepath
          var a = t.baseuri
          return r.createElement(D, null, function (t) {
            var i = t.location,
              c = t.navigate,
              u = o.to,
              f = o.state,
              p = o.replace,
              d = o.getProps,
              h = void 0 === d ? B : d,
              g = R(o, ["to", "state", "replace", "getProps"]),
              v = l(u, a),
              m = encodeURI(v),
              y = i.pathname === m,
              b = s(i.pathname, m)
            return r.createElement(
              "a",
              E(
                { ref: e || n, "aria-current": y ? "page" : void 0 },
                g,
                h({
                  isCurrent: y,
                  isPartiallyCurrent: b,
                  href: v,
                  location: i,
                }),
                {
                  href: v,
                  onClick: function (t) {
                    if ((g.onClick && g.onClick(t), it(t))) {
                      t.preventDefault()
                      var e = p
                      if ("boolean" != typeof p && y) {
                        var n = E({}, i.state),
                          r = (n.key, R(n, ["key"]))
                        ;(o = E({}, f)),
                          (a = r),
                          (e =
                            (s = Object.keys(o)).length ===
                              Object.keys(a).length &&
                            s.every(function (t) {
                              return a.hasOwnProperty(t) && o[t] === a[t]
                            }))
                      }
                      c(v, { state: f, replace: e })
                    }
                    var o, a, s
                  },
                }
              )
            )
          })
        })
      })
      function Q(t) {
        this.uri = t
      }
      J.displayName = "Link"
      var Y = function (t) {
          return t instanceof Q
        },
        G = function (t) {
          throw new Q(t)
        },
        Z = (function (t) {
          function e() {
            return _(this, e), C(this, t.apply(this, arguments))
          }
          return (
            L(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this.props,
                e = t.navigate,
                n = t.to,
                r = (t.from, t.replace),
                o = void 0 === r || r,
                a = t.state,
                i = (t.noThrow, t.baseuri),
                s = R(t, [
                  "navigate",
                  "to",
                  "from",
                  "replace",
                  "state",
                  "noThrow",
                  "baseuri",
                ])
              Promise.resolve().then(function () {
                var t = l(n, i)
                e(f(t, s), { replace: o, state: a })
              })
            }),
            (e.prototype.render = function () {
              var t = this.props,
                e = (t.navigate, t.to),
                n = (t.from, t.replace, t.state, t.noThrow),
                r = t.baseuri,
                o = R(t, [
                  "navigate",
                  "to",
                  "from",
                  "replace",
                  "state",
                  "noThrow",
                  "baseuri",
                ]),
                a = l(e, r)
              return n || G(f(a, o)), null
            }),
            e
          )
        })(r.Component),
        $ = function (t) {
          return r.createElement(T.Consumer, null, function (e) {
            var n = e.baseuri
            return r.createElement(D, null, function (e) {
              return r.createElement(Z, E({}, e, { baseuri: n }, t))
            })
          })
        },
        X = function (t) {
          var e = t.path,
            n = t.children
          return r.createElement(T.Consumer, null, function (t) {
            var o = t.baseuri
            return r.createElement(D, null, function (t) {
              var r = t.navigate,
                a = t.location,
                i = l(e, o),
                s = u(i, a.pathname)
              return n({
                navigate: r,
                location: a,
                match: s ? E({}, s.params, { uri: s.uri, path: e }) : null,
              })
            })
          })
        },
        tt = function () {
          var t = (0, r.useContext)(A)
          if (!t)
            throw new Error(
              "useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            )
          return t.location
        },
        et = function () {
          var t = (0, r.useContext)(T)
          if (!t)
            throw new Error(
              "useNavigate hook was used but a BaseContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            )
          return t.navigate
        },
        nt = function () {
          var t = (0, r.useContext)(T)
          if (!t)
            throw new Error(
              "useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            )
          var e = tt(),
            n = u(t.basepath, e.pathname)
          return n ? n.params : null
        },
        rt = function (t) {
          if (!t)
            throw new Error(
              "useMatch(path: string) requires an argument of a string to match against"
            )
          var e = (0, r.useContext)(T)
          if (!e)
            throw new Error(
              "useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            )
          var n = tt(),
            o = l(t, e.baseuri),
            a = u(o, n.pathname)
          return a ? E({}, a.params, { uri: a.uri, path: t }) : null
        },
        ot = function (t) {
          return t.replace(/(^\/+|\/+$)/g, "")
        },
        at = function t(e) {
          return function (n) {
            if (!n) return null
            if (n.type === r.Fragment && n.props.children)
              return r.Children.map(n.props.children, t(e))
            var o, i, s
            if (
              (n.props.path || n.props.default || n.type === $ || a()(!1),
              n.type !== $ || (n.props.from && n.props.to) || a()(!1),
              n.type === $ &&
                ((o = n.props.from),
                (i = n.props.to),
                (s = function (t) {
                  return d(t)
                }),
                m(o).filter(s).sort().join("/") !==
                  m(i).filter(s).sort().join("/")) &&
                a()(!1),
              n.props.default)
            )
              return { value: n, default: !0 }
            var c = n.type === $ ? n.props.from : n.props.path,
              u = "/" === c ? e : ot(e) + "/" + ot(c)
            return {
              value: n,
              default: n.props.default,
              path: n.props.children ? ot(u) + "/*" : u,
            }
          }
        },
        it = function (t) {
          return (
            !t.defaultPrevented &&
            0 === t.button &&
            !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
          )
        }
    },
    1143: function (t) {
      "use strict"
      t.exports = function (t, e, n, r, o, a, i, s) {
        if (!t) {
          var c
          if (void 0 === e)
            c = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            )
          else {
            var u = [n, r, o, a, i, s],
              l = 0
            ;(c = new Error(
              e.replace(/%s/g, function () {
                return u[l++]
              })
            )).name = "Invariant Violation"
          }
          throw ((c.framesToPop = 1), c)
        }
      }
    },
    1721: function (t, e, n) {
      "use strict"
      function r(t, e) {
        return (
          (r =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t
            }),
          r(t, e)
        )
      }
      function o(t, e) {
        ;(t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          r(t, e)
      }
      n.d(e, {
        Z: function () {
          return o
        },
      })
    },
  },
  function (t) {
    t.O(0, [774], function () {
      return (e = 9917), t((t.s = e))
      var e
    })
    t.O()
  },
])
//# sourceMappingURL=app-9a5f740bfa1a6497b1f0.js.map
