const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const db = require('fera.db')
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});


////spamengel
const data = require('fera.db');

client.on('message', async message => {
const spam = await data.fetch(`spam.${message.guild.id}`);
if(!spam) return;
const maxTime = await data.fetch(`max.${message.guild.id}.${message.author.id}`);
const timeout = await data.fetch(`time.${message.guild.id}.${message.author.id}`);
data.add(`mesaj.${message.guild.id}.${message.author.id}`, 1)
if(timeout) {
const sayı = await data.fetch(`mesaj.${message.guild.id}.${message.author.id}`);
if(Date.now() < maxTime) {
return message.delete();
}
} else {
data.set(`time.${message.guild.id}.${message.author.id}`, 'ok');
data.set(`max.${message.guild.id}.${message.author.id}`, Date.now()+3000);
setTimeout(() => {
data.delete(`mesaj.${message.guild.id}.${message.author.id}`);
data.delete(`time.${message.guild.id}.${message.author.id}`);
}, 3000)
}
////

})
/////sa-as
client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sa') {
        msg.reply('Aleyküm Selam.');
      }
      }
    });
////

const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)

client.on('guildCreate', guild => {

    let bigz = guild.channels.cache.filter(c => c.type === "text").random()
    bigz.send("Heyyy, Beni sunucuna eklediğin için çooook teşşekür ederim <:kalp:909343225360306196> Komutlarıma bakmak için ```!yardım``` yazabilirsin");
});
////////
client.on("guildCreate", async guild => {
  const biggz = [
    "Bot sunucuna eklendi.Tebrikler dostum.",
    "Bu bot **SOULFLY#2155** tarafından geliştirilmektedir.",
    "```!yardım``` yazarak komutlarına bakabilirsin <:kalp:909343225360306196>",
    'iyi günlerde kullan..'
  ];
  guild.owner.send(biggz);
  console.log(`LOG: ${guild.name}. sunucuya katıldım!`);
})
client.login(ayarlar.token)