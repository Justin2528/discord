const Discord = require("discord.js");

exports.run = async (client, message, args, ops) => {
    let ownerID = ('389428200565899264')
if (message.author.id !== ownerID) return message.channel.send("You are not authorized to use this command.");
let string = '';

client.guilds.forEach(guild => {
    string += '***Server Name:*** ' + guild.name + '\n';

})

let botembed = new Discord.MessageEmbed()
    .setColor("#000FF")
    .addField("Bot is On ", string)
    .setTimestamp()
    .setFooter("Command Ran By: " + message.author.username, message.author.displayAvatarURL());
message.channel.send(botembed);
}
