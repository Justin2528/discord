const Discord = require("discord.js")

exports.run = async(client, message, args, tools) => {

    var yes = [

        ":gem: : :gem: : :gem: ",
    ":lemon: : :lemon: : :lemon: ",
    ":seven: : :seven: : :seven: ",
    ":bell: : :bell: : :bell:",
    ":cherries: : :cherries: : :cherries: ",
    ":star: : :star: : :star: "

    ];

var replys1 = [
    ":gem: : :gem: : :gem: ",
    ":lemon: : :lemon: : :lemon: ",
    ":seven: : :seven: : :seven: ",
    ":bell: : :bell: : :bell:",
    ":cherries: : :cherries: : :cherries: ",
    ":star: : :star: : :star: ",
    ":gem: : :star: : :seven: ",
    ":star: : :bell: : :bell:",
    ":star: : :star: : :cherries: ",
    ":gem: : :gem: : :cherries:",
    ":gem: : :seven: : :seven: ",
    ":star: : :bell: : :lemon: ",
    ":star: : :star: : :cherries: ",
    ":seven: : :star: : :star: ",
    ":star: : :star: : :seven: ",
    ":gem: : :gem: : :seven: "
];
let reponse = (replys1[Math.floor(Math.random() * replys1.length)])

var replys2 = [
    ":gem: : :gem: : :gem: ",
    ":lemon: : :lemon: : :lemon: ",
    ":seven: : :seven: : :seven: ",
    ":bell: : :bell: : :bell:",
    ":cherries: : :cherries: : :cherries: ",
    ":gem: : :star: : :seven: ",
    ":star: : :bell: : :bell:",
    ":star: : :star: : :cherries: ",
    ":gem: : :gem: : :cherries:",
    ":gem: : :seven: : :seven: ",
    ":star: : :bell: : :lemon: ",
    ":star: : :star: : :cherries: ",
    ":seven: : :star: : :star: ",
    ":star: : :star: : :seven: ",
    ":gem: : :gem: : :seven: ",
    ":gem: : :cherries: : :cherries:",
    ":gem: : :bell: : :star:"
];
let reponse2 = (replys2[Math.floor(Math.random() * replys2.length)])
var replys3 = [
    ":lemon: : :lemon: : :lemon: ",
    ":bell: : :bell: : :bell:",
    ":cherries: : :cherries: : :cherries: ",
    ":star: : :star: : :star: ",
    ":gem: : :star: : :seven: ",
    ":star: : :bell: : :bell:",
    ":star: : :star: : :cherries: ",
    ":gem: : :gem: : :cherries:",
    ":gem: : :seven: : :seven: ",
    ":star: : :bell: : :lemon: ",
    ":star: : :star: : :cherries: ",
    ":seven: : :star: : :star: ",
    ":star: : :star: : :seven: ",
    ":gem: : :gem: : :seven: "
];
let reponse3 = (replys3[Math.floor(Math.random() * replys3.length)])

 if (!args[0]) {

    message.channel.send("Pay Some Money!")
    return;

 }

 if (args[1]) {

    message.channel.send("Huh? more text? huhhhhhhh")

    return;

 }

const embed = new Discord.MessageEmbed()
    .setColor("#FE0101")
    .setTitle(`**[ :slot_machine: @${message.author.tag} pay ${args[0]} :dollar:  and launched the slot machine! :slot_machine: ]**`)
    .addField("**-------------------**", "** **")
    .addField(`${reponse} \n \n${reponse2}**<** \n \n${reponse3}`, `** **`)
    .addField("**-------------------**", "** **")
    .setDescription("** **")
message.channel.send(embed);


}
