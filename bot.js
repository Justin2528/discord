const Discord = require('discord.js');
const tools = require('./function.js');
const client = new Discord.Client();
const fs = require('fs');

let xp = require('./xp.json');

const guildIDe = '386171809080410122'

const prefix = '-';
const ownerID = '389428200565899264'
const active = new Map();

const categoryID = '512562971600224258'



const guildID = '386171809080410122'

const serverStats = {
  guildID: '475681675108417540',
  totalUsersID: '479195844961107968',
  memberCountID: '479196082165907476',
  botCountID: '479196101279481857'
};

let statuses = ['-help', 'Invite me by doing -invite', 'DM me if something goes wrong!'];

client.on('ready', () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 

  setInterval(function() {

    let status = statuses[Math.floor(Math.random()*statuses.length)];

    client.user.setPresence({ activity: { name: status } });

  }, 3000)
});

client.on('guildMemberAdd', member => {

  if (member.guild.id !== serverStats.guildID) return;

  client.channels.get(serverStats.totalUsersID).setName(`Total Users: ${member.guild.memberCount}`);
  client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
  client.channels.get(serverStats.botCountID).setName(`Bot Count: ${member.guild.members.filter(m => m.user.bot).size}`);

});


client.on('guildMemberRemove', member => {

  if (member.guild.id !== serverStats.guildID) return;

  client.channels.get(serverStats.totalUsersID).setName(`Total Users: ${member.guild.memberCount}`);
  client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
  client.channels.get(serverStats.botCountID).setName(`Bot Count: ${member.guild.members.filter(m => m.user.bot).size}`);

 
});




const db = require('quick.db');


client.on('message', async message => {

  let xpAdd = Math.floor(Math.random() * 7) + 8;



  

 
  if (message.author.bot) return;


   if (message.channel.type !== 'text') {

    let active = await db.fetch(`support_${message.author.id}`);

    let guild = client.guilds.get(guildID);

    let channel, found = true;

    try {
      if (active) client.channels.get(active.channelID).guild;
    } catch (e) {
      found = false;
    }

    if (!active || !found) {

      active = {}

      let omg = Math.floor(Math.random() * 6784951559315) +10000000000;

      channel = await guild.channels.create(`${message.author.username}-${message.author.discriminator}`, {
        parent: categoryID,
        topic: `?complete to close the ticket | Support for ${message.author.tag} | ID: ${message.author.id} | Ticket ID: ${omg}`
      });

      let author = message.author;

    

      const newChannel = new Discord.MessageEmbed()
      .setColor(0x36393e)
      .setAuthor(author.tag, author.displayAvatarURL())
      .setFooter('Support Ticket Created')
      .addField('User', message.author)
      .addField('ID', author.id)
      .addField('Ticket ID', omg)

      await channel.send(newChannel);

      const newTicket = new Discord.MessageEmbed()
      .setColor(0x36393e)
      .setAuthor(`Hello ${author.tag}`, author.displayAvatarURL())
      .setFooter('Support Ticket Created')

      await author.send(newTicket);

      active.channelID = channel.id; 

      active.targetID = author.id;

    }

    channel = client.channels.get(active.channelID);

    const dm = new Discord.MessageEmbed()
    .setColor(0x36393e)
    .setAuthor(`Thank you, ${message.author.tag}`, message.author.displayAvatarURL())
    .setFooter(`Your message has been sent -- A staff member will be in contact soon`)

    await message.author.send(dm);

    const embed = new Discord.MessageEmbed()
    .setColor(0x36393e)
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(message.content)
    .setFooter(`Message Recieved -- ${message.author.tag}`)

    await channel.send(embed);

   db.set(`support_${message.author.id}`, active);
   db.set(`supportChannel_${channel.id}`, message.author.id);
   return;

  }

  let support = await db.fetch(`supportChannel_${message.channel.id}`);

  if (support) {

    support = await db.fetch(`support_${support}`);

    let supportUser = client.users.get(support.targetID);
    if (!supportUser) return message.channel.delete();

    if (message.content.toLowerCase() === '?complete') {

      const complete = new Discord.MessageEmbed()
      .setColor(0x36393e)
      .setAuthor(`Hey, ${supportUser.tag}`, supportUser.displayAvatarURL())
      .setFooter('Ticket Closed -- Super Pixel Bot Support')
      .setDescription('*Your ticket has been marked as **complete**. If you wish to open another one, please send a message in this DM channel.*')

      supportUser.send(complete);


      message.channel.delete();

      db.delete(`support_${support.targetID}`);

      return;

    }
  

    const embed = new Discord.MessageEmbed()
    .setColor(0x36393e)
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(`Message Recieved -- Super Pixel Bot Support`)
    .setDescription(message.content)

    client.users.get(support.targetID).send(embed)

    message.delete({timeout: 1000});

    embed.setFooter(`Message Sent -- ${supportUser.tag}`)

    return message.channel.send(embed);

  }

  
  db.add(`globalMessages_${message.author.id}`, 1);

  db.add(`guildMessages_${message.guild.id}_${message.author.id}`, 1);


  // let blacklisted = ['fuck', 'shit', 'penis', 'felch', 'bitch', 'dick', 'pussy', 'hoe', 'cunt', 'porn', 'jerk', 'faggot'];

  // let foundInText = false;
  // for (var i in blacklisted) {
  //   if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  // }

  // if (foundInText) {
  //   message.delete();
  //   const hey = new Discord.MessageEmbed()
  //   .setTitle('Hey You!')
  //   .setColor('RED')
  //   .setAuthor(message.author.username, message.author.displayAvatarURL())
  //   .setDescription(`Please don't swear in this server!`)
  //   message.channel.send(hey).then(msg => msg.delete({
  //     timeout: 5000
  //   }));
  // }

  

// // Check if author is AFK
// let authorStatus = await afk.fetch(message.author.id);

// if (authorStatus) { // Run if they are AFK

//   const embed = new Discord.MessageEmbed()
//     .setColor(0xffffff)
//     .setFooter(`${message.author.username} is no longer AFK.`)
	
//   // Send a 'You are no longer AFK message'
//   message.channel.send(embed).then(i => i.delete({
//     timeout: 5000
//   }))
  
//   // This will delete the user from the AFK pool in the database
//   afk.delete(message.author.id);

// }

// let mentioned = message.mentions.members.first(); // This will store the first member mentioned
// if (mentioned) { // This will run if a member is mentioned

//   // Access AFK Status
//   let status = await afk.fetch(mentioned.id);

//   if (status) { // This will run if they are AFK (since the db will return true)

//     // Form Embed
//     const embed = new Discord.MessageEmbed()
//       .setColor(0xffffff)
//       .setFooter(status);

//     // Send Embed
//     message.channel.send(embed);

//   }

// }

  


  let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();

  if (message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  try {

    delete require.cache[require.resolve(`./commands/${cmd}.js`)];

    let ops = {
      ownerID: ownerID,
      active: active
    }

    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args, ops, tools);

  

  } catch (e) {
    console.log(e.stack);
  }


  });




client.login(process.env.BOT_TOKEN);
