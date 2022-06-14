"use strict"
;(self.webpackChunkgatsby_starter_default =
  self.webpackChunkgatsby_starter_default || []).push([
  [476],
  {
    7198: function (e, t, n) {
      var r = n(7294),
        a = n(5444),
        i = n(6600)
      t.Z = function (e) {
        var t,
          n = e.children,
          l = (0, a.useStaticQuery)("3649515864")
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(i.Z, {
            siteTitle:
              (null === (t = l.site.siteMetadata) || void 0 === t
                ? void 0
                : t.title) || "Title",
          }),
          r.createElement(
            "div",
            {
              style: {
                margin: "0 auto",
                maxWidth: 960,
                padding: "0 1.0875rem 1.45rem",
              },
            },
            r.createElement("main", null, n),
            r.createElement(
              "footer",
              { style: { marginTop: "2rem" } },
              "© ",
              new Date().getFullYear(),
              ", Built with",
              " ",
              r.createElement(
                "a",
                { href: "https://www.gatsbyjs.com" },
                "Gatsby"
              )
            )
          )
        )
      }
    },
    6179: function (e, t, n) {
      var r = n(7294),
        a = n(5414),
        i = n(5444)
      function l(e) {
        var t,
          n,
          l = e.description,
          o = e.lang,
          c = e.meta,
          s = e.title,
          m = (0, i.useStaticQuery)("63159454").site,
          d = l || m.siteMetadata.description,
          u = null === (t = m.siteMetadata) || void 0 === t ? void 0 : t.title
        return r.createElement(a.Helmet, {
          htmlAttributes: { lang: o },
          title: s,
          titleTemplate: u ? "%s | " + u : null,
          meta: [
            { name: "description", content: d },
            { property: "og:title", content: s },
            { property: "og:description", content: d },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            {
              name: "twitter:creator",
              content:
                (null === (n = m.siteMetadata) || void 0 === n
                  ? void 0
                  : n.author) || "",
            },
            { name: "twitter:title", content: s },
            { name: "twitter:description", content: d },
          ].concat(c),
        })
      }
      ;(l.defaultProps = { lang: "en", meta: [], description: "" }), (t.Z = l)
    },
    9579: function (e, t, n) {
      n.r(t)
      var r = n(7294),
        a = n(5444),
        i = n(7198),
        l = n(6179)
      t.default = function (e) {
        var t = e.serverData
        return r.createElement(
          i.Z,
          null,
          r.createElement(l.Z, { title: "Using SSR" }),
          r.createElement("h1", null, "SSR page"),
          r.createElement("img", {
            style: { width: "300px" },
            alt: "A random dog",
            src: t.message,
          }),
          r.createElement(
            "p",
            null,
            "Welcome to a server side rendered page with a random dog photo"
          ),
          r.createElement(
            "p",
            null,
            "To learn more, head over to our",
            " ",
            r.createElement(
              "a",
              {
                href: "https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/",
              },
              "documentation about Server Side Rendering"
            ),
            "."
          ),
          r.createElement(a.Link, { to: "/" }, "Go back to the homepage")
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-using-ssr-js-06dd4ce7c2f8249b1c94.js.map
