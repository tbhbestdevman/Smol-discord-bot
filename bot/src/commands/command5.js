const Discord = require('discord.js');

module.exports = {
    name: 'command5',
    description: 'This is a description for command5',
    execute(message, args) {
        // Command code here
        message.channel.send('This is command5');
    },
};