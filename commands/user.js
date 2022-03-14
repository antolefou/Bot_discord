const { SlashCommandBuilder } = require('@discordjs/builders');

function sleep(seconds) {
    return new Promise(r => setTimeout(r, seconds * 1000))
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('information of the user'),
    async execute(interaction) {
        await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
        // await interaction.deferReply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nServer id: ${interaction.guild.id}`)
        //     .then(console.log)
        //     .catch(console.error)

        await sleep(5);

        await interaction.deleteReply()
            .then(console.log)
            .catch(console.error);
    },
};




