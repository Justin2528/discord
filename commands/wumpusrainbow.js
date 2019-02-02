exports.run = async (client, message, args, ops) => {
    
    const lmap = client.emojis.find(emojis => emojis.name === "wumpusRedux");

    if (!args[0]) return message.channel.send("You say something than the Wumpus follow you.")

    let L = args.join(" ");

    message.channel.send(`${lmap}: ` + L);
}