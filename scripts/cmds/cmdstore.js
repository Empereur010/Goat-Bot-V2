const axios = require("axios");



module.exportations = {

  configuration: {

    nom : 'cmdstore',

    version: '1.0',

    auteur : 'Vex_Kshitiz',

    rôle: 2,

    shortDescription : « magasin de commandes »,

    longDescription : « magasin de commandes toutes créées par kshitiz »,

    catégorie : « utilitaire »,

    guide: {

      fr: 'Pour afficher les commandes : {p}cmdstore\nPour paginer : {p}cmdstore {page}\nPour rechercher : {p}cmdstore {search}'

    }

  },



  onStart : fonction asynchrone ({ api, événement, args, message }) {

    essayer {

      laissez page = 1;

      laissez searchQuery = "";



      if (args.length === 1 && !isNaN(parseInt(args[0]))) {

        page = parseInt(args[0]);

      } sinon si (args.length === 1 && typeof args[0] === 'string') {

        requête de recherche = args[0];

      } else if (args.length === 2 && args[0] === 'recherche' && typeof args[1] === 'chaîne') {

        requête de recherche = args[1];

      }



      const réponse = wait axios.get("https://cmd-store.vercel.app/kshitiz");

      commandes const = réponse.données ;



      laissez filteredCommands = commandes ;

      si (requête de recherche) {

        Commandes filtrées = commandes.filter(cmd => cmd.cmdName.toLowerCase().includes(searchQuery.toLowerCase()));

      }



      const startIndex = (page - 1) * 10;

      const endIndex = page * 10;

      const paginatedCommands = filteredCommands.slice(startIndex, endIndex);



      laissez replyMessage = "";

      commandespaginées.forEach(cmd => {

        message de réponse += `

        𝗜𝗗:${cmd.id}

        NOM:${cmd.cmdName}

        INFO:${cmd.codeLink}

        Remarque : ${cmd.description}

      ----------------------------------------------` ;

      });



      si (réponseMessage === "") {

        replyMessage = "Aucune commande trouvée.";

      }



      message.reply(replyMessage, (err, info) => {

        global.GoatBot.onReply.set(info.messageID, {

          nom de commande : « cmdstore »,

          messageID : info.messageID,

          auteur : event.senderID,

          commandes,

        });

      });

    } catch (erreur) {

      console.error(erreur);

      message.reply("Une erreur s'est produite lors de la récupération des commandes.");

    }

  },



  onReply : fonction asynchrone ({ api, événement, réponse, args, message }) {

    const {author, commandName, commands} = Répondre;



    si (event.senderID !== auteur || !commandes) {

      retour;

    }



    const commandID = parseInt(args[0], 10);



    si (isNaN(commandID) || !commands.some(cmd => cmd.id === commandID)) {

      message.reply("Entrée non valide.\nVeuillez fournir un ID de commande valide.");

      retour;

    }



    const selectedCommand = commandes.find(cmd => cmd.id === commandID);



    laissez replyMessage = `

    𝗜𝗗:${selectedCommand.id}

    Exemple : ${selectedCommand.cmdName}

    Remarque : ${selectedCommand.codeLink}

    Remarque : ${selectedCommand.description}`;



    message.réponse(réponseMessage);

    global.GoatBot.onReply.delete(événement.messageID);

  },

  }
