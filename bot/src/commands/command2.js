const Discord = require('discord.js');

module.exports = {
    name: 'command2',
    description: 'This is a description for command2',
    execute(message, args) {
        // Command code here
        message.channel.send('Command2 executed!');
    },
};