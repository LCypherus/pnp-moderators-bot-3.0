module.exports = {
    commands: ['simjoin'],
    
    category: 'Moderator Commands',
    description: 'Simulates a new player joining the server"',
    
    permissions: ['ADMINISTRATOR'],
    
    testOnly: true,
    slash: 'both',
    
    callback: ({ member, client }) => {
        client.emit('guildMemberAdd', member)
        return `Join simulated`
    }
}