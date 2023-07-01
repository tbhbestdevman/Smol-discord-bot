const Discord = require('discord.js');

module.exports = {
    name: 'command9',
    description: 'This is command 9',
    execute(message, args) {
        // Command code here
        message.channel.send('Command 9 executed');
    },
};