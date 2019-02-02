const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {

    const wow = new Discord.MessageEmbed()

    .setTitle('Music Command List')
    .setColor('RANDOM')
    .addField('play [something to search/ link]', 'NEW! search something then you select/ paste a link , PLAY THE MUSIC!')
    .addField('pause', 'pause what the bot is playing.')
    .addField('queue', 'view queue')
    .addField('resume', 'resume the music.')
    .addField('skip', '(vote) vote to skip!')
    .addField('stop', 'stop the music!')
    .addField('volume (1-500)', 'change the volume.')

    message.channel.send(wow);
}