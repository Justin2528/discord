const Discord = require("discord.js");

exports.run = async (client, message, args, ops) => {

    const omg = new Discord.MessageEmbed()
    .setImage("https://cdn.discordapp.com/attachments/487889635012509706/494445943966531584/omg.gif");
    message.channel.send(omg)

}