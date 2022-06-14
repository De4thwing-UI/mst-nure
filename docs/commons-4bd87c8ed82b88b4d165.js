;(self.webpackChunkgatsby_starter_default =
  self.webpackChunkgatsby_starter_default || []).push([
  [351],
  {
    862: function (e, t, n) {
      var r = n(8).default
      function a(e) {
        if ("function" != typeof WeakMap) return null
        var t = new WeakMap(),
          n = new WeakMap()
        return (a = function (e) {
          return e ? n : t
        })(e)
      }
      ;(e.exports = function (e, t) {
        if (!t && e && e.__esModule) return e
        if (null === e || ("object" !== r(e) && "function" != typeof e))
          return { default: e }
        var n = a(t)
        if (n && n.has(e)) return n.get(e)
        var o = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var c in e)
          if ("default" !== c && Object.prototype.hasOwnProperty.call(e, c)) {
            var u = i ? Object.getOwnPropertyDescriptor(e, c) : null
            u && (u.get || u.set)
              ? Object.defineProperty(o, c, u)
              : (o[c] = e[c])
          }
        return (o.default = e), n && n.set(e, o), o
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    2993: function (e) {
      var t = "undefined" != typeof Element,
        n = "function" == typeof Map,
        r = "function" == typeof Set,
        a = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView
      function o(e, i) {
        if (e === i) return !0
        if (e && i && "object" == typeof e && "object" == typeof i) {
          if (e.constructor !== i.constructor) return !1
          var c, u, s, l
          if (Array.isArray(e)) {
            if ((c = e.length) != i.length) return !1
            for (u = c; 0 != u--; ) if (!o(e[u], i[u])) return !1
            return !0
          }
          if (n && e instanceof Map && i instanceof Map) {
            if (e.size !== i.size) return !1
            for (l = e.entries(); !(u = l.next()).done; )
              if (!i.has(u.value[0])) return !1
            for (l = e.entries(); !(u = l.next()).done; )
              if (!o(u.value[1], i.get(u.value[0]))) return !1
            return !0
          }
          if (r && e instanceof Set && i instanceof Set) {
            if (e.size !== i.size) return !1
            for (l = e.entries(); !(u = l.next()).done; )
              if (!i.has(u.value[0])) return !1
            return !0
          }
          if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
            if ((c = e.length) != i.length) return !1
            for (u = c; 0 != u--; ) if (e[u] !== i[u]) return !1
            return !0
          }
          if (e.constructor === RegExp)
            return e.source === i.source && e.flags === i.flags
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === i.valueOf()
          if (e.toString !== Object.prototype.toString)
            return e.toString() === i.toString()
          if ((c = (s = Object.keys(e)).length) !== Object.keys(i).length)
            return !1
          for (u = c; 0 != u--; )
            if (!Object.prototype.hasOwnProperty.call(i, s[u])) return !1
          if (t && e instanceof Element) return !1
          for (u = c; 0 != u--; )
            if (
              (("_owner" !== s[u] && "__v" !== s[u] && "__o" !== s[u]) ||
                !e.$$typeof) &&
              !o(e[s[u]], i[s[u]])
            )
              return !1
          return !0
        }
        return e != e && i != i
      }
      e.exports = function (e, t) {
        try {
          return o(e, t)
        } catch (n) {
          if ((n.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            )
          throw n
        }
      }
    },
    5414: function (e, t, n) {
      "use strict"
      n.r(t),
        n.d(t, {
          Helmet: function () {
            return he
          },
        })
      var r,
        a,
        o,
        i,
        c = n(5697),
        u = n.n(c),
        s = n(4839),
        l = n.n(s),
        f = n(2993),
        d = n.n(f),
        p = n(7294),
        m = n(6494),
        h = n.n(m),
        g = "bodyAttributes",
        y = "htmlAttributes",
        v = "titleAttributes",
        b = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title",
        },
        w =
          (Object.keys(b).map(function (e) {
            return b[e]
          }),
          "charset"),
        T = "cssText",
        _ = "href",
        E = "http-equiv",
        k = "innerHTML",
        O = "itemprop",
        A = "name",
        C = "property",
        S = "rel",
        L = "src",
        j = "target",
        N = {
          accesskey: "accessKey",
          charset: "charSet",
          class: "className",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          "http-equiv": "httpEquiv",
          itemprop: "itemProp",
          tabindex: "tabIndex",
        },
        x = "defaultTitle",
        P = "defer",
        M = "encodeSpecialCharacters",
        I = "onChangeClientState",
        R = "titleTemplate",
        D = Object.keys(N).reduce(function (e, t) {
          return (e[N[t]] = t), e
        }, {}),
        H = [b.NOSCRIPT, b.SCRIPT, b.STYLE],
        B = "data-react-helmet",
        U =
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
              },
        Y = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
        },
        q = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })(),
        F =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        z = function (e, t) {
          var n = {}
          for (var r in e)
            t.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
          return n
        },
        K = function (e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t
        },
        W = function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return !1 === t
            ? String(e)
            : String(e)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#x27;")
        },
        G = function (e) {
          var t = Q(e, b.TITLE),
            n = Q(e, R)
          if (n && t)
            return n.replace(/%s/g, function () {
              return Array.isArray(t) ? t.join("") : t
            })
          var r = Q(e, x)
          return t || r || void 0
        },
        V = function (e) {
          return Q(e, I) || function () {}
        },
        $ = function (e, t) {
          return t
            .filter(function (t) {
              return void 0 !== t[e]
            })
            .map(function (t) {
              return t[e]
            })
            .reduce(function (e, t) {
              return F({}, e, t)
            }, {})
        },
        J = function (e, t) {
          return t
            .filter(function (e) {
              return void 0 !== e[b.BASE]
            })
            .map(function (e) {
              return e[b.BASE]
            })
            .reverse()
            .reduce(function (t, n) {
              if (!t.length)
                for (var r = Object.keys(n), a = 0; a < r.length; a++) {
                  var o = r[a].toLowerCase()
                  if (-1 !== e.indexOf(o) && n[o]) return t.concat(n)
                }
              return t
            }, [])
        },
        Z = function (e, t, n) {
          var r = {}
          return n
            .filter(function (t) {
              return (
                !!Array.isArray(t[e]) ||
                (void 0 !== t[e] &&
                  re(
                    "Helmet: " +
                      e +
                      ' should be of type "Array". Instead found type "' +
                      U(t[e]) +
                      '"'
                  ),
                !1)
              )
            })
            .map(function (t) {
              return t[e]
            })
            .reverse()
            .reduce(function (e, n) {
              var a = {}
              n.filter(function (e) {
                for (
                  var n = void 0, o = Object.keys(e), i = 0;
                  i < o.length;
                  i++
                ) {
                  var c = o[i],
                    u = c.toLowerCase()
                  ;-1 === t.indexOf(u) ||
                    (n === S && "canonical" === e[n].toLowerCase()) ||
                    (u === S && "stylesheet" === e[u].toLowerCase()) ||
                    (n = u),
                    -1 === t.indexOf(c) ||
                      (c !== k && c !== T && c !== O) ||
                      (n = c)
                }
                if (!n || !e[n]) return !1
                var s = e[n].toLowerCase()
                return (
                  r[n] || (r[n] = {}),
                  a[n] || (a[n] = {}),
                  !r[n][s] && ((a[n][s] = !0), !0)
                )
              })
                .reverse()
                .forEach(function (t) {
                  return e.push(t)
                })
              for (var o = Object.keys(a), i = 0; i < o.length; i++) {
                var c = o[i],
                  u = h()({}, r[c], a[c])
                r[c] = u
              }
              return e
            }, [])
            .reverse()
        },
        Q = function (e, t) {
          for (var n = e.length - 1; n >= 0; n--) {
            var r = e[n]
            if (r.hasOwnProperty(t)) return r[t]
          }
          return null
        },
        X =
          ((r = Date.now()),
          function (e) {
            var t = Date.now()
            t - r > 16
              ? ((r = t), e(t))
              : setTimeout(function () {
                  X(e)
                }, 0)
          }),
        ee = function (e) {
          return clearTimeout(e)
        },
        te =
          "undefined" != typeof window
            ? (window.requestAnimationFrame &&
                window.requestAnimationFrame.bind(window)) ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              X
            : n.g.requestAnimationFrame || X,
        ne =
          "undefined" != typeof window
            ? window.cancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              ee
            : n.g.cancelAnimationFrame || ee,
        re = function (e) {
          return console && "function" == typeof console.warn && console.warn(e)
        },
        ae = null,
        oe = function (e, t) {
          var n = e.baseTag,
            r = e.bodyAttributes,
            a = e.htmlAttributes,
            o = e.linkTags,
            i = e.metaTags,
            c = e.noscriptTags,
            u = e.onChangeClientState,
            s = e.scriptTags,
            l = e.styleTags,
            f = e.title,
            d = e.titleAttributes
          ue(b.BODY, r), ue(b.HTML, a), ce(f, d)
          var p = {
              baseTag: se(b.BASE, n),
              linkTags: se(b.LINK, o),
              metaTags: se(b.META, i),
              noscriptTags: se(b.NOSCRIPT, c),
              scriptTags: se(b.SCRIPT, s),
              styleTags: se(b.STYLE, l),
            },
            m = {},
            h = {}
          Object.keys(p).forEach(function (e) {
            var t = p[e],
              n = t.newTags,
              r = t.oldTags
            n.length && (m[e] = n), r.length && (h[e] = p[e].oldTags)
          }),
            t && t(),
            u(e, m, h)
        },
        ie = function (e) {
          return Array.isArray(e) ? e.join("") : e
        },
        ce = function (e, t) {
          void 0 !== e && document.title !== e && (document.title = ie(e)),
            ue(b.TITLE, t)
        },
        ue = function (e, t) {
          var n = document.getElementsByTagName(e)[0]
          if (n) {
            for (
              var r = n.getAttribute(B),
                a = r ? r.split(",") : [],
                o = [].concat(a),
                i = Object.keys(t),
                c = 0;
              c < i.length;
              c++
            ) {
              var u = i[c],
                s = t[u] || ""
              n.getAttribute(u) !== s && n.setAttribute(u, s),
                -1 === a.indexOf(u) && a.push(u)
              var l = o.indexOf(u)
              ;-1 !== l && o.splice(l, 1)
            }
            for (var f = o.length - 1; f >= 0; f--) n.removeAttribute(o[f])
            a.length === o.length
              ? n.removeAttribute(B)
              : n.getAttribute(B) !== i.join(",") &&
                n.setAttribute(B, i.join(","))
          }
        },
        se = function (e, t) {
          var n = document.head || document.querySelector(b.HEAD),
            r = n.querySelectorAll(e + "[" + "data-react-helmet]"),
            a = Array.prototype.slice.call(r),
            o = [],
            i = void 0
          return (
            t &&
              t.length &&
              t.forEach(function (t) {
                var n = document.createElement(e)
                for (var r in t)
                  if (t.hasOwnProperty(r))
                    if (r === k) n.innerHTML = t.innerHTML
                    else if (r === T)
                      n.styleSheet
                        ? (n.styleSheet.cssText = t.cssText)
                        : n.appendChild(document.createTextNode(t.cssText))
                    else {
                      var c = void 0 === t[r] ? "" : t[r]
                      n.setAttribute(r, c)
                    }
                n.setAttribute(B, "true"),
                  a.some(function (e, t) {
                    return (i = t), n.isEqualNode(e)
                  })
                    ? a.splice(i, 1)
                    : o.push(n)
              }),
            a.forEach(function (e) {
              return e.parentNode.removeChild(e)
            }),
            o.forEach(function (e) {
              return n.appendChild(e)
            }),
            { oldTags: a, newTags: o }
          )
        },
        le = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n
            return t ? t + " " + r : r
          }, "")
        },
        fe = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return Object.keys(e).reduce(function (t, n) {
            return (t[N[n] || n] = e[n]), t
          }, t)
        },
        de = function (e, t, n) {
          switch (e) {
            case b.TITLE:
              return {
                toComponent: function () {
                  return (
                    (e = t.title),
                    (n = t.titleAttributes),
                    ((r = { key: e })[B] = !0),
                    (a = fe(n, r)),
                    [p.createElement(b.TITLE, a, e)]
                  )
                  var e, n, r, a
                },
                toString: function () {
                  return (function (e, t, n, r) {
                    var a = le(n),
                      o = ie(t)
                    return a
                      ? "<" +
                          e +
                          ' data-react-helmet="true" ' +
                          a +
                          ">" +
                          W(o, r) +
                          "</" +
                          e +
                          ">"
                      : "<" +
                          e +
                          ' data-react-helmet="true">' +
                          W(o, r) +
                          "</" +
                          e +
                          ">"
                  })(e, t.title, t.titleAttributes, n)
                },
              }
            case g:
            case y:
              return {
                toComponent: function () {
                  return fe(t)
                },
                toString: function () {
                  return le(t)
                },
              }
            default:
              return {
                toComponent: function () {
                  return (function (e, t) {
                    return t.map(function (t, n) {
                      var r,
                        a = (((r = { key: n })[B] = !0), r)
                      return (
                        Object.keys(t).forEach(function (e) {
                          var n = N[e] || e
                          if (n === k || n === T) {
                            var r = t.innerHTML || t.cssText
                            a.dangerouslySetInnerHTML = { __html: r }
                          } else a[n] = t[e]
                        }),
                        p.createElement(e, a)
                      )
                    })
                  })(e, t)
                },
                toString: function () {
                  return (function (e, t, n) {
                    return t.reduce(function (t, r) {
                      var a = Object.keys(r)
                          .filter(function (e) {
                            return !(e === k || e === T)
                          })
                          .reduce(function (e, t) {
                            var a =
                              void 0 === r[t] ? t : t + '="' + W(r[t], n) + '"'
                            return e ? e + " " + a : a
                          }, ""),
                        o = r.innerHTML || r.cssText || "",
                        i = -1 === H.indexOf(e)
                      return (
                        t +
                        "<" +
                        e +
                        ' data-react-helmet="true" ' +
                        a +
                        (i ? "/>" : ">" + o + "</" + e + ">")
                      )
                    }, "")
                  })(e, t, n)
                },
              }
          }
        },
        pe = function (e) {
          var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            a = e.htmlAttributes,
            o = e.linkTags,
            i = e.metaTags,
            c = e.noscriptTags,
            u = e.scriptTags,
            s = e.styleTags,
            l = e.title,
            f = void 0 === l ? "" : l,
            d = e.titleAttributes
          return {
            base: de(b.BASE, t, r),
            bodyAttributes: de(g, n, r),
            htmlAttributes: de(y, a, r),
            link: de(b.LINK, o, r),
            meta: de(b.META, i, r),
            noscript: de(b.NOSCRIPT, c, r),
            script: de(b.SCRIPT, u, r),
            style: de(b.STYLE, s, r),
            title: de(b.TITLE, { title: f, titleAttributes: d }, r),
          }
        },
        me = l()(
          function (e) {
            return {
              baseTag: J([_, j], e),
              bodyAttributes: $(g, e),
              defer: Q(e, P),
              encode: Q(e, M),
              htmlAttributes: $(y, e),
              linkTags: Z(b.LINK, [S, _], e),
              metaTags: Z(b.META, [A, w, E, C, O], e),
              noscriptTags: Z(b.NOSCRIPT, [k], e),
              onChangeClientState: V(e),
              scriptTags: Z(b.SCRIPT, [L, k], e),
              styleTags: Z(b.STYLE, [T], e),
              title: G(e),
              titleAttributes: $(v, e),
            }
          },
          function (e) {
            ae && ne(ae),
              e.defer
                ? (ae = te(function () {
                    oe(e, function () {
                      ae = null
                    })
                  }))
                : (oe(e), (ae = null))
          },
          pe
        )(function () {
          return null
        }),
        he =
          ((a = me),
          (i = o =
            (function (e) {
              function t() {
                return Y(this, t), K(this, e.apply(this, arguments))
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    )
                  ;(e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t))
                })(t, e),
                (t.prototype.shouldComponentUpdate = function (e) {
                  return !d()(this.props, e)
                }),
                (t.prototype.mapNestedChildrenToProps = function (e, t) {
                  if (!t) return null
                  switch (e.type) {
                    case b.SCRIPT:
                    case b.NOSCRIPT:
                      return { innerHTML: t }
                    case b.STYLE:
                      return { cssText: t }
                  }
                  throw new Error(
                    "<" +
                      e.type +
                      " /> elements are self-closing and can not contain children. Refer to our API for more information."
                  )
                }),
                (t.prototype.flattenArrayTypeChildren = function (e) {
                  var t,
                    n = e.child,
                    r = e.arrayTypeChildren,
                    a = e.newChildProps,
                    o = e.nestedChildren
                  return F(
                    {},
                    r,
                    (((t = {})[n.type] = [].concat(r[n.type] || [], [
                      F({}, a, this.mapNestedChildrenToProps(n, o)),
                    ])),
                    t)
                  )
                }),
                (t.prototype.mapObjectTypeChildren = function (e) {
                  var t,
                    n,
                    r = e.child,
                    a = e.newProps,
                    o = e.newChildProps,
                    i = e.nestedChildren
                  switch (r.type) {
                    case b.TITLE:
                      return F(
                        {},
                        a,
                        (((t = {})[r.type] = i),
                        (t.titleAttributes = F({}, o)),
                        t)
                      )
                    case b.BODY:
                      return F({}, a, { bodyAttributes: F({}, o) })
                    case b.HTML:
                      return F({}, a, { htmlAttributes: F({}, o) })
                  }
                  return F({}, a, (((n = {})[r.type] = F({}, o)), n))
                }),
                (t.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                  var n = F({}, t)
                  return (
                    Object.keys(e).forEach(function (t) {
                      var r
                      n = F({}, n, (((r = {})[t] = e[t]), r))
                    }),
                    n
                  )
                }),
                (t.prototype.warnOnInvalidChildren = function (e, t) {
                  return !0
                }),
                (t.prototype.mapChildrenToProps = function (e, t) {
                  var n = this,
                    r = {}
                  return (
                    p.Children.forEach(e, function (e) {
                      if (e && e.props) {
                        var a = e.props,
                          o = a.children,
                          i = (function (e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {}
                            return Object.keys(e).reduce(function (t, n) {
                              return (t[D[n] || n] = e[n]), t
                            }, t)
                          })(z(a, ["children"]))
                        switch ((n.warnOnInvalidChildren(e, o), e.type)) {
                          case b.LINK:
                          case b.META:
                          case b.NOSCRIPT:
                          case b.SCRIPT:
                          case b.STYLE:
                            r = n.flattenArrayTypeChildren({
                              child: e,
                              arrayTypeChildren: r,
                              newChildProps: i,
                              nestedChildren: o,
                            })
                            break
                          default:
                            t = n.mapObjectTypeChildren({
                              child: e,
                              newProps: t,
                              newChildProps: i,
                              nestedChildren: o,
                            })
                        }
                      }
                    }),
                    (t = this.mapArrayTypeChildrenToProps(r, t))
                  )
                }),
                (t.prototype.render = function () {
                  var e = this.props,
                    t = e.children,
                    n = z(e, ["children"]),
                    r = F({}, n)
                  return (
                    t && (r = this.mapChildrenToProps(t, r)),
                    p.createElement(a, r)
                  )
                }),
                q(t, null, [
                  {
                    key: "canUseDOM",
                    set: function (e) {
                      a.canUseDOM = e
                    },
                  },
                ]),
                t
              )
            })(p.Component)),
          (o.propTypes = {
            base: u().object,
            bodyAttributes: u().object,
            children: u().oneOfType([u().arrayOf(u().node), u().node]),
            defaultTitle: u().string,
            defer: u().bool,
            encodeSpecialCharacters: u().bool,
            htmlAttributes: u().object,
            link: u().arrayOf(u().object),
            meta: u().arrayOf(u().object),
            noscript: u().arrayOf(u().object),
            onChangeClientState: u().func,
            script: u().arrayOf(u().object),
            style: u().arrayOf(u().object),
            title: u().string,
            titleAttributes: u().object,
            titleTemplate: u().string,
          }),
          (o.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
          (o.peek = a.peek),
          (o.rewind = function () {
            var e = a.rewind()
            return (
              e ||
                (e = pe({
                  baseTag: [],
                  bodyAttributes: {},
                  encodeSpecialCharacters: !0,
                  htmlAttributes: {},
                  linkTags: [],
                  metaTags: [],
                  noscriptTags: [],
                  scriptTags: [],
                  styleTags: [],
                  title: "",
                  titleAttributes: {},
                })),
              e
            )
          }),
          i)
      ;(he.renderStatic = he.rewind), (t.default = he)
    },
    4839: function (e, t, n) {
      "use strict"
      var r,
        a = n(7294),
        o = (r = a) && "object" == typeof r && "default" in r ? r.default : r
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      var c = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      )
      e.exports = function (e, t, n) {
        if ("function" != typeof e)
          throw new Error("Expected reducePropsToState to be a function.")
        if ("function" != typeof t)
          throw new Error(
            "Expected handleStateChangeOnClient to be a function."
          )
        if (void 0 !== n && "function" != typeof n)
          throw new Error(
            "Expected mapStateOnServer to either be undefined or a function."
          )
        return function (r) {
          if ("function" != typeof r)
            throw new Error(
              "Expected WrappedComponent to be a React component."
            )
          var u,
            s = []
          function l() {
            ;(u = e(
              s.map(function (e) {
                return e.props
              })
            )),
              f.canUseDOM ? t(u) : n && (u = n(u))
          }
          var f = (function (e) {
            var t, n
            function a() {
              return e.apply(this, arguments) || this
            }
            ;(n = e),
              ((t = a).prototype = Object.create(n.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = n),
              (a.peek = function () {
                return u
              }),
              (a.rewind = function () {
                if (a.canUseDOM)
                  throw new Error(
                    "You may only call rewind() on the server. Call peek() to read the current state."
                  )
                var e = u
                return (u = void 0), (s = []), e
              })
            var i = a.prototype
            return (
              (i.UNSAFE_componentWillMount = function () {
                s.push(this), l()
              }),
              (i.componentDidUpdate = function () {
                l()
              }),
              (i.componentWillUnmount = function () {
                var e = s.indexOf(this)
                s.splice(e, 1), l()
              }),
              (i.render = function () {
                return o.createElement(r, this.props)
              }),
              a
            )
          })(a.PureComponent)
          return (
            i(
              f,
              "displayName",
              "SideEffect(" +
                (function (e) {
                  return e.displayName || e.name || "Component"
                })(r) +
                ")"
            ),
            i(f, "canUseDOM", c),
            f
          )
        }
      }
    },
    9438: function (e, t, n) {
      "use strict"
      var r = n(5318)
      ;(t.__esModule = !0), (t.Helmet = void 0)
      var a = r(n(7316)),
        o = r(n(7294)),
        i = n(5414),
        c = n(3396),
        u = ["children"]
      t.Helmet = function (e) {
        var t = e.children,
          n = (0, a.default)(e, u),
          r = (0, c.useI18next)(),
          s = r.languages,
          l = r.language,
          f = r.originalPath,
          d = r.defaultLanguage,
          p = r.siteUrl,
          m = void 0 === p ? "" : p,
          h = function (e) {
            var t = m + (e === d ? "" : "/" + e) + f
            return t.endsWith("/") ? t : t + "/"
          }
        return o.default.createElement(
          i.Helmet,
          n,
          o.default.createElement("html", { lang: l }),
          o.default.createElement("link", { rel: "canonical", href: h(l) }),
          s.map(function (e) {
            return o.default.createElement("link", {
              rel: "alternate",
              key: e,
              href: h(e),
              hrefLang: e,
            })
          }),
          o.default.createElement("link", {
            rel: "alternate",
            href: h(d),
            hrefLang: "x-default",
          }),
          t
        )
      }
    },
    439: function (e, t, n) {
      "use strict"
      var r = n(5318),
        a = n(862)
      ;(t.__esModule = !0), (t.Link = void 0)
      var o = r(n(7154)),
        i = r(n(7316)),
        c = a(n(7294)),
        u = n(9604),
        s = n(5444),
        l = n(8742),
        f = ["language", "to", "onClick"],
        d = c.default.forwardRef(function (e, t) {
          var n = e.language,
            r = e.to,
            a = e.onClick,
            d = (0, i.default)(e, f),
            p = (0, c.useContext)(u.I18nextContext),
            m = n || p.language,
            h =
              "" +
              (function (e) {
                return p.generateDefaultLanguagePage || e !== p.defaultLanguage
                  ? "/" + e
                  : ""
              })(m) +
              r
          return c.default.createElement(
            s.Link,
            (0, o.default)({}, d, {
              to: h,
              innerRef: t,
              hrefLang: m,
              onClick: function (e) {
                n && localStorage.setItem(l.LANGUAGE_KEY, n), a && a(e)
              },
            })
          )
        })
      t.Link = d
    },
    6535: function (e, t, n) {
      "use strict"
      t.__esModule = !0
      var r = n(1421)
      Object.keys(r).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === r[e]) || (t[e] = r[e]))
      })
      var a = n(9604)
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === a[e]) || (t[e] = a[e]))
      })
      var o = n(3396)
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === o[e]) || (t[e] = o[e]))
      })
      var i = n(439)
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === i[e]) || (t[e] = i[e]))
      })
      var c = n(9438)
      Object.keys(c).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === c[e]) || (t[e] = c[e]))
      })
    },
    3396: function (e, t, n) {
      "use strict"
      var r = n(5318)
      ;(t.__esModule = !0), (t.useI18next = void 0)
      var a = r(n(7154)),
        o = n(1421),
        i = n(7294),
        c = n(5444),
        u = n(9604),
        s = n(8742)
      t.useI18next = function (e, t) {
        var n = (0, o.useTranslation)(e, t),
          r = n.i18n,
          l = n.t,
          f = n.ready,
          d = (0, i.useContext)(u.I18nextContext),
          p = d.routed,
          m = d.defaultLanguage,
          h = d.generateDefaultLanguagePage,
          g = function (e) {
            return h || e !== m ? "/" + e : ""
          }
        return (0, a.default)({}, d, {
          i18n: r,
          t: l,
          ready: f,
          navigate: function (e, t) {
            var n = g(d.language),
              r = p ? "" + n + e : "" + e
            return (0, c.navigate)(r, t)
          },
          changeLanguage: function (e, t, n) {
            var r =
              "" +
              g(e) +
              (t ||
                (function (e) {
                  if (!p) return e
                  var t = e.indexOf("/", 1)
                  return e.substring(t)
                })(window.location.pathname)) +
              window.location.search
            return (
              localStorage.setItem(s.LANGUAGE_KEY, e), (0, c.navigate)(r, n)
            )
          },
        })
      }
    },
    5093: function (e, t, n) {
      e.exports = n(6535)
    },
    6600: function (e, t, n) {
      "use strict"
      var r = n(7294),
        a = n(5093),
        o = n(6125)
      t.Z = function (e) {
        e.title
        return r.createElement(
          "header",
          { className: "header" },
          r.createElement(
            "div",
            { className: "container" },
            r.createElement(
              "div",
              { className: "header__inner" },
              r.createElement(
                "div",
                { className: "header__logo" },
                r.createElement(
                  a.Link,
                  { language: "ua", to: "/" },
                  " ",
                  r.createElement(o.S, {
                    src: "../../images/Logo1.png",
                    alt: "logo_MST",
                    __imageData: n(2112),
                  })
                )
              ),
              r.createElement(
                "nav",
                { className: "nav" },
                r.createElement(
                  "a",
                  { href: "#", className: "nav__link" },
                  "Про Кафедру",
                  r.createElement(
                    "div",
                    { className: "nav__dropdown" },
                    r.createElement(
                      a.Link,
                      {
                        language: "ua",
                        to: "/teacher/teacher",
                        className: "nav__dropdown__link",
                      },
                      "Склад кафедри"
                    ),
                    r.createElement(
                      a.Link,
                      {
                        language: "ua",
                        to: "/history/history",
                        className: "nav__dropdown__link",
                      },
                      "Історія кафедри"
                    ),
                    r.createElement(
                      a.Link,
                      {
                        language: "ua",
                        to: "/graduates/graduates",
                        className: "nav__dropdown__link",
                      },
                      "Наші випускники"
                    )
                  )
                ),
                r.createElement(
                  "a",
                  { href: "#", className: "nav__link" },
                  "Учбовий процес"
                ),
                r.createElement(
                  "a",
                  { href: "#", className: "nav__link" },
                  "Наука",
                  r.createElement(
                    "div",
                    { className: "nav__dropdown" },
                    r.createElement(
                      a.Link,
                      {
                        language: "ua",
                        to: "/teacher/teacher",
                        className: "nav__dropdown__link",
                      },
                      "Лабараторія"
                    ),
                    r.createElement(
                      a.Link,
                      {
                        language: "ua",
                        to: "/directions/directions",
                        className: "nav__dropdown__link",
                      },
                      "Наукові напрями"
                    ),
                    r.createElement(
                      a.Link,
                      {
                        language: "ua",
                        to: "/studentscience/studentscience",
                        className: "nav__dropdown__link",
                      },
                      "Студентська наука"
                    ),
                    r.createElement(
                      a.Link,
                      {
                        language: "ua",
                        to: "/works/works",
                        className: "nav__dropdown__link",
                      },
                      "Роботи студентів"
                    ),
                    r.createElement(
                      a.Link,
                      {
                        language: "ua",
                        to: "/sections/sections",
                        className: "nav__dropdown__link",
                      },
                      "Гуртки кафедри"
                    ),
                    r.createElement(
                      a.Link,
                      {
                        language: "ua",
                        to: "/offer/offer",
                        className: "nav__dropdown__link",
                      },
                      "Запропонувати тему"
                    )
                  )
                ),
                r.createElement(
                  "a",
                  { href: "#", className: "nav__link" },
                  "Абітурієнтам",
                  r.createElement(
                    "div",
                    { className: "nav__dropdown" },
                    r.createElement(
                      a.Link,
                      {
                        language: "ua",
                        to: "/teacher/teacher",
                        className: "nav__dropdown__link",
                      },
                      "Правила вступу"
                    ),
                    r.createElement(
                      a.Link,
                      {
                        language: "ua",
                        to: "/admissions/admissions",
                        className: "nav__dropdown__link",
                      },
                      "Спеціальність"
                    ),
                    r.createElement(
                      a.Link,
                      {
                        language: "ua",
                        to: "/studentscience/studentscience",
                        className: "nav__dropdown__link",
                      },
                      "Наша реклама"
                    )
                  )
                ),
                r.createElement(
                  "a",
                  { href: "#", className: "nav__link" },
                  "Студентам"
                ),
                r.createElement(
                  "a",
                  { href: "#", className: "nav__link" },
                  "Партнери"
                ),
                r.createElement(
                  "a",
                  { href: "#", className: "nav__link" },
                  "Контакти"
                )
              ),
              r.createElement(
                "div",
                { className: "mod-languages" },
                r.createElement(
                  "ul",
                  { className: "lang-inline" },
                  r.createElement(
                    "li",
                    { className: "lang-active" },
                    r.createElement("a", { href: "#" }, "Ua")
                  ),
                  r.createElement(
                    "li",
                    { className: "lang-active" },
                    r.createElement("a", { href: "#" }, "Ru")
                  ),
                  r.createElement(
                    "li",
                    { className: "lang-active" },
                    r.createElement("a", { href: "#" }, "En")
                  )
                )
              )
            )
          )
        )
      }
    },
    2112: function (e) {
      "use strict"
      e.exports = JSON.parse(
        '{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/3065d1cae16aaf3d672e5c19e781bf16/ff5e9/Logo1.svg","srcSet":"/static/3065d1cae16aaf3d672e5c19e781bf16/a038e/Logo1.svg 15w,\\n/static/3065d1cae16aaf3d672e5c19e781bf16/d4fc9/Logo1.svg 31w,\\n/static/3065d1cae16aaf3d672e5c19e781bf16/ff5e9/Logo1.svg 61w","sizes":"(min-width: 61px) 61px, 100vw"},"sources":[{"srcSet":"/static/3065d1cae16aaf3d672e5c19e781bf16/f57b3/Logo1.webp 15w,\\n/static/3065d1cae16aaf3d672e5c19e781bf16/97054/Logo1.webp 31w,\\n/static/3065d1cae16aaf3d672e5c19e781bf16/5c7f4/Logo1.webp 61w","type":"image/webp","sizes":"(min-width: 61px) 61px, 100vw"}]},"width":61,"height":61}'
      )
    },
  },
])
//# sourceMappingURL=commons-4bd87c8ed82b88b4d165.js.map
