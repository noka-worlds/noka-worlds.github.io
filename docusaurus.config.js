// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Noka worlds',
  tagline: 'The best time to plant a tree was 20 years ago. The second best time is now.',
  url: 'https://noka-worlds.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  projectName: 'noka-worlds.github.io',
  deploymentBranch:'main',
  favicon: '/img/logo.png',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Noka-worlds', // Usually your GitHub org/user name.

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
       /**@type {import('@docusaurus/preset-classic').Options} */
      ({
        docs:{
          sidebarPath: require.resolve('./sidebars.js'),
        },
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
        title: 'Noka worlds',
        items: [
          /*{
            to: 'travel', 
            label: 'Travel', 
            position: 'left'
          },*/
          {
            to: 'learning', 
            label: 'Learning', 
            position: 'left',
            activeBasePath: "learning",
          },
          {
            to: 'coding', 
            label: 'Coding', 
            position: 'left'
          },
          {
            to: 'projects', 
            label: 'Projects', 
            position: 'left'
          },
          {
            href: 'https://github.com/potatochick2020',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contact Me: ',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/potatochick2020',
              },
              {
                label: 'Email (with public key)',
                href: 'coding/email-me',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust'],
      },
    }),
    
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'travel-blog',
        routeBasePath: 'travel',
        path: './Blogs/travel',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'projects-docs',
        routeBasePath: 'projects',
        path: './Blogs/projects',
        sidebarPath: require.resolve('./sidebarProjects.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learning-blog',
        routeBasePath: 'learning',
        path: './Blogs/learning',
        sidebarPath: require.resolve('./sidebarLearning.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'coding-blog',
        routeBasePath: 'coding',
        path: './Blogs/coding',
      },
    ],
  ],

};

module.exports = config;
