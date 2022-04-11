const {API_URL, ai_token} = require('../config/config.json');
const fetch = require('node-fetch');


async function ai_Talk(message)
{
    let args = message.content.slice(6).split(/ +/);
    let sayMessage = args.join(" ");

    const payload = {
        inputs: {
            text: sayMessage
        }
    };
    // form the request headers with Hugging Face API key
    const headers = {
        'Authorization': 'Bearer ' + ai_token
    };
    
    // set status to typing
    message.channel.startTyping();
    // query the server
    const response = await fetch(API_URL, {
        method: 'post',
        body: JSON.stringify(payload),
        headers: headers
    });

    const data = await response.json();
    let botResponse = '';
    if (data.hasOwnProperty('generated_text')) {
        botResponse = data.generated_text;
    } else if (data.hasOwnProperty('error')) { // error condition
        botResponse = data.error;
    }

    // stop typing
    message.channel.stopTyping();
    // send message to channel as a reply
    if (botResponse == "Model melon422/DialoGPT-medium-MelonBot2 is currently loading")
    {
        message.channel.send("Hold on! I've just woken up! Let me think for a second!");
        message.channel.send("!`Model wlux/DialoGPT-medium-marin is currently loading`! __*please wait a few seconds...*__");
    }else
    {
        message.channel.send(botResponse);
    }
}

module.exports = {ai_Talk};