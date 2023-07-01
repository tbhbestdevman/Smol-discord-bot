const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const commandHandler = require('./commands/commandHandler');
const eventHandler = require('./events/eventHandler');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

commandHandler(client);
eventHandler(client);

client.login(config.token);