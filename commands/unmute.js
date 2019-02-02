const Discord = require("discord.js");

module.exports.run = async (client, message, args, ops) => {

    if (!message.member.roles.find(role => role.name === "Staff")) return message.channel.send('⚠️ **You need the** `Staff` **role to use this command.** ⚠️').then(msg => msg.delete({
        timeout: 5000
        }));
    const modlog = message.guild.channels.find(channel => channel.name === 'mod-logs');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("Couldn't find user.")
    if (!user.roles.find(role => role.name === "Muted")) return message.channel.send('There are\'t in muted.')
    let muterole = message.guild.roles.find(role => role.name === "Muted");
    if(args[0] == "help"){
      message.reply("Usage: -unmute <user>");
      return;
    }
  let muteChannel = message.guild.channels.find(channel => channel.name === "mod-logs");
  if (!muteChannel) return message.channel.send('**Please create a channel with the name `mod-logs`**')

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
  

    let mutetime = args[1];

    await (user.roles.remove(muterole.id));
    const muteembed = new Discord.MessageEmbed()
            .setAuthor(' Action | UnMute', `https://images-ext-2.discordapp.net/external/wKCsnOcnlBoNk-__BXsd6BrO6YddfUB-MtmaoaMxeHc/https/lh3.googleusercontent.com/Z5yhBQBJTSJVe5veJgaK-9p29hXm7Kv8LKF2oN0hDnsToj4wTcQbirR94XVpH4Lt5a5d%3Dw300`)
            .addField('User', `<@${user.id}>`)
            .addField('Moderator', `${mod}`)
            .setColor('#00FF80')
      		  .setFooter("Bot Version 2.9.3", "https://cdn.discordapp.com/attachments/488757189498896384/489721551948611595/if_quote_1054999.png?size=2048")
        modlog.send(muteembed)
  
  
}



