const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

module.exports = withNextra();

/* example of how to set up redirects
module.exports = withNextra({
  redirects: () => {
    return [
      {
        source: "/docs/deprecated-page",
        destination: "/docs/new-page",
        statusCode: 301,
      },
        source: "/docs/deprecated-page",
        destination: "/docs/new-page",
        statusCode: 302,
      },
    ];
  },
});
*/
