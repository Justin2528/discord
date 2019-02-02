const { MessageEmbed } = require('discord.js');
exports.run = (client, message, args) => {
    // Tries to get the first mentioned role or a role ID or a role name (role names are case sensitive)
    let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);

    // If we can't find any role, then just default to the author's highest role
    if (!role) role = message.member.highestrole;


    // Define our embed
    const embed = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`Role: ${role}`)
        .addField('Creation Date', `${role.createdAt.toDateString()}`, true)
        .addField('Editable', `${role.editable.toString()}`, true)
        .addField('Managed', `${role.managed.toString()}`, true)
        .addField('ID', `${role.id}`, true);
    return message.channel.send(embed)
    }