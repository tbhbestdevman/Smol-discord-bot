const Discord = require('discord.js');

module.exports = {
    name: 'event3',
    execute(client) {
        client.on('message', (message) => {
            if (message.content === 'ping') {
                message.channel.send('pong');
            }
        });
    },
};