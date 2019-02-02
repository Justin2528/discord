const Discord = require("discord.js");
const db = require('quick.db');

exports.run = (client, msg, args) => {
    db.fetch(`guild_${msg.guild.id}`).then(i => {
        var embed = new Discord.MessageEmbed()
            .setTitle('Server options')
            .setDescription(`Prefix: \`${i.prefix}\``)
            .setFooter('Change with ' + i.prefix + 'options prefix <value>');
        if (!args[0]) return msg.channel.send(embed)
        if (args[0] == "prefix") {
            if (!args[1]) return msg.channel.send('Please include a value.')
            if (args[1].length >= 5) return msg.channel.send('That value is too long! Try something lower than 5!')
            db.set(`guild_${msg.guild.id}`, args[1], {
                target: '.prefix'
            })
            msg.channel.send(`Changed the prefix to \`${args[1]}\``)
        } else {

        }
    }).catch(err => {
        console.error(err);
        msg.channel.send('Retry');
        db.set(`guild_${msg.guild.id}`, {
            prefix: "-"
        })
    })
}
exports.info = {
    "description": "Change server settings!",
    "name": "Options"
}