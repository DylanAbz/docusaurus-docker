# ⚙️ Commandes essentielles

## 🔨 Build
La commande `docker build` permet de construire une image Docker à partir d'un `Dockerfile`.
- L'option `-t` permet de donner un nom et une balise (tag) à l'image.

```bash
docker build . -t mon-app
```
### Options utiles :
- `--no-cache` : Force la reconstruction complète sans utiliser le cache.
- `--build-arg <ARG>=<VALUE>` : Permet de passer des arguments au moment de la construction.

Exemple avec argument :
```bash
docker build . -t mon-app --build-arg ENV=production
```

---

## ▶️ Run
La commande `docker run` permet de démarrer un conteneur à partir d'une image Docker.
- L'option `-p` mappe un port de l'hôte vers un port du conteneur.
- L'option `-d` exécute le conteneur en arrière-plan (mode détaché).

```bash
docker run -p 49160:8080 -d mon-app
```

### Options utiles :
- `--name <nom>` : Donne un nom au conteneur pour le retrouver facilement.
- `-e <VAR>=<VALUE>` : Définit des variables d'environnement pour le conteneur.
- `--rm` : Supprime automatiquement le conteneur une fois arrêté.

Exemple avec un nom et une variable d'environnement :
```bash
docker run -p 49160:8080 -d --name mon-conteneur -e NODE_ENV=production mon-app
```

---

## 🛠 Exec dans un conteneur
La commande `docker exec` permet d'exécuter une commande dans un conteneur en cours d'exécution.
- L'option `-it` active le mode interactif et le terminal.

```bash
docker exec -it <container_id> /bin/bash
```

### Options utiles :
- `--user <user>` : Exécute la commande en tant qu'utilisateur spécifique.
- `--workdir <path>` : Définit un répertoire de travail pour la commande.

Exemple pour exécuter une commande en tant qu'utilisateur `root` :
```bash
docker exec -it --user root <container_id> /bin/bash
```

---

## 🧼 Supprimer conteneurs & images
Ces commandes permettent de nettoyer les conteneurs et images inutilisés.

### Lister les conteneurs
```bash
docker ps -a        # Liste tous les conteneurs (actifs et arrêtés)
```

### Supprimer un conteneur
```bash
docker rm <id>      # Supprime un conteneur spécifique
```

### Supprimer une image
```bash
docker rmi <img>    # Supprime une image spécifique
```

### Options utiles :
- `docker rm -f <id>` : Force la suppression d'un conteneur en cours d'exécution.
- `docker rmi -f <img>` : Force la suppression d'une image utilisée par un conteneur.

---

## 🧹 Nettoyage global
Pour supprimer tous les conteneurs arrêtés, images inutilisées, volumes et réseaux non utilisés :
```bash
docker system prune -a
```

### Options utiles :
- `-a` : Supprime toutes les images inutilisées, pas seulement celles sans conteneur associé.
- `--volumes` : Supprime également les volumes non utilisés.

Exemple complet :
```bash
docker system prune -a --volumes
```
