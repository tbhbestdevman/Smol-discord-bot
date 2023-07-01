const Discord = require('discord.js');

module.exports = {
    name: 'command1',
    description: 'This is command1',
    execute(message, args) {
        // Command code here
        message.channel.send('Command1 executed!');
    },
};