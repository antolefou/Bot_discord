const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('information on the server'),
    async execute(interaction) {
        await interaction.reply(`oui Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nServer id: ${interaction.guild.id}`);
    },
};