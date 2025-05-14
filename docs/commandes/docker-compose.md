# 📦 Docker Compose

Permet de lancer plusieurs services avec un seul fichier `docker-compose.yml`.

### Exemple :
```yaml
version: "3"
services:
  web:
    build: .
    ports:
      - "3000:3000"
  db:
    image: mongo
```

## Commandes utiles :
```bash
docker-compose up -d
docker-compose down
```

## 🧠 Avantages :
- Multi-conteneurs
- Variables d’environnement
- Réseaux automatiques



## Exemple concret

```yaml
version: "3.8"

services:
  backend:
    build: ./backend
    volumes:
      - ./backend:/usr/src/app
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=development
    depends_on:
      - db

  frontend:
    build: ./frontend
    volumes:
      - ./frontend:/usr/src/app
    ports:
      - "3000:3000"
    environment:
      - CHOKIDAR_USEPOLLING=true

  db:
    image: mongo:6
    restart: always
    volumes:
      - db-data:/data/db
    ports:
      - "27017:27017"

volumes:
  db-data:

networks:
  default:
    driver: bridge
```

## Détails des services

Imaginons une application full-stack :
- **Backend Node.js** dans `./backend` :
  - Expose l’API sur le port 5000.
  - Dépend de la base de données `db`.
- **Frontend React** dans `./frontend` :
  - Démarre le serveur de développement sur le port 3000.
- **Base de données MongoDB** :
  - Persistance des données via le volume `db-data`.

### Explications

- `build: ./backend` et `build: ./frontend` :
  Utilise les Dockerfile présents dans chaque dossier pour construire l’image.
- `volumes` :
  Monte le code local dans le conteneur pour permettre le *hot-reload* en développement.
- `ports` :
  Expose les ports internes du conteneur vers l’hôte.
- `environment` :
  Définition de variables d’environnement pour les services.
- `depends_on` :
  Assure que `db` démarre avant `backend`.
- `volumes` (section globale) :
  Déclare un volume nommé `db-data` pour la persistance.
- `networks` :
  Tous les services utilisent par défaut un réseau `bridge` isolé.

## Commandes utiles

```bash
# Démarrer en arrière-plan
docker-compose up -d

# Arrêter et supprimer les conteneurs
docker-compose down

# Recréer les services en forçant le rebuild
docker-compose up -d --build

# Afficher les logs
docker-compose logs -f
```

## ✅ Avantages de Docker Compose

- Simplification de la gestion multi-conteneurs
- Variables d’environnement centralisées dans un même fichier
- Isolation réseau automatique entre services
- Gestion de volumes et dépendances explicites
