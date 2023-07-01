const Discord = require('discord.js');

module.exports = {
    name: 'event8',
    execute(client) {
        client.on('message', (message) => {
            if (message.content.includes('event8')) {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Event 8 Triggered')
                    .setDescription('This is a response from Event 8')
                    .setColor('#0099ff');
                message.channel.send(embed);
            }
        });
    },
};