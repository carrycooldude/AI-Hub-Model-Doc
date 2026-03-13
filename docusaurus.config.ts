import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Qwen3-4B Snapdragon Guide',
  tagline: 'On-device intelligence optimized for Snapdragon',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://carrycooldude.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/AI-Hub-Model-Doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'carrycooldude', // Usually your GitHub org/user name.
  projectName: 'AI-Hub-Model-Doc', // Usually your repo name.

  onBrokenLinks: 'ignore',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Qwen3-4B Guide',
      logo: {
        alt: 'Qwen3 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Deployment Guide',
        },
        {to: '/blog', label: 'Contribution Blog', position: 'left'},
        {
          href: 'https://huggingface.co/qualcomm-ai-hub-community/Qwen3-4B-Instruct-carrycooldude',
          label: 'Hugging Face',
          position: 'right',
        },
        {
          href: 'https://github.com/carrycooldude/Qualcomm-AI-Hub-HF-Models',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Architecture',
              to: '/docs/architecture',
            },
            {
              label: 'Export Guide',
              to: '/docs/export-guide',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Qualcomm AI Hub',
              href: 'https://aihub.qualcomm.com/',
            },
            {
              label: 'Hugging Face Community',
              href: 'https://huggingface.co/qualcomm-ai-hub-community',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/carrycooldude/Qualcomm-AI-Hub-HF-Models',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} carrycooldude. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
