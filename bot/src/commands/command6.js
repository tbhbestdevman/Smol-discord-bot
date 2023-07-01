const Discord = require('discord.js');

module.exports = {
    name: 'command6',
    description: 'This is a description for command6',
    execute(message, args) {
        // Command code here
        message.channel.send('This is command6');
    },
};