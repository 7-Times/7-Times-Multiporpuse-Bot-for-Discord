const { Client, Intents } = require('discord.js');
require('dotenv').config();
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the bot is connected, a message will be displayed in the console
client.on('ready', async () => {
console.log(`${client.user.tag} is ready !`);
})
const prefix = '!';

client.on("messageCreate" , (message) => {
    //Check for prefix
    if(message.content.startsWith(prefix)){
        //Check for command
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        if(command === 'ping'){
            message.reply('pong');
        }
    }
})

client.login(process.env.TOKEN);