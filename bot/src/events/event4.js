const Discord = require('discord.js');

module.exports = {
    name: 'event4',
    execute(client) {
        client.on('message', (message) => {
            if (message.content.includes('event4')) {
                message.channel.send('Event4 triggered!');
            }
        });
    },
};