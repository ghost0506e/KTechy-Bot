const Discord = require('discord.js');
const client = new Discord.Client( { disableMentions: "all" } );
require('dotenv').config();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.snipes = new Discord.Collection();

["command", "event"].forEach(handler => {
    require(`./Handlers/${handler}`)(client);
});

client.login(ODY1NDU1NTkyNzAwNjQxMzIw.YPEQVA.EBk7VXjs_gUi8964Hc7BKqU76aA);
