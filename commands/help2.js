const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {

  const p = client.emojis.get('489449963193892864');

  const omg = new Discord.MessageEmbed()
  .setColor(0x36393e)
  .setTitle(`Help List`)
  .setDescription(`You Can Invite the ${p}[bot](https://discordapp.com/oauth2/authorize?client_id=467240900750475274&scope=bot&permissions=2146958591) in here too!`)
  .addField('help', `the main help`)
  .addField("rate <stuff>", ` rate your stuff`)
  .addField('cat', 'random cat')
  .addField('dog', 'random dog')
  .addField(`wumpus <something>/wumpusrainbow <text>', 'Wumpus's secret`)

  message.channel.send(omg);
}
