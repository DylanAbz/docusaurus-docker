# 🌐 Réseaux & Volumes Docker

## Réseaux
- `bridge` : défaut pour conteneurs sur la même machine
- `host` : pas d’isolation réseau
- `overlay` : pour Docker Swarm

## Volumes
- `anonymes` : gérés par Docker
- `nommés` : réutilisables
- `montés` : lien direct vers ton système de fichiers

### Exemple :
```bash
docker run -v /host/data:/container/data my-image
```
