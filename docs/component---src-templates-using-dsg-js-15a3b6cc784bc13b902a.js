"use strict"
;(self.webpackChunkgatsby_starter_default =
  self.webpackChunkgatsby_starter_default || []).push([
  [713],
  {
    7198: function (e, t, n) {
      var a = n(7294),
        r = n(5444),
        i = n(6600)
      t.Z = function (e) {
        var t,
          n = e.children,
          l = (0, r.useStaticQuery)("3649515864")
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(i.Z, {
            siteTitle:
              (null === (t = l.site.siteMetadata) || void 0 === t
                ? void 0
                : t.title) || "Title",
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
    6179: function (e, t, n) {
      var a = n(7294),
        r = n(5414),
        i = n(5444)
      function l(e) {
        var t,
          n,
          l = e.description,
          o = e.lang,
          c = e.meta,
          s = e.title,
          u = (0, i.useStaticQuery)("63159454").site,
          m = l || u.siteMetadata.description,
          d = null === (t = u.siteMetadata) || void 0 === t ? void 0 : t.title
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
      ;(l.defaultProps = { lang: "en", meta: [], description: "" }), (t.Z = l)
    },
    8243: function (e, t, n) {
      n.r(t)
      var a = n(7294),
        r = n(5444),
        i = n(7198),
        l = n(6179)
      t.default = function () {
        return a.createElement(
          i.Z,
          null,
          a.createElement(l.Z, { title: "Using DSG" }),
          a.createElement("h1", null, "Hello from a DSG Page"),
          a.createElement(
            "p",
            null,
            "This page is not created until requested by a user."
          ),
          a.createElement(
            "p",
            null,
            "To learn more, head over to our",
            " ",
            a.createElement(
              "a",
              {
                href: "https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/",
              },
              "documentation about Deferred Static Generation"
            ),
            "."
          ),
          a.createElement(r.Link, { to: "/" }, "Go back to the homepage")
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-templates-using-dsg-js-15a3b6cc784bc13b902a.js.map
