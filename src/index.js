// ==== Note ===================================================================
// Packages in json file are these versions for the server:
//  "discord.js": "^12.0.1",
//  "express": "^4.17.3",
//  "node-fetch": "^2.6.1"

// ==== Includes ===============================================================
const Discord = require('discord.js');
const {token} = require('../config/config.json');
const keepAlive = require("./server")
const client = new Discord.Client();

const { talk } = require('../func/functionality.js');
const { ai_Talk } = require('../func/ai_response.js');


// ==== Check if ready =========================================================
client.once('ready', () => 
{
    //Start up bot: node index.js
    //Shut down bot: ^C
    console.log('Marin is Ready!')
});


// ==== Message Handler ========================================================
client.on('message', async message =>
{
    //If the message is not from a bot
    if(message.author.bot) return;
    let member = message.mentions.users.first();

    // form the payload
    if((message.mentions.users.has(client.user.id) || 
        message.content.includes(`marin`) || message.content.includes(`Marin`) || 
        message.content.includes(`MARIN`)) && !message.author.bot){
        ai_Talk(message);
    }else{
        talk(client, message, member);
    }
    
})

keepAlive()
client.login(token);