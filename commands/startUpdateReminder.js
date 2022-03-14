const { SlashCommandBuilder } = require('@discordjs/builders');

function sleep(seconds) {
    return new Promise(r => setTimeout(r, seconds * 1000))
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('start_update_reminder')
        .setDescription('make a reminder to the team to give information on his advancement of the project')
        .addNumberOption(option =>
            option.setName("number_of_repetition")
                .setDescription("Number of time the bot has to send the message")
                .setRequired(true)
        )
        .addNumberOption(option =>
            option.setName("number_of_second")
                .setDescription("Number of seconds between 2 message")
                .setRequired(true)
        ),
    async execute(interaction) {

        let number_of_repetition = interaction.options.get("number_of_repetition")
        console.log(number_of_repetition)
        for (let i = 0; i < number_of_repetition.value; i++){
            await sleep(1) // see above
            interaction.channel.send("hello, bunjur la fwrance ")
                .then(message => console.log(`Sent message: ${message.content}`))
                .catch(console.error);
        }

    },
};




