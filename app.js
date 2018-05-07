const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';
const http = require('http');
const express = require('express');
const app = express();

bot.on('message', message => {

    // Variables
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    // Commands

    // Ping
    if (msg === prefix + 'PING') {
        message.channel.send(':ping_pong: Pong!');
    }

    // Restart
    if (msg === prefix + 'RESTART') {
      if (message.author.id !== "184350672622190593") {
        return message.channel.send(":x: You do not have permission to run this command.")
      }
      message.channel.send(":wave:");
      bot.user.setStatus("invisible");
      console.log('EmeraldBot is now offline.');
      setTimeout(function() { process.exit(0); },2500);
    }
  
    // SetStatus
    if (msg.startsWith(prefix + 'SETSTATUS')) {
      if (message.author.id !== "184350672622190593") {
        return message.channel.send(":x: You do not have permission to run this command.")
      }
      bot.user.setActivity('with drugs.', {type: 'LISTENING'});
    }

    // Getbot
    if (msg === prefix + 'GETBOT') {
      message.channel.send('You can get EmeraldBot in your server by clicking this link: <https://discordapp.com/api/oauth2/authorize?client_id=433929851552923659&permissions=8&scope=bot>');
    }

    // Server
    if (msg === prefix + 'SERVER') {
      message.channel.send('You can join the EmeraldDev server here: https://discord.gg/Tne5J');
    }
  
    // Minecraft
    if (msg === prefix + 'MINECRAFT') {
      message.channel.send('Join the EmeraldDev Minecraft server with the following IP: 0.tcp.ngrok.io:10066');
    }
  
    // Furries
    if (msg === prefix + 'FURRIES') {
      message.channel.send('https://www.youtube.com/watch?v=P9xhMhwdjoI');
    }


    // Purge
    if (msg.startsWith(prefix + 'PURGE')) {
    async function purge() {
        message.delete();

        if (!message.member.roles.find("name", "EmeraldBot Admin")) {
            message.channel.send(":x: You do not have permission to run this command. You require the EmeraldBot Admin role.");
            return;
        }

        // We want to check if the argument is a number
        if (isNaN(args[0])) {
            // Sends a message to the channel.
            message.channel.send(":x: Please use a number as your argument.");
            return;
        }

        const fetched = await message.channel.fetchMessages({limit: args[0]});
        console.log('Deleting ' + fetched.size + ' messages...');

        message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send(`:x: Error: ${error}`));

    }
    purge();

}
  
  if (msg.startsWith(prefix + 'HELP')) {
  
  }

});

// Listener Event
bot.on('ready', () => {
    bot.user.setStatus("Online");
    console.log('EmeraldBot is now online.');
    bot.user.setActivity(`${bot.guilds.size} servers...`, {type: 'LISTENING'});
});

bot.login('NDMzOTI5ODUxNTUyOTIzNjU5.DbDSKQ.Y-AJl9v_TE7VZkBddRT-ICR4cF8');

app.get("/", (request, response) => {
  console.log(Date.now() + " Automatic Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
