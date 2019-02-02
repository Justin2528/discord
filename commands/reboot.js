const tokenfile = require('../tokens.json');

exports.run = async (client, message, args, ops) => {


if (message.author.id === "389428200565899264") {
    message.channel.send(":gear: Reboot in process")
    
    client.destroy()
    client.login(tokenfile.token);
  message.channel.send(":gear: Reboot has been done")
  } else {
      
  message.channel.send("Only the Owner of this bot can do that !")
    
    }
}