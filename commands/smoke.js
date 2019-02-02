exports.run = async (client, message, args, ops) => {
    message.delete()

  message.channel.send("**Smoking!**").then( async msg => {
    setTimeout(() => {
        msg.edit('🚬');
    }, 500);
    setTimeout(() => {
        msg.edit('🚬 ☁ ');
    }, 900);
    setTimeout(() => {
        msg.edit('🚬 ☁☁ ');
    }, 1100);
    setTimeout(() => {
        msg.edit('🚬 ☁☁☁ ');
    }, 1300);
    setTimeout(() => {
        msg.edit('🚬 ☁☁☁');
    }, 1600);
    setTimeout(() => {
        msg.edit('🚬 ☁☁');
    }, 1900);
    setTimeout(() => {
        msg.edit('🚬 ☁');
    }, 2100);
    setTimeout(()=> {
        msg.edit('🚬 ')
    }, 2500)
    setTimeout(() => {
        msg.edit(`**Finished smoking!**`);
    }, 10000);
    setTimeout(() => {
        msg.delete(`**Finished Smoking!**`);
    }, 15000);
});
};