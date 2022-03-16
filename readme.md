### Bot Discord 

originellement créé pour rappeller à l'équipe de faire un point sur l'avancements des projets de groupe tout les X jours 

### Ajout de commande 
Ne pas oublier de relancer deploy-commands.js lorsque l'on ajoute une commande 
```shell
node deploy-commands.js
```

### Mise en place 
Ajouter un fichier config.json avec le token du bot discord

exemple de code : 
```json
{
  "clientId": "Votre_ID",
  "guildId": "ID_du_serveur_Discord",
  "token": "Votre_token"
}
```

## Jouer dans le tchat Discord (Le bot n'est pas encore hébergé sur un serveur) 
### Requis
Télécharger et installer Better Discord 
Ajouter le plugin à Discord : Bot_discord/better_discord_plugins/gameKeyLog.plugin.js

### Utiilisation
Démarrer le Bot en local 
Utiliser la commande /playSnake et jouez au jeux
