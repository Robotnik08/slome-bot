module.exports = {
    config: {
        name: 'uptime',
        description: 'shows the bots uptime',
        usage: `!uptime`,
    },
    async run (bot,message,args) {
        message.channel.send(`I have been online since <t:${(Date.now()/1000|0)-(bot.uptime/1000|0)}:R>`);
    }
}