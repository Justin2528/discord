const db = require('quick.db');

exports.run = async (client, message, args, ops) => {

    db.startsWith(`guildMessages_${message.guild.id}`, { sort: '.data' }).then(resp => {

        resp.length = 15;

        let finalOutput = '**Leaderboard:**\n\n';
        for (var i in resp) {
            finalOutput += `${client.users.get(resp[i].ID.split('_')[2]).username} -- ${resp[i].data} messages\n`;
        }

        message.channel.send(finalOutput)

    });


}