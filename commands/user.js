module.exports = {
    config: {
        name: 'user',
        description: 'info about you',
        usage: `!user`,
    },
    async run (bot,message,args) {
        message.channel.send(`Your username: ${message.author.username}
Your ID: ${message.author.id}
Your avatar: ${message.author.displayAvatarURL()}
Created at: ${message.author.createdAt}
Joined at: ${message.member.joinedAt}
`);
    }
}