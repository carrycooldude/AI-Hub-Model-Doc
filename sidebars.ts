import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Deployment Guide',
      items: ['architecture', 'export-guide', 'contribution-workflow'],
    },
  ],
};

export default sidebars;
