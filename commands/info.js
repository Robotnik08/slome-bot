module.exports = {
    config: {
        name: 'info',
        description: 'info about the bot',
        usage: `!info`,
    },
    async run (bot,message,args) {
        message.channel.send(`This bot was made by ZeroEightStudios`);
    }
}