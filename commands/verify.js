// I recommend you to add an autorole wich will give the user the "Need Verification" Role. So you can verify them :)
// !verify @user

const Discord = require('discord.js');

exports.run = async(client, message, args, ops) => {
        // Check if user has the permission to use the command.
    if (!message.member.roles.find(role => role.name === "Staff")) return message.channel.send('⚠️ **You need the** `Staff` **role to use this command.** ⚠️').then(msg => msg.delete({
           timeout: 5000
           }));
    
    // Mention the user that you want to verify
    let toverify = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    // Find the role 'Verified User'
    let verifyrole = message.guild.roles.find(roles => roles.name === "Verified User");
    if (!verifyrole) return message.channel.send("Please create a `Verified User` role and Not Verify User will be `Not Verification` role");
    if (verifyrole) return;
    // Check if a user has been mentioned.
    if (!toverify) return message.reply("You need to mention a user.");
    // Add the role to the user if one is mentioned.
    await (toverify.add(verifyrole));

    // Find the 'Need - Verification Role' , then remove it.
    let delrole = message.guild.roles.find(roles => roles.name === "Not Verification");
    await (toverify.remove(delrole));

    let vUser = message.guild.member(message.mentions.users.first());
    if (!vUser) return message.channel.send('Cannot found that user.')

    let verifembed = new Discord.MessageEmbed()
        .setTitle("Verified Users - Logs")
        .setColor('#a5f23a')
        .addField("Verified by", `${message.author.tag}`, true)
        .addField("Channel", message.channel, true)
        .addField("Verified User", `${vUser}`, true)
        .setTimestamp();


    message.channel.send(verifembed);
}