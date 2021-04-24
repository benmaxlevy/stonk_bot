const Discord = require("discord.js"),
    client = new Discord.Client();

require("dotenv").config();

client.on("message", (message) => {
    if(message.content.includes(process.env.prefix) && message.author.username != "TSPL Discord Bot - Ben")
    {
        if(!message.member.roles.cache.some((role) => role == process.env.role))
        {
            message.reply("bad stonker! You don't the analyst role!");
        } else if(message.member.roles.cache.some((role) => role == process.env.role))
        {
            const split_message = message.content.toUpperCase().split(" ");
            if(split_message[1].includes("STARTALERT"))
            {
                if(split_message[2] == null)
                {
                    message.reply(`please re-send the same message, but with \`{symbol} {asset type} {when to get in} {stop loss} {any notes}\` after \`!ben startalert\`.`);
                } else {
                    const embed = new Discord.MessageEmbed()
                        .setColor("#0099ff")
                        .setTitle("New Alert!")
                        .setImage("https://compote.slate.com/images/926e5009-c10a-48fe-b90e-fa0760f82fcd.png?width=1200&rect=680x453&offset=0x30")
                        .addFields(
                            {name: "Symbol", value: split_message[2]},
                            {name: "Asset Type", value: split_message[3]},
                            {name: "Entrance", value: split_message[4]},
                            {name: "Stop Loss", value: split_message[5]},
                            {name: "Notes", value: message.content.slice(message.content.indexOf(split_message[6]))}
                        )
                        .setFooter("The above references an opinion and is for information purposes only. It is not intended to be investment advice. Seek a duly licensed professional for investment advice.");
                    client.channels.cache.get(process.env.channel).send("@everyone");
                    client.channels.cache.get(process.env.channel).send(embed);
                }
            }
        } 
    }
});

client.login(process.env.token);