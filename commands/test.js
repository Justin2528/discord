exports.run = (client, message, args, ops) => {

    message.channel.send("Test I like pizza :D (with reaction it should be 🆗 )").then(message.react("🆗"))

}