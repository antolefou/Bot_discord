const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageActionRow, MessageButton} = require("discord.js");

function sleep(seconds) {
    return new Promise(r => setTimeout(r, seconds * 1000))
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('show_buttons')
        .setDescription('make a reminder to the team to give information on his advancement of the project'),
    async execute(interaction) {

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('primary')
                    .setLabel('Primary')
                    .setStyle('PRIMARY'),
            );

        await interaction.reply({ content: 'd', components: [row] });

    },
};