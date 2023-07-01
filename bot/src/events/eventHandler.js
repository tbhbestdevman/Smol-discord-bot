const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');

module.exports = (client) => {
    const load = dirs => {
        const eventFiles = fs.readdirSync(path.join(__dirname, dirs)).filter(file => file.endsWith('.js'));

        for (const file of eventFiles) {
            const event = require(path.join(__dirname, dirs, file));
            const eventName = file.split('.')[0];
            client.on(eventName, event.bind(null, client));
        }
    }

    ['event1', 'event2', 'event3', 'event4', 'event5', 'event6', 'event7', 'event8', 'event9', 'event10'].forEach(x => load(x));
}