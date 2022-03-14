const { SlashCommandBuilder } = require('@discordjs/builders');
const {changeActualDir} = require("../serveur");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('affiche_direction')
        .setDescription('test_affiche_dir_snake'),
    async execute(interaction) {
        // console.log("oui "+changeActualDir())
        await interaction.reply(changeActualDir());
    },
};