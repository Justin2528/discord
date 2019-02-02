const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    message.delete();
    if(args[0] == "help"){
      message.reply("Usage: -report <user> <reason>");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send(`Can't found that user.`)
    let rreason = args.join(" ").slice(22);
    if(!rreason) return message.channel.send('Without Reason???')

    let reportEmbed = new Discord.MessageEmbed()
    .setDescription("Reports")
    .setColor('ORANGE')
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
    reportschannel.send(reportEmbed);

}