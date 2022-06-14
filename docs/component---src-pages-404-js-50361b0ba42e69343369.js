"use strict"
;(self.webpackChunkgatsby_starter_default =
  self.webpackChunkgatsby_starter_default || []).push([
  [883],
  {
    7198: function (t, e, n) {
      var a = n(7294),
        r = n(5444),
        i = n(6600)
      e.Z = function (t) {
        var e,
          n = t.children,
          l = (0, r.useStaticQuery)("3649515864")
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(i.Z, {
            siteTitle:
              (null === (e = l.site.siteMetadata) || void 0 === e
                ? void 0
                : e.title) || "Title",
          }),
          a.createElement(
            "div",
            {
              style: {
                margin: "0 auto",
                maxWidth: 960,
                padding: "0 1.0875rem 1.45rem",
              },
            },
            a.createElement("main", null, n),
            a.createElement(
              "footer",
              { style: { marginTop: "2rem" } },
              "© ",
              new Date().getFullYear(),
              ", Built with",
              " ",
              a.createElement(
                "a",
                { href: "https://www.gatsbyjs.com" },
                "Gatsby"
              )
            )
          )
        )
      }
    },
    6179: function (t, e, n) {
      var a = n(7294),
        r = n(5414),
        i = n(5444)
      function l(t) {
        var e,
          n,
          l = t.description,
          o = t.lang,
          c = t.meta,
          s = t.title,
          u = (0, i.useStaticQuery)("63159454").site,
          m = l || u.siteMetadata.description,
          d = null === (e = u.siteMetadata) || void 0 === e ? void 0 : e.title
        return a.createElement(r.Helmet, {
          htmlAttributes: { lang: o },
          title: s,
          titleTemplate: d ? "%s | " + d : null,
          meta: [
            { name: "description", content: m },
            { property: "og:title", content: s },
            { property: "og:description", content: m },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            {
              name: "twitter:creator",
              content:
                (null === (n = u.siteMetadata) || void 0 === n
                  ? void 0
                  : n.author) || "",
            },
            { name: "twitter:title", content: s },
            { name: "twitter:description", content: m },
          ].concat(c),
        })
      }
      ;(l.defaultProps = { lang: "en", meta: [], description: "" }), (e.Z = l)
    },
    9616: function (t, e, n) {
      n.r(e)
      var a = n(7294),
        r = n(7198),
        i = n(6179)
      e.default = function () {
        return a.createElement(
          r.Z,
          null,
          a.createElement(i.Z, { title: "404: Not found" }),
          a.createElement("h1", null, "404: Not Found"),
          a.createElement(
            "p",
            null,
            "You just hit a route that doesn't exist... the sadness."
          )
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-404-js-50361b0ba42e69343369.js.map
