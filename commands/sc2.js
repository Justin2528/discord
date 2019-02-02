const snekfetch = require('snekfetch');
const prettyLog = require('prettyconsole');
exports.run = async(client, message, args, ops) => {
    console.log('updates status');
    snekfetch.post(`https://botsfordiscord.com/api/v1/bots/467240900750475274/`)
        .set('Authorization', 'aeba692ac7f26f3daee1201557540f38a90aeae7946f5acb7bb26ed703d2d9e876b6e84c8ee84f7b6fd3f51196f4c3bfcf1a5863c9b5dbd8158ce02ee2475446')
        .send({
            'server_count': client.guilds.size,
        })
        .then(console.log('Updated BOD Stats'))
}