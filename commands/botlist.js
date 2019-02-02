const api = "https://botlist.space/api/bots/467240900750475274"
const snekfetch = require("snekfetch");
const Discord = require("discord.js");

exports.run = async(client, message, args, ops) => {

    snekfetch.get(api).then(r => {
        let body = r.body;

        const embed = new Discord.MessageEmbed()
        .setAuthor("SUPER PIXEL BOT")
        .setDescription(api)
        .setColor("RANDOM");
        
        message.channel.send({embed: embed});
    
    });

}