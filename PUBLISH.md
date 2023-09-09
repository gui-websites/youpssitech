# Tutoriel de publication du site web

A chaque fois que le code est mis à jour, effectuer les étapes suivantes (beaucoup de modifications auront lieu dans le futur)

- Etape 1: Soyez sur de commit tous les changements.
- Etape 2: Lancer la commande build

```
npm run docker:build
```

- Etape 3: Lancer la commande push (nécéssite d'avoir les accès au docker hub)

```
npm run docker:push
```

- Etape 4: Sur la VM (obtenir les accès) aller au dossier `/srv/www/youpssitech/` et effectuer :

```
docker-compose down
docker-compose up -d
```
