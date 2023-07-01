const Discord = require('discord.js');

module.exports = {
    name: 'command7',
    description: 'This is a description for command7',
    execute(message, args) {
        // Command code here
        message.channel.send('This is command7');
    },
};