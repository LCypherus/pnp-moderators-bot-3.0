const DiscordJS = require('discord.js')
const welcomeSchema = require('@schemas/welcome-schema')

module.exports = {
    commands: ['setwelcome'],
    
    category: 'Configuration',
    description: 'Sets the welcome channel',
    
    minArgs: 2,
    expectedArgs: '<channel> <text>',
    
    requireRoles: true,
    
    testOnly: true,
    slash: 'both',
    
    options: [
        {
            name: 'channel',
            description: 'The target channel.',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.CHANNEL
        },
        {
            name: 'text',
            description: 'The welcome message.',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING
        }
    ],
    
    callback: async ({ guild, message, interaction, args }) => {
        if (!guild) {
            return 'Please use this command within a server.'
        }
        
        const target = message ? message.mentions.channels.first() : interaction.options.getChannel('channel')
        if (!target || target.type !== 'GUILD_TEXT') {
            return 'Please tag a text channel.'
        }

        let text = interaction?.options.getString('text')
        if (message) {
            args.shift()
            text = args.join(' ')
        }

        await welcomeSchema.findOneAndUpdate({
           _id: guild.id 
        }, {
            _id: guild.id,
            text,
            channelId: target.id
        }, {
            upsert: true
        })

        return 'Welcome channel set'
    }
}