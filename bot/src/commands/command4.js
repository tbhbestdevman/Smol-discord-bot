const Discord = require('discord.js');

module.exports = {
    name: 'command4',
    description: 'This is a description for command4',
    execute(message, args) {
        // Command code here
        message.channel.send('This is command4');
    },
};