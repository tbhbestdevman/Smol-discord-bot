const Discord = require('discord.js');

module.exports = {
    name: 'command8',
    description: 'This is a description for command8',
    execute(message, args) {
        // Command code here
        message.channel.send('This is command8');
    },
};