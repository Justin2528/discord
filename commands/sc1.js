const Client = require('botlist.space');

const client = new Client('467240900750475274', 'd1009aeeb8a9366b9503b638243cd5426f764d9440a4873dfc5ef1b5a230a8bace944220ef60e5ec876e6b30af6731cda7663700e4345bd242cdb813c05d00ac');

exports.run = async(message, args, ops) => {

// The `bot` variable below should be your Discord bot

client.shard.fetchClientValues('guilds.size').then((guilds) => {
    client.postServerCount(guilds.reduce((a, b) => a + b, 0)).then(() => {
        console.log('Set the current bot\'s server count to ' + client.guilds.size + ' guilds.');
    }).catch((e) => {
        console.error('Failed to post server count. ' + e.code);
    });
}).catch((error) => {
    console.error('Failed to get bot shard guild count', error);
});
}