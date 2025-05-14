# 🔁 CI/CD avec Docker

Utilise Docker dans tes pipelines pour des builds reproductibles.

## Exemple GitHub Actions :
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: docker build . -t mon-app
```

## Pourquoi c’est puissant ?
- Build en environnement contrôlé
- Déploiement automatisé
