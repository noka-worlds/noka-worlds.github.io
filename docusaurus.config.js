// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Noka-worlds',
  tagline: 'Dinosaurs are cool',
  url: 'https://noka-worlds.github.com',
  baseUrl: '/',
  projectName: 'noka-worlds.github.com',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Noka-worlds', // Usually your GitHub org/user name.
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Noka Worlds',
        items: [
          {
            to: '/school/', 
            label: 'School', 
            position: 'left'
          },
          {
            to: '/life/', 
            label: 'Life', 
            position: 'left'
          },
          {
            to: '/travel/', 
            label: 'Travel', 
            position: 'left'
          },
          {
            href: 'https://github.com/potatochick200',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'All my Github link',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Noka Worlds, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
        [
          '@docusaurus/plugin-content-blog',
          {
            id: '1',
            path: './school',
            routeBasePath: 'school',
          },
        ],
        [
          '@docusaurus/plugin-content-blog',
          {
            id: '2',
            path: './life',
            routeBasePath: 'life',
          },
        ],
        [
          '@docusaurus/plugin-content-blog',
          {
            id: '3',
            path: './travel',
            routeBasePath: 'travel',
          },
        ]
      ]
};

module.exports = config;