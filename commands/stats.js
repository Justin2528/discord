const Discord = require('discord.js');

module.exports.run = async (client, message, args, ops) => {

if(message.author.id !== "389428200565899264") return message.channel.send("You may not use this command because you are not a developer");

if(args[0] == "online") return client.user.setStatus("online");

if(args[0] == "invisible") return client.user.setStatus("invisible");

if(args[0] == "dnd") return client.user.setStatus("dnd")

if(args[0] == "idle") return client.user.setStatus("idle");

}