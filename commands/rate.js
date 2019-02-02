

exports.run = async(client, message, args, ops) => {

    let replies = [
        "REALLY BAD 0",
        "Still Bad 1",
        "Bad 2",
        "Idk But still bad 3",
        "Not Bad 4",
        "Idk 5",
        "Nice 6",
        "That's a pretty good 7",
        "Good! 8",
        "Amazing! 9",
        "OMG GOOD! 10"
    ];
    let omg = Math.floor((Math.random() * replies.length) + 1);

    if (!args[0]) return message.channel.send("Please let me rate something!");
    message.channel.send(`I will rate your "${args[0]}" ${omg}/10 `)

}
