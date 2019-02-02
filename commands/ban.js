const Discord = require("discord.js");

exports.run = async(client, message, args, ops) => {

    message.delete();

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry, but you do not have valid permissions! If you believe this is an error, contact an staff.")

    const modlog = message.guild.channels.finds(channel => channel.name === 'logs');
    if (!modlog) return message.channel.send("Please Create a 'logs' channel!")

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!bUser) return message.channel.send("Please Mention Someone to ban!")

    let breason = args.join(" ").slice(22);


    if (bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("Hmm... That Guy can ban user too!");

    message.guild.member(bUser).ban(breason);

    let banEmbed = new Discord.MessageEmbed()
    .setDescription("Ban Log")
    .setColor("#e56b00")
    .addField("Banned By:", message.author)
    .addField("Banned User:", `${bUser} With ID ${bUser.id}`)
    .addField("Banned In:", message.channel)
    .addField("Banned When:", message.createdAt)
    .addField("Reason:", breason);
    modlog.send(banEmbed);
}


