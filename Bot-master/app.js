const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('guildCreate', guild => {
  guild.defaultChannel.sendMessage(`Thank you for inviting me, I would be glad to help!`);
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.on('message', message => {
  if (message.content === 'test') {
    message.reply('now try ping!');
  }
});

client.on('message', message => {
  if (message.content === 'hmmm') {
    message.reply(':thinking:');
  }
});

client.on('message', message => {
  if (message.content === 'Hello') {
    message.reply('Hello!');
  }
});

client.on('message', message => {
  if (message.content === 'hello') {
    message.reply('Hello!');
  }
});

client.on('message', message => {
  if (message.content === 'hi') {
    message.reply('Hello!');
  }
});

client.on('message', message => {
  if (message.content === 'Commands') {
    message.reply('Sorry! This is only alpha version, but we will get this running soon!');
  }
});

client.on('message', message => {
  if (message.content === 'commands') {
    message.reply('Sorry! This is only alpha version, but we will get this running soon!');
  }
});

client.on('message', message => {
  if (message.content === 'cmds') {
    message.reply('Sorry! This is only alpha version, but we will get this running soon!');
  }
});

client.on('message', message => {
  if (message.content === 'Cmds') {
    message.reply('Sorry! This is only alpha version, but we will get this running soon!');
  }
});

client.on('message', message => {
  if (message.content === 'credit') {
    message.reply('Tiogle');
  }
});

client.on('message', message => {
  if (message.content === 'Credit') {
    message.reply('Tiogle');
  }
});

client.on('message', message => {
  if (message.content === 'Creator') {
    message.reply('Tiogle');
  }
});

client.on('message', message => {
  if (message.content === 'creator') {
    message.reply('Tiogle');
  }
});

client.on('message', message => {
  if (message.content === 'raid') {
    message.channel.sendMessage('this command may come back... someday...');
  }
});

client.on('message', message => {
  if (message.content === 'commands') {
    message.channel.sendMessage('raid, hi, ping, test, hmm. MORE COMING SOON -Tiogle');
  }
});

client.on('message', message => {
  if (message.content === 'wow facts and answers') {
    message.channel.sendMessage('Here you go :^) https://ghostbin.com/paste/qd3qj');
  }
});

client.on('message', message => {
  if (message.content === 'gifyes') {
    message.channel.sendMessage('https://giphy.com/gifs/reaction-mrw-see-1uQg9WE9JLuX6');
  }
});

client.on('message', message => {
  if (message.content === 'gifthor') {
    message.channel.sendMessage('https://giphy.com/gifs/thor-lightning-the-dark-world-Ch1zCx8tu6DQY');
  }
});

client.on('message', message => {
  if (message.content === 'gifillegaldubito') {
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/267904125901996042/302198182048432128/illegal.gif');
  }
});

client.on('message', message => {
  if (message.content === 'gifillegalttpa') {
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/267904125901996042/302199524254941184/illegal.gif');
  }
});

client.on('message', message => {
  if (message.content === 'gifillegaljakebooy') {
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/267904125901996042/302200277870575626/illegal.gif');
  }
});

client.on('message', message => {
  if (message.content === 'gifgetgoofed') {
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/267904125901996042/302202793358524416/gifgetgoofed.gif');
  }
});

client.on('message', message => {
  if (message.content === 'gifsouthparkgaming') {
    message.channel.sendMessage('https://i.giphy.com/NaxKt9aSzAspO.gif');
  }
});

client.on('message', message => {
  if (message.content === 'gif list') {
    message.channel.sendMessage('gifsouthparkgaming, gifgetgoofed, gifillegalttpa, gifillegaljakebooy, gifillegaldubito, gifthor, gifyes');
  }
});

client.on('message', message => {
  if (message.content === 'Sengoku Invite') {
    message.channel.sendMessage('Invite me to your discord if you would like! https://discordapp.com/oauth2/authorize?permissions=8&scope=bot&client_id=302173920331694081');
  }
});

client.on('message', message => {
  if (message.content === 'sengoku invite') {
    message.channel.sendMessage('Invite me to your discord if you would like! https://discordapp.com/oauth2/authorize?permissions=8&scope=bot&client_id=302173920331694081');
  }
});

client.on('message', message => {
  if (message.content === 'sengoku music') {
    message.channel.sendMessage('Music is temporarily off at the moment, sorry!');
  }
});

client.on('message', message => {
  if (message.content === 'Sengoku music') {
    message.channel.sendMessage('Music is temporarily off at the moment, sorry!');
  }
});

client.on('message', message => {
  if (message.content === 'Sengoku Music') {
    message.channel.sendMessage('Music is temporarily off at the moment, sorry!');
  }
});



client.login('YOUR BOT TOKEN');
