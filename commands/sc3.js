const snekfetch = require('snekfetch');
const prettyLog = require('prettyconsole');
exports.run = async(client, message, args, ops) => {
    console.log('updates status');
    snekfetch.post(`https://discordboats.club/api/public/bot/stats`)
        .set('Authorization', 'v3pu6NAswlFflmzyXo5w81sYqheY4z')
        .send({
            'server_count': client.guilds.size,
        })
        .then(console.log('Updated BBC Stats'))
}