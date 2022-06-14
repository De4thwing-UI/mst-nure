"use strict"
;(self.webpackChunkgatsby_starter_default =
  self.webpackChunkgatsby_starter_default || []).push([
  [393],
  {
    4964: function (e, t) {
      var a = "envelope",
        r = [],
        n = "f0e0",
        c =
          "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
      ;(t.DF = { prefix: "fas", iconName: a, icon: [512, 512, r, n, c] }),
        (t.FU = t.DF)
    },
    6429: function (e, t) {
      var a = "phone-alt",
        r = [],
        n = "f879",
        c =
          "M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
      ;(t.DF = { prefix: "fas", iconName: a, icon: [512, 512, r, n, c] }),
        (t.DO = t.DF)
    },
    7606: function (e, t, a) {
      a.d(t, {
        G: function () {
          return w
        },
      })
      var r = a(4694),
        n = a(5697),
        c = a.n(n),
        l = a(7294)
      function i(e) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e
                }),
          i(e)
        )
      }
      function o(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        )
      }
      function s(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, r)
        }
        return a
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(a), !0).forEach(function (t) {
                o(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : s(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                )
              })
        }
        return e
      }
      function m(e, t) {
        if (null == e) return {}
        var a,
          r,
          n = (function (e, t) {
            if (null == e) return {}
            var a,
              r,
              n = {},
              c = Object.keys(e)
            for (r = 0; r < c.length; r++)
              (a = c[r]), t.indexOf(a) >= 0 || (n[a] = e[a])
            return n
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e)
          for (r = 0; r < c.length; r++)
            (a = c[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (n[a] = e[a]))
        }
        return n
      }
      function b(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, a = new Array(e.length); t < e.length; t++)
                a[t] = e[t]
              return a
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e)
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            )
          })()
        )
      }
      function u(e) {
        return (
          (t = e),
          (t -= 0) == t
            ? e
            : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
                return t ? t.toUpperCase() : ""
              }))
                .substr(0, 1)
                .toLowerCase() + e.substr(1)
        )
        var t
      }
      function p(e) {
        return e
          .split(";")
          .map(function (e) {
            return e.trim()
          })
          .filter(function (e) {
            return e
          })
          .reduce(function (e, t) {
            var a,
              r = t.indexOf(":"),
              n = u(t.slice(0, r)),
              c = t.slice(r + 1).trim()
            return (
              n.startsWith("webkit")
                ? (e[((a = n), a.charAt(0).toUpperCase() + a.slice(1))] = c)
                : (e[n] = c),
              e
            )
          }, {})
      }
      var _ = !1
      try {
        _ = !0
      } catch (N) {}
      function d(e) {
        return e && "object" === i(e) && e.prefix && e.iconName && e.icon
          ? e
          : r.parse.icon
          ? r.parse.icon(e)
          : null === e
          ? null
          : e && "object" === i(e) && e.prefix && e.iconName
          ? e
          : Array.isArray(e) && 2 === e.length
          ? { prefix: e[0], iconName: e[1] }
          : "string" == typeof e
          ? { prefix: "fas", iconName: e }
          : void 0
      }
      function g(e, t) {
        return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
          ? o({}, e, t)
          : {}
      }
      function w(e) {
        var t = e.forwardedRef,
          a = m(e, ["forwardedRef"]),
          n = a.icon,
          c = a.mask,
          l = a.symbol,
          i = a.className,
          s = a.title,
          u = a.titleId,
          p = d(n),
          N = g(
            "classes",
            [].concat(
              b(
                (function (e) {
                  var t,
                    a = e.spin,
                    r = e.pulse,
                    n = e.fixedWidth,
                    c = e.inverse,
                    l = e.border,
                    i = e.listItem,
                    s = e.flip,
                    f = e.size,
                    m = e.rotation,
                    b = e.pull,
                    u =
                      (o(
                        (t = {
                          "fa-spin": a,
                          "fa-pulse": r,
                          "fa-fw": n,
                          "fa-inverse": c,
                          "fa-border": l,
                          "fa-li": i,
                          "fa-flip-horizontal":
                            "horizontal" === s || "both" === s,
                          "fa-flip-vertical": "vertical" === s || "both" === s,
                        }),
                        "fa-".concat(f),
                        null != f
                      ),
                      o(t, "fa-rotate-".concat(m), null != m && 0 !== m),
                      o(t, "fa-pull-".concat(b), null != b),
                      o(t, "fa-swap-opacity", e.swapOpacity),
                      t)
                  return Object.keys(u)
                    .map(function (e) {
                      return u[e] ? e : null
                    })
                    .filter(function (e) {
                      return e
                    })
                })(a)
              ),
              b(i.split(" "))
            )
          ),
          k = g(
            "transform",
            "string" == typeof a.transform
              ? r.parse.transform(a.transform)
              : a.transform
          ),
          E = g("mask", d(c)),
          h = (0, r.icon)(
            p,
            f({}, N, {}, k, {}, E, { symbol: l, title: s, titleId: u })
          )
        if (!h)
          return (
            (function () {
              var e
              !_ &&
                console &&
                "function" == typeof console.error &&
                (e = console).error.apply(e, arguments)
            })("Could not find icon", p),
            null
          )
        var O = h.abstract,
          v = { ref: t }
        return (
          Object.keys(a).forEach(function (e) {
            w.defaultProps.hasOwnProperty(e) || (v[e] = a[e])
          }),
          y(O[0], v)
        )
      }
      ;(w.displayName = "FontAwesomeIcon"),
        (w.propTypes = {
          border: c().bool,
          className: c().string,
          mask: c().oneOfType([c().object, c().array, c().string]),
          fixedWidth: c().bool,
          inverse: c().bool,
          flip: c().oneOf(["horizontal", "vertical", "both"]),
          icon: c().oneOfType([c().object, c().array, c().string]),
          listItem: c().bool,
          pull: c().oneOf(["right", "left"]),
          pulse: c().bool,
          rotation: c().oneOf([0, 90, 180, 270]),
          size: c().oneOf([
            "lg",
            "xs",
            "sm",
            "1x",
            "2x",
            "3x",
            "4x",
            "5x",
            "6x",
            "7x",
            "8x",
            "9x",
            "10x",
          ]),
          spin: c().bool,
          symbol: c().oneOfType([c().bool, c().string]),
          title: c().string,
          transform: c().oneOfType([c().string, c().object]),
          swapOpacity: c().bool,
        }),
        (w.defaultProps = {
          border: !1,
          className: "",
          mask: null,
          fixedWidth: !1,
          inverse: !1,
          flip: null,
          icon: null,
          listItem: !1,
          pull: null,
          pulse: !1,
          rotation: null,
          size: null,
          spin: !1,
          symbol: !1,
          title: "",
          transform: null,
          swapOpacity: !1,
        })
      var y = function e(t, a) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        if ("string" == typeof a) return a
        var n = (a.children || []).map(function (a) {
            return e(t, a)
          }),
          c = Object.keys(a.attributes || {}).reduce(
            function (e, t) {
              var r = a.attributes[t]
              switch (t) {
                case "class":
                  ;(e.attrs.className = r), delete a.attributes.class
                  break
                case "style":
                  e.attrs.style = p(r)
                  break
                default:
                  0 === t.indexOf("aria-") || 0 === t.indexOf("data-")
                    ? (e.attrs[t.toLowerCase()] = r)
                    : (e.attrs[u(t)] = r)
              }
              return e
            },
            { attrs: {} }
          ),
          l = r.style,
          i = void 0 === l ? {} : l,
          o = m(r, ["style"])
        return (
          (c.attrs.style = f({}, c.attrs.style, {}, i)),
          t.apply(void 0, [a.tag, f({}, c.attrs, {}, o)].concat(b(n)))
        )
      }.bind(null, l.createElement)
    },
    9821: function (e, t, a) {
      var r = a(7294),
        n = a(5093),
        c = a(6429),
        l = a(4964),
        i = a(7606)
      t.Z = function (e) {
        e.title
        return r.createElement(
          "footer",
          { className: "footer" },
          r.createElement(
            "div",
            { className: "container" },
            r.createElement(
              "div",
              { className: "footer__inner" },
              r.createElement(
                "ul",
                { className: "footer__item" },
                r.createElement(
                  "li",
                  { className: "footer__title" },
                  "Наші контакти"
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  r.createElement(i.G, {
                    icon: c.DO,
                    size: "lg",
                    className: "footer__image",
                  }),
                  " ",
                  "(057) 702-13-78"
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  r.createElement(i.G, {
                    icon: c.DO,
                    size: "lg",
                    className: "footer__image",
                  }),
                  " ",
                  "(057) 702-13-78"
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  r.createElement(i.G, {
                    icon: l.FU,
                    size: "lg",
                    className: "footer__image",
                  }),
                  " ",
                  "d_mst@nure.ua"
                )
              ),
              r.createElement(
                "ul",
                { className: "footer__item" },
                r.createElement(
                  "li",
                  { className: "footer__title" },
                  "Про кафедру"
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  r.createElement(
                    n.Link,
                    {
                      language: "ua",
                      to: "/teacher/teacher",
                      className: "footer__link",
                    },
                    "Склад кафедри"
                  )
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  r.createElement(
                    n.Link,
                    {
                      language: "ua",
                      to: "/history/history",
                      className: "footer__link",
                    },
                    "Історія кафедри"
                  )
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  " ",
                  r.createElement(
                    n.Link,
                    {
                      language: "ua",
                      to: "/graduates/graduates",
                      className: "footer__link",
                    },
                    "Наші випускники"
                  )
                )
              ),
              r.createElement(
                "ul",
                { className: "footer__item" },
                r.createElement(
                  "li",
                  { className: "footer__title" },
                  "Учбовий процес"
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  "Постійна коміссія УМР"
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  "Форми навчання"
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  "Спеціальності"
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  "Освітні програми"
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  "Силабуси дисциплін"
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  "Графіки навчального процесу"
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  "Обрання дисциплін студентом"
                )
              ),
              r.createElement(
                "ul",
                { className: "footer__item" },
                r.createElement("li", { className: "footer__title" }, "Наука"),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  "Лабараторія"
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  r.createElement(
                    n.Link,
                    {
                      language: "ua",
                      to: "/directions/directions ",
                      className: "footer__link",
                    },
                    "Наукові напрями"
                  )
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  " ",
                  r.createElement(
                    n.Link,
                    {
                      language: "ua",
                      to: "/studentscience/studentscience",
                      className: "footer__link",
                    },
                    "Студентська наука"
                  )
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  r.createElement(
                    n.Link,
                    {
                      language: "ua",
                      to: "/works/works",
                      className: "footer__link",
                    },
                    "Роботи студентів"
                  )
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  r.createElement(
                    n.Link,
                    {
                      language: "ua",
                      to: "/sections/sections",
                      className: "footer__link",
                    },
                    "Гуртки кафедри"
                  )
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  "Запропонувати тему"
                )
              ),
              r.createElement(
                "ul",
                { className: "footer__item" },
                r.createElement(
                  "li",
                  { className: "footer__title" },
                  "Абітурієнтам"
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  "Правила вступу"
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  "Спеціальності"
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  "Питання-відповідь"
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  "Наша реклама"
                )
              ),
              r.createElement(
                "ul",
                { className: "footer__item" },
                r.createElement(
                  "li",
                  { className: "footer__title" },
                  "Студентам"
                ),
                r.createElement("li", { className: "footer__link" }, "Розклад"),
                r.createElement("li", { className: "footer__link" }, "Ресурси"),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  "Науково дослідна робота"
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  "Вибір студента"
                ),
                r.createElement(
                  "li",
                  { className: "footer__link" },
                  "Дипломування"
                ),
                r.createElement("li", { className: "footer__link" }, "Практика")
              ),
              r.createElement(
                "ul",
                { className: "footer__item" },
                r.createElement(
                  "li",
                  { className: "footer__title" },
                  "Партнери"
                )
              )
            )
          ),
          r.createElement(
            "div",
            { className: "footer__copyright" },
            r.createElement(
              "div",
              { className: "container" },
              r.createElement(
                "div",
                { className: "footer__copyright__inner" },
                "© 2021 Кафедра МСТ"
              )
            )
          )
        )
      }
    },
    6059: function (e) {
      e.exports = JSON.parse(
        '{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/static/f46a44bbc8c6db32a7b9db9a13261270/4b7fc/news_image2.png","srcSet":"/static/f46a44bbc8c6db32a7b9db9a13261270/5679d/news_image2.png 103w,\\n/static/f46a44bbc8c6db32a7b9db9a13261270/7f983/news_image2.png 207w,\\n/static/f46a44bbc8c6db32a7b9db9a13261270/4b7fc/news_image2.png 413w","sizes":"(min-width: 413px) 413px, 100vw"},"sources":[{"srcSet":"/static/f46a44bbc8c6db32a7b9db9a13261270/ad293/news_image2.webp 103w,\\n/static/f46a44bbc8c6db32a7b9db9a13261270/11674/news_image2.webp 207w,\\n/static/f46a44bbc8c6db32a7b9db9a13261270/4219e/news_image2.webp 413w","type":"image/webp","sizes":"(min-width: 413px) 413px, 100vw"}]},"width":413,"height":246}'
      )
    },
    1044: function (e) {
      e.exports = JSON.parse(
        '{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/static/adcb4fda55060cf9144c8ecb76b0f867/4b7fc/news_image3.png","srcSet":"/static/adcb4fda55060cf9144c8ecb76b0f867/5679d/news_image3.png 103w,\\n/static/adcb4fda55060cf9144c8ecb76b0f867/7f983/news_image3.png 207w,\\n/static/adcb4fda55060cf9144c8ecb76b0f867/4b7fc/news_image3.png 413w","sizes":"(min-width: 413px) 413px, 100vw"},"sources":[{"srcSet":"/static/adcb4fda55060cf9144c8ecb76b0f867/ad293/news_image3.webp 103w,\\n/static/adcb4fda55060cf9144c8ecb76b0f867/11674/news_image3.webp 207w,\\n/static/adcb4fda55060cf9144c8ecb76b0f867/4219e/news_image3.webp 413w","type":"image/webp","sizes":"(min-width: 413px) 413px, 100vw"}]},"width":413,"height":246}'
      )
    },
    2401: function (e) {
      e.exports = JSON.parse(
        '{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/static/adcb4fda55060cf9144c8ecb76b0f867/4b7fc/news_image1.png","srcSet":"/static/adcb4fda55060cf9144c8ecb76b0f867/5679d/news_image1.png 103w,\\n/static/adcb4fda55060cf9144c8ecb76b0f867/7f983/news_image1.png 207w,\\n/static/adcb4fda55060cf9144c8ecb76b0f867/4b7fc/news_image1.png 413w","sizes":"(min-width: 413px) 413px, 100vw"},"sources":[{"srcSet":"/static/adcb4fda55060cf9144c8ecb76b0f867/ad293/news_image1.webp 103w,\\n/static/adcb4fda55060cf9144c8ecb76b0f867/11674/news_image1.webp 207w,\\n/static/adcb4fda55060cf9144c8ecb76b0f867/4219e/news_image1.webp 413w","type":"image/webp","sizes":"(min-width: 413px) 413px, 100vw"}]},"width":413,"height":246}'
      )
    },
  },
])
//# sourceMappingURL=2a6b294a8e40256a70761d2a1abedb7d5a8a0be5-01886fa54f851e918626.js.map
