const { prefix } = require('../config/config.json');

// ==== Context ================================================================
let damnContext = ["damn", "Damn", "nigga", "Nigga", "nigger", "Nigger", "sex"];
let cryContext = ["cry", "cry about it", "cries", "sad", "pekopain"]
let moneyContext = ["money", "$", "I will pay", "free money", "I'll pay", "cash", "giveaway", "rich"]
let youContext = ["stupid bot", "your gay", "you're gay", "ur mum gay", "your mum gay", "ur gay", "suck my dick", "you suck", "u suck", "fuck u", "fuck you", "fuck yourself", "fuck urself"]

let replies = ["bruh", "nice", "wtf"];


// Create a function
function talk(client, message, member) {
    if(message.content.startsWith(`Kiss`)|| message.content.startsWith(`kiss`)){
        message.channel.send("(^3^) :heart: " + member, { files: ["./images/kiss.gif"] })
    } 

    // Use spell
    if(message.content.startsWith(`Use magic spell on`)){
        message.channel.send(":ramen: " + member + " :ramen:", { files: ["./images/noodle.jpg"] })
    } 

    // Cast magic
    if(message.content.startsWith(`Cast magic on`)){
        message.channel.send(":star_of_david: ~ " + member + " ~ :star_of_david:", { files: ["./images/hiphop.jpg"] })
    }

    // You're mine
    if(message.content.startsWith(`You're mine`)){
        message.channel.send(member + " is taken", { files: ["./images/1234.png"] })
    }

    // How cool is
    if(message.content.startsWith(`How cool is`))
    {
        let percentage = Math.floor(Math.random() * 100);
        if(percentage <= 34){
            path = "./images/jojo.gif";
        }else if (percentage <= 67){
            path = "./images/cool.gif";
        }else{
            path = "./images/uncool.gif";
        }  
        message.channel.send(member + " is " + percentage + "% cool :sunglasses::thumbsup:", { files: [path] })
    }

    // Rock
    for(let i = 0; i < damnContext.length; i++){
        if(message.content.includes(damnContext[i])){
            let index = Math.floor(Math.random() * 3);
            message.channel.send(replies[index], {files: ["./images/boob.gif"] })
        }
    }

    // Cry
    for(let i = 0; i < cryContext.length; i++){
        if(message.content.includes(cryContext[i])){
            message.channel.send({files: ["./images/cry.gif"] })
        }
    }

    // money
    for(let i = 0; i < moneyContext.length; i++){
        if(message.content.includes(moneyContext[i])){
            message.channel.send(":gun: I heard there's money involved", {files: ["./images/money.gif"] })
        }
    }

    // gaming
    if(message.content.includes(`gaming`)){
        message.channel.send({files: ["./images/gaming.gif"] })
    }

    // mention
    if(message.mentions.users.has(client.user.id) && !message.author.bot){
        let caseNum = Math.floor(Math.random() * 4);
        switch(caseNum){
            case 0:
                message.channel.send("You called?:wave:");
                break;
            case 1:
                message.channel.send("Yes?", {files: ["./images/mention.png"]})
                break;
            case 2:
                message.channel.send("Looking for me?", {files: ["./images/imhere.gif"]})
                break;
            case 3:
                message.channel.send("What?", {files: ["./images/iheardmoney.gif"]})
                break;
        }
    }

    // you
    for(let i = 0; i < youContext.length; i++){
        if(message.content.includes(youContext[i])){
            message.channel.send("no u", { files: ["./images/you.gif"] })
        }
    }

    // Happy birthday
    if(message.content.startsWith(`happy birthday`) || message.content.startsWith(`Happy birthday`) || message.content.startsWith(`HAPPY BIRTHDAY`)){
        message.channel.send(":birthday: " + member.displayName + " :birthday:", { files: ["./images/happybirthday.gif"] })
    } 

    // command that will make the bot say something we want startin with the prefix + "say"
    if(message.content.startsWith(`${prefix}say`)){
        // get the rest of the message after the prefix and 'say'
        let args = message.content.slice(prefix.length + 4).split(/ +/);
        // get the first argument
        let sayMessage = args.join(" ");
        // send the message
        message.channel.send(sayMessage);
    }

    // fuck off
    if(message.content.includes(`Fuck off`) || message.content.includes(`fuck off`)){
        message.channel.send('meanie ;;-;;');
    }

    // 21
    if(message.content.includes(`9 + 10`) || message.content.includes(`9+10`)){
        message.channel.send('21 :sunglasses:');
    }
    // ==========================================================
}

module.exports = {talk};