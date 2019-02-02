const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const lol = new Discord.MessageEmbed()
    .setDescription('Upvote me in [botlist.space](https://botlist.space/view/467240900750475274) [Discord bots groups](https://discordbots.group/bot/467240900750475274/vote)')
    .setColor('GREEN')
    message.channel.send(lol);
}