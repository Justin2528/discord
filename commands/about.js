const Discord = require('discord.js');

const client = new Discord.Client();


const moment = require("moment");
require("moment-duration-format");

const { version } = require('discord.js');

exports.run = async (client, message, args, ops) => {

    const p = client.emojis.get('489449963193892864');

    const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

    const lol = new Discord.MessageEmbed()
    .setDescription(`Hey ${message.author}! I'm Super Pixel Bot${p}.\n\n [**Invite this Bot${p}!**](https://discordapp.com/oauth2/authorize?client_id=467240900750475274&scope=bot&permissions=2146958591)\n [**Support Guild**](https://discord.gg/8ARnMJ7) \n[**Donate! <3**](https://www.paypal.me/Justin2528Pro)`)
    .setThumbnail(message.author.displayAvatarURL())
    .setColor("GREEN")
    .addField("• Help Command", "-help :eyes: \n-helpmusic :musical_note:", true)
    .addField(`• Bot version`, `v2.9.3 (pre-release)`, true)
    .addField("• Bot Owner", `<@389428200565899264> JuStIn2528#2211`, true)
    .addField("• Discord.js", `v${version}`, true)
    .addField("• Uptime ", `${duration}`, true)
    .addField("• Node", `${process.version}`, true)
    .addField("• Users", `${client.users.size.toLocaleString()}`, true)
    .addField("• Servers", `${client.guilds.size.toLocaleString()}`, true)
    .addField("• Channels ", `${client.channels.size.toLocaleString()}`, true)
    .addField("• This Server", `${message.guild}`, true)
    .addField("• Support", "want Support? well join the discord server or Dm the bot! ", true)
    .setFooter("Thank You for choosing me <3")
    message.channel.send(lol);

}