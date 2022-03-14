const fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');


const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}




// ################## si on a besion de quelque commandes uniquement ##################@
// const commands = [
//     new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
//     new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
//     new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
// ]
//     .map(command => command.toJSON());

const data = new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Replies with your input!')
    .addStringOption(option =>
        option.setName('input')
            .setDescription('The input to echo back')
            .setRequired(true));



const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();