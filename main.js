const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
const { Routes } = require('discord-api-types/v9');


// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });



// ################## les commandes ####################
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // Set a new item in the Collection
    // With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command);
}



client.on('interactionCreate', async interaction => {
    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});



// ################## si on a besion de quelque commandes uniquement ##################

// vérifie si les commandes sont bien enregistrer dans deploy-commands
// et quelle commande on execute
// client.on('interactionCreate', async interaction => {
//     if (!interaction.isCommand()) return;
//
//     const { commandName } = interaction;
//
//     if (commandName === 'ping') {
//         await interaction.reply('Pong!');
//     } else if (commandName === 'server') {
//         await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nServer id: ${interaction.guild.id}`);
//     } else if (commandName === 'user') {
//         await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
//     }
// });

// ############################ les intéractions ##################

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}



// Login to Discord with your client's token
client.login(token);