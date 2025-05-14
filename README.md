# Docker X Docusaurus

Ce projet propose une documentation Docusaurus, sur Docker, exécutable dans un conteneur Docker.

## Lancement de la documentation

Placez vous dans le répertoire du projet et exécutez la commande suivante :

```bash
docker compose up
```

Cela va construire l'image Docker et lancer le conteneur. La documentation sera accessible à l'adresse suivante : [http://localhost:3000](http://localhost:3000).

## Arrêt de la documentation
Pour arrêter le conteneur, utilisez la commande suivante :

```bash
docker compose down
```

