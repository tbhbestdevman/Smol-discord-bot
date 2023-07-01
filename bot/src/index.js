const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const mongoose = require('./database/mongoDB.js');
const commandHandler = require('./commands/commandHandler.js');
const eventHandler = require('./events/eventHandler.js');

mongoose.connect(config.mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(`Could not connect to MongoDB: ${err}`);
});

bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();

commandHandler(bot);
eventHandler(bot);

bot.login(config.token);