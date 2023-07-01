const Discord = require('discord.js');

module.exports = {
    name: 'command3',
    description: 'This is a description for command3',
    execute(message, args) {
        // Command code here
        message.channel.send('Command3 executed!');
    },
};