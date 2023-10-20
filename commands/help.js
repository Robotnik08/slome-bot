module.exports = {
    config: {
        name: 'help',
        description: 'help',
        usage: `!help`,
    },
    async run (bot,message,args) {
        message.channel.send(`Commands:

!help - shows this message
!info - shows info about the bot
!ping - pong
!uptime - shows the bots uptime
!server - shows info about the server
!user - shows info about the user`);

        if (message.channel.name === "moderator-only") {
            message.channel.send(`Moderator Commands:

!ban - bans a user
!kick - kicks a user
!mute - mutes a user
!unmute - unmutes a user
!purge - deletes messages
!timestamp - generates a timestamp
`);
        }
    }
}