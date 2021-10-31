const DiscordJS = require('discord.js')

module.exports = {
    // Best practice for the built-in help menu
    commands: ['createtable'],
    
    category: 'Moderator Commands',
    description: 'Create a table with role, category and channels',

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

    callback: async ({ args, client, guild }) => {
        // Basic variables
        const type = args[0]
        const format = args[1]
        const formatInfo = guild.roles.cache.find(r => r.id === format);
        const formatName = formatInfo.name
        const dm = args[2]
        const tableName = args.slice(3).join(" ")
        const tableShortName = tableName.match(/(?:^| )(\w)/g).join("").replace(/ /gi, "");
        
        // Create a role
        let role = await guild.roles.create({
            name: tableName + " Player",
            color: 'GREEN',
            position: 6,
        })
        rolesId = await role.id;

        // Create a category
        let cat = await guild.channels.create("(X/Y) " + tableName, {
            type: 'GUILD_CATEGORY',
            permissionOverwrites: [
                {
                    id: guild.roles.everyone, // Everyone
                    allow: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY"]
                },
                {
                    id: format, // Game Format
                    allow: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY"]
                },
                {
                    id: rolesId,
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "USE_EXTERNAL_EMOJIS", "ADD_REACTIONS", "SEND_TTS_MESSAGES", "SEND_MESSAGES_IN_THREADS", "CREATE_PUBLIC_THREADS", "CREATE_PRIVATE_THREADS"]
                },
                {
                    id: dm,
                    allow: ["MANAGE_CHANNELS", "ADD_REACTIONS", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "USE_VAD", "SEND_MESSAGES_IN_THREADS", "CREATE_PUBLIC_THREADS", "CREATE_PRIVATE_THREADS"]
                }
            ]
        });
    }
}