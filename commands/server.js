module.exports = {
    config: {
        name: 'server',
        description: 'info about the server',
        usage: `!server`,
    },
    async run (bot,message,args) {
        message.channel.send(`Server name: ${message.guild.name}
Total members: ${message.guild.memberCount}
Created at: ${message.guild.createdAt}
`);
    }
}