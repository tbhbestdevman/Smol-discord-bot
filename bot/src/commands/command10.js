const Discord = require('discord.js');

module.exports = {
    name: 'command10',
    description: 'This is command10',
    execute(message, args) {
        // Command code here
        message.channel.send('Command10 executed');
    },
};