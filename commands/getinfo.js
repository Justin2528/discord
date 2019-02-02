const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.reply('Please Mention Someone to get their ID!');

    if (user) {

        const OMG = new Discord.MessageEmbed()
        .setThumbnail(message.guild.avatarURL)
        .setTitle('User Info')
        .setDescription(`User name: ${user} | User ID: ${user.id}`)
		.addField("Roles:", user.roles.map(roles => `${roles.name}`).join(', '), true)
        .setFooter(`Requested By: ${message.author.username}#${message.author.discriminator} | ${message.guild.name}`, message.author.displayAvatarURL())
        .setColor(`BLUE`)
        message.channel.send(OMG);
    

    }
}