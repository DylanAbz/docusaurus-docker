module.exports = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/dockerfile',
        'concepts/images-couches',
      ],
    },
    {
      type: 'category',
      label: 'Commandes',
      items: [
        'commandes/build-run',
        'commandes/docker-compose',
      ],
    },
    {
      type: 'category',
      label: 'Avancé',
      items: [
        'avance/reseaux-volumes',
        'avance/ci-cd',
      ],
    }
  ],
};
