const { SlashCommandBuilder } = require('@discordjs/builders');
const {changeActualDir} = require("../serveur");

// make the map
const LENGTH_MAP = 6;
const CARAC_APPLE = "@";
const CARAC_SNAKE = "#";

var snake = [[3,3]] ;
var posApple;
var tabMapMaked = makeMap();

function sleep(seconds) {
    return new Promise(r => setTimeout(r, seconds * 1000))
}

function makeMap(){
    let tabMap = {};
    for (let i = 0 ; i < LENGTH_MAP ; i++){
        for (let j = 0 ; j < LENGTH_MAP ; j++){
            // tabMap[i][j] = ' '
        }
    }
    return tabMap
}


function placeApple(){
    let r1;
    let r2;
    do {
        r1 = Math.floor(Math.random() * LENGTH_MAP);
        r2 = Math.floor(Math.random() * LENGTH_MAP);
    } while ( tabMapMaked[r1][r2] === "#")



    return tabMapMaked[r1][r2] = "@"
}

function placeSnake(){
    for (let k = 0; k < snake.length; k++){
        tabMapMaked[snake[k][0]][snake[k][1]] = "#"
    }
}

function moveSnake(){

    for(let k = snake.length-1 ; k > 0 ; k++){
        snake[k] = snake[k-1]
    }

    switch (changeActualDir()) {
        case "right":
            snake[0][1] = snake[0][1] + 1 % LENGTH_MAP
            break;
        case "left":
            snake[0][1] = snake[0][1] - 1 % LENGTH_MAP
            break;
        case "up":
            snake[0][0] = snake[0][1] + 1 % LENGTH_MAP
            break;
        case "down":
            snake[0][0] = snake[0][1] - 1 % LENGTH_MAP
            break;
    }

}

function eatApple(){
    // if snake

}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play_snake')
        .setDescription('jouer à snake avec les flèche directionnel'),
    async execute(interaction) {
        //
        // let fetched;
        // do {
        //     fetched = await interaction.channel.messages.fetch({limit: 100});
        //     await interaction.channel.bulkDelete(fetched);
        // }
        // while(fetched.size >= 2);
        //
        // interaction.channel.bulkDelete(100)
        //     .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
        //     .catch(console.error);
        // // console.log("oui "+changeActualDir())
        // await interaction.reply(changeActualDir());
        //
        let f = 0;
        placeApple()
        placeSnake()
        await interaction.reply(tabMapMaked);
        // while ( f++ < 10){
        //     await sleep(1)
        //     moveSnake()
        //     await interaction.editReply(tabMapMaked)
        // }





    },
};