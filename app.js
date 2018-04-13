const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';

bot.on('message', message => {

    // Variables
    let msg = message.content.toUpperCase();
    let sender = message.author;

    // Commands

    // Ping
    if (msg === prefix + 'PING') {
        message.channel.send(':ping_pong: Pong!');
    }

    // Shutdown
    if (msg === prefix + 'SHUTDOWN') {
      if (message.author.id !== "184350672622190593") {
        return message.channel.send(":x: You do not have permission to run this command.")
      }
      message.channel.send(":wave:");
      bot.user.setStatus("invisible");
      console.log('EmeraldBot is now offline.');
      setTimeout(function() { process.exit(0); },2500);
    }
});

// Listener Event
bot.on('ready', () => {
    bot.user.setStatus("Online");
    console.log('EmeraldBot is now online.');
    bot.user.setActivity(`your commands...`, {type: 'LISTENING'});
});


bot.login('NDMzOTI5ODUxNTUyOTIzNjU5.DbDSKQ.Y-AJl9v_TE7VZkBddRT-ICR4cF8');
