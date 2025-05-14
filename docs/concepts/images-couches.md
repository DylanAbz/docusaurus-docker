# 🧩 Fonctionnement des images Docker

Une image Docker est composée de **couches empilées** (layers), chacune correspondant à une instruction du `Dockerfile`.

### Exemple de couche :
```Dockerfile
RUN apt-get update
```

Chaque couche est :
- **Immutable**
- **Cachable**
- **Réutilisable** entre les builds

### 📌 Optimisation :
- Grouper les RUN :
```Dockerfile
RUN apt-get update && apt-get install -y git curl
```
- Nettoyer dans la même couche :
```Dockerfile
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
```
