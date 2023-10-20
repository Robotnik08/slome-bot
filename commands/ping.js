module.exports = {
    config: {
        name: 'ping',
        description: 'ping',
        usage: `!ping`,
    },
    async run (bot,message,args) {
        message.channel.send(`Pong!`);
    }
}