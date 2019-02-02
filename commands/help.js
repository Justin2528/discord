const Discord = require('discord.js')

exports.run = async (client, message, args, ops) => {

  const p = client.emojis.get('489449963193892864');

  const omg = new Discord.MessageEmbed()
  .setColor(0x36393e)
  .setTitle(`Help List`)
  .setDescription(`You Can Invite the [${p}bot](https://discordapp.com/oauth2/authorize?client_id=467240900750475274&scope=bot&permissions=2146958591) in here too!`)
  .addField('\n\n\nascii <text>', 'ascii text :DDD')
  .addField('afk', 'afk command :D')
  .addField("about", "about the bot!")
  .addField("help2", "help list 2")
  .addField("emojis", "List the server's emojis")
  .addField("mcachievement (Title) | (contents)", "minecraft achievements creator!")
  .addField('ping', `Not a Test Command!`)
  .addField('suggest', 'your suggest help us alot!')
  .addField('upvote', 'upvote me :D')
  .addField('changelog', `You will know the bot's changelog! `)
  .addField('rps <r/p/s, Rock/ Paper/ Scissors>', 'rps (Rock, Paper, Scissors) SO FUN!')
  .addField('messages', 'Know how many messages you have sent!')
  .addField('poll <some text>', 'create a poll!')
  .addField('msgbox <msg>', 'create a box with ur msg')
  .addField('code <js/css/html> <code>', 'Code Format')
  .addField('invite', 'invite The Bot!')
  .addField('8ball', 'perfect 8ball :D')
  .addField('translate (lang) (words)', 'translate your word :D')
  .addField('tts (word)', 'tts :D')
  .addField('avatar', 'Your Cool Avatar')
  .addField('meme', "random meme")
  .addField('serverinfo', 'server info :D')
  .addField('helpmusic', 'Get the music command')
  .addField('Emoji:', ':boom: not release.   \n\n🛠 In beta     \n\n No Emoji? That mean Released!')


  message.channel.send(omg);



  const staff = new Discord.MessageEmbed()
    .setTitle(`Staff Command`)
    .setColor('RED')
    .addField('warn <@mention> <reason>', 'Warn a User')
    .addField('warns <@mention>', `Know the user's warns`)
    .addField('purge <between 1-100>', 'purge MUHAHAHA')
    .addField('ban <user(mention)> <reason>', 'ban ppl :D NOTE: THE USER WILL BE BAN FOREVER!')
    .addField('unban <@userid>', 'Yes a new unban command but the you need the user id: like 123456789123 . Example: unban <@123456789123> ')
    .addField('Emoji:', ':boom: not release.   \n\n🛠 In beta     \n\n No Emoji? That mean Released!')
    message.channel.send(staff);

}