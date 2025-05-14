module.exports = {
  title: 'Docker - Guide Complet',
  tagline: 'Maîtrise Docker de A à Z',
  url: 'https://votre-site.com',
  baseUrl: '/',
  favicon: 'img/docker.png',
  organizationName: 'votre-github',
  projectName: 'docker-docs',
  themeConfig: {
    navbar: {
      title: 'Docker Docs',
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        { href: 'https://github.com/votre-github/docker-docs', label: 'GitHub', position: 'right' },
      ],
    },
  },
  presets: [
    ['@docusaurus/preset-classic', {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
      },
    }],
  ],
};
