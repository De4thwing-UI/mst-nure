"use strict"
;(self.webpackChunkgatsby_starter_default =
  self.webpackChunkgatsby_starter_default || []).push([
  [970],
  {
    2815: function (e, t, n) {
      n.r(t)
      var a = n(7294),
        r = n(5444),
        l = n(7198),
        i = n(6179)
      t.default = function (e) {
        var t = e.data,
          n = e.path
        return a.createElement(
          l.Z,
          null,
          a.createElement(i.Z, { title: "Using TypeScript" }),
          a.createElement("h1", null, "Gatsby supports TypeScript by default!"),
          a.createElement(
            "p",
            null,
            "This means that you can create and write ",
            a.createElement("em", null, ".ts/.tsx"),
            " files for your pages, components etc. Please note that the ",
            a.createElement("em", null, "gatsby-*.js"),
            " files (like gatsby-node.js) currently don't support TypeScript yet."
          ),
          a.createElement(
            "p",
            null,
            "For type checking you'll want to install ",
            a.createElement("em", null, "typescript"),
            " via npm and run ",
            a.createElement("em", null, "tsc --init"),
            " to create a ",
            a.createElement("em", null, "tsconfig"),
            " file."
          ),
          a.createElement(
            "p",
            null,
            "You're currently on the page \"",
            n,
            '" which was built on',
            " ",
            t.site.buildTime,
            "."
          ),
          a.createElement(
            "p",
            null,
            "To learn more, head over to our",
            " ",
            a.createElement(
              "a",
              { href: "https://www.gatsbyjs.com/docs/typescript/" },
              "documentation about TypeScript"
            ),
            "."
          ),
          a.createElement(r.Link, { to: "/" }, "Go back to the homepage")
        )
      }
    },
    7198: function (e, t, n) {
      var a = n(7294),
        r = n(5444),
        l = n(6600)
      t.Z = function (e) {
        var t,
          n = e.children,
          i = (0, r.useStaticQuery)("3649515864")
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(l.Z, {
            siteTitle:
              (null === (t = i.site.siteMetadata) || void 0 === t
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
        l = n(5444)
      function i(e) {
        var t,
          n,
          i = e.description,
          c = e.lang,
          o = e.meta,
          s = e.title,
          u = (0, l.useStaticQuery)("63159454").site,
          m = i || u.siteMetadata.description,
          p = null === (t = u.siteMetadata) || void 0 === t ? void 0 : t.title
        return a.createElement(r.Helmet, {
          htmlAttributes: { lang: c },
          title: s,
          titleTemplate: p ? "%s | " + p : null,
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
          ].concat(o),
        })
      }
      ;(i.defaultProps = { lang: "en", meta: [], description: "" }), (t.Z = i)
    },
  },
])
//# sourceMappingURL=component---src-pages-using-typescript-tsx-6b22f96f461a187f1b87.js.map
