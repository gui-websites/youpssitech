# Tutoriel de publication du site web

A chaque fois que le code est mis à jour, effectuer les étapes suivantes.

- Etape 1: Soyez sur de commit tous les changements.
- Etape 2: Lancer la commande build

```bash
npm run docker:build
```

- Etape 3: Lancer la commande push (nécéssite d'avoir les accès au docker hub)

```bash
npm run docker:push
```

- Etape 4: Sur la VM (obtenir les accès) aller au dossier `/srv/www/youpssitech/` et effectuer :

```bash
docker-compose down
docker-compose up -d
```

L'objectif à terme est de remplacer les étapes 2 à 4 par une action github automatique.
