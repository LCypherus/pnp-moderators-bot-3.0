const DiscordJS = require('discord.js')
const { MessageEmbed } = require('discord.js');

module.exports = {
    // Best practice for the built-in help menu
    commands: ['console'],
    
    category: 'Moderator Commands',
    description: 'Console',

    requireRoles: true,
    slash: 'both',
    testOnly: true,

    options: [
        {
            name: 'gametype',
            description: 'The games type. Text based or Voice based',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
            choices: [
                {
                    "name": "text",
                    "value": "text"
                },
                {
                    "name": "voice",
                    "value": "voice"
                },
                {
                    "name": "both",
                    "value": "both"
                }
            ],
        },
        {
            name: 'gameformat',
            description: 'The games format, ie. Dungeons and Dragons.',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.ROLE,
        },
        {
            name: 'dungeonmaster',
            description: 'The Dungeons Master of this new table.',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.USER,
        },
        {
            name: 'tablename',
            description: 'The tables name.',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
        }
    ],

    callback: async ({ args, client, guild, message }) => {
        // Basic variables
        const type = args[0]
        const format = args[1]
        const formatInfo = guild.roles.cache.find(r => r.id === format);
        const formatName = formatInfo.name
        const dm = `<@${args[2]}>`
        const member = `<@${dm}>`

        const tableName = args.slice(3).join(" ")
        const tableShortName = tableName.match(/(?:^| )(\w)/g).join("").replace(/ /gi, "");

        
        console.log(dm)
        return `${dm}`
        
    }
}