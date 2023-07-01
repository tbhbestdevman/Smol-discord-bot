const Discord = require('discord.js');

module.exports = {
    name: 'event6',
    execute(client) {
        client.on('message', (message) => {
            if (message.content.includes('event6')) {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Event6 Triggered')
                    .setDescription('You have triggered the sixth event.')
                    .setColor('#0099ff');
                message.channel.send(embed);
            }
        });
    },
};