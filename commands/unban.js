const Discord = require("discord.js")


exports.run = (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry, but you do not have valid permissions! If you believe this is an error, contact an staff.")
    const user = args[0];
    const modlog = message.guild.channels.find(channel => channel.name === 'logs');
    if (!modlog) return message.channel.send("Please Create a 'logs' channel!");
    
    if (!user) return message.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);
    
    message.guild.members.unban(user);
    modlog.send(`Unbanned <@${user}> with id ${user} By ${message.author}`)
};