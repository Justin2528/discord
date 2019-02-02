const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const lol = new Discord.MessageEmbed()
    .setDescription(`[invite the bot!](https://discordapp.com/oauth2/authorize?client_id=467240900750475274&scope=bot&permissions=2146958591)`)
    .setColor('RANDOM')
    message.channel.send(lol);
}
