const snekfetch = require('snekfetch');
const prettyLog = require('prettyconsole');
exports.run = async (client, message, args, ops) => {
    console.log('updates status');
    snekfetch.post(`https://discordbots.group/api/bot/467240900750475274`)
        .set('Authorization', 'c810c125b926e38ef0ae83753cbcc533516a4e86cbb0e49928881b4564fea8799a4341f8f4c1b7da92c8268d0da2a0c20b2e14e56ae7eb08f1aa4b2fee0b1953')
        .send({
            'count': client.guilds.size,
        })
        .then(console.log('Updated DBG Stats'))
}