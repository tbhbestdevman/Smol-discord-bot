const Discord = require('discord.js');

module.exports = {
    name: 'event9',
    execute(client) {
        client.on('message', message => {
            if (message.content === 'event9') {
                message.channel.send('Event9 triggered!');
            }
        });
    },
};