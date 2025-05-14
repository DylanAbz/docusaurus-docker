# 🧱 Dockerfile - Structure de base

Le `Dockerfile` définit comment construire une image.

### Exemple :

```Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
```

## Explication :
- `FROM` : Image de base
- `WORKDIR` : Dossier de travail
- `COPY` : Copie des fichiers depuis l’hôte
- `RUN` : Commandes exécutées au build
- `EXPOSE` : Port exposé
- `CMD` : Commande lancée à l'exécution

### 💡 Bonnes pratiques
- Mettre les dépendances d'abord pour **maximiser le cache**
- Ajouter un `.dockerignore`
- Privilégier les images **officielles ou vérifiées**

