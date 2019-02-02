const superagent = require('superagent');
const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {

try {
   function clean(text) {
      if (typeof(text) === 'string')
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
      else
        return text;
    }
    const Omg = new Discord.MessageEmbed()
    .setTitle(`Thank you!`)
    .setDescription(`**${message.author.username}**#${message.author.discriminator} Thank you for the Suggestion!`)
    .setFooter(`Requested by: ${message.author.username}`, message.author.displayAvatarURL())
    .setColor("GREEN")
    const bug = args.join(" ")
    if (!bug) return message.channel.send('Suggest for **v3 (release)** please. ');
    const content = clean(`**${message.author.username}**#${message.author.discriminator} (${message.author.id}) Send us Suggestion :\n${bug}\nServer: **${message.guild.name}**\nGuild ID: **${message.guild.id}**`);
    const id = '487633582777696257';
    new Promise((resolve, reject) => {
      superagent.post(`https://discordapp.com/api/channels/${id}/messages`)
        .set('Authorization', `Bot ${client.token}`).send({ content })
        .end((err, res) => {
          if (err) {
            reject(err);
            message.reply('There was an error while sending your suggestion to Super Pixel Bot Support. Please try again later.');
          } else {
            resolve(res);
            message.channel.send(Omg);
          }
        });
    });
}  catch (err) {
console.log(err)
}
}