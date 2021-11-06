# pnp-moderators-bot-3.0
This is the Pen and Players RolePlay Server Discord moderation bot 3.0

All commands in this bot are slash commands.

## How to use this bot
All commands are set to only work when you have a specific role. You can choose yourself what role(s) this should be.
To approve certain roles to use certain command you have to do the following:

1. Find the role ID of the role(s) you want to use as moderator / admin
2. Go to a channel where the bot has read and send permissions
3. Use `/requiredrole` and follow the instructions the command gives you.
4. Re-do this for every command of the bot to make sure no regular members can use any of the moderators bot.

## How to de-activate commands?
It's possible that you don't want to use all the commands included in this bot.
You can simply just delete these from your server (after a couple of hours).

1. Go to a channel where the bot has read and send permissions
2. Use `/slash`
3. Copy the command ID standing next to the command name (in the Grobal slash commands list)
4. Use `/slash` again and enter the command ID

## Commands included
- Createtable: Creates a role, category and 5 channels with the arguments given in this command. Setup for the P&P RP server.
- delete-channel: Deletes a channel were this command is used in. Will provide a verification question prior to the action in the future.
- Set-Invitelink: Places your servers invite link into a database. This link will be provided when doing /invitelink with the P&P Players Bot.
- Set-Welcome: Adds a welcome text when new players joins to a channel of your choice.
- simjoin: Simulates a new player joining.