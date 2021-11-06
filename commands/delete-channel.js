module.exports = {
    commands: ['deletechannel', 'delete-channel'],
    
    category: 'Moderator Commands',
    description: 'Deletes a channel were this command is used in.',
    
    requireRoles: true,
    
    testOnly: true,
    slash: 'both',
    
    callback: ({ message, channel }) => {
        channel.delete()
    },
}