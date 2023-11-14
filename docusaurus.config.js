const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const codeTheme = require("./src/theme/codeTheme");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Multiwoven',
  tagline: 'Data Dinosaurs',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  stylesheets: [
    {
      href: './src/css/tailwind.css',
      type: 'text/css',
    },
  ],

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      {
        docs: {
          routeBasePath: '/', // Serve docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
        },
        api: {
          path: "./swagger.yaml",
          routeBasePath: "/api",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Add the head array here
      head: [
        [
          'link',
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
          },
        ],
      ],
      navbar: {
        logo: {
          href: '/',
          src: '/logo/light.png',
          srcDark: '/logo/dark.png',
          alt: 'Multiwoven Docs',
        },
        items: [
          {
            label: 'Home',
            to: '/',
            className: 'guides-top-header',
          },
          {
            label: 'API Documentation',
            to: '/api',
          },
        ],
      },
      prism: {
        theme: codeTheme,
        additionalLanguages: ["sql","ruby", "php", "java"],
      },
    }),
});
