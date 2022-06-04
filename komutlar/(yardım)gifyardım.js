const wensamita = require('discord.js');

//Wen
exports.run = function(client, message) {
const imdat = new wensamita.MessageEmbed()
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setColor('RANDOM')
.setTitle(`Winter Bot Gif menüsü`)
.addField('<a:winterok:909343302086713404> Rastgele anime gifleri gönderir', '!anime')
.addField('<a:winterok:909343302086713404> Rastegele bebek gifleri gönderir', '!baby')
.addField('<a:winterok:909343302086713404> Rastgele hayvan gifleri gönderir', '!animal')
.addField('<a:winterok:909343302086713404> Rastgele erkek gifleri atar', '!man')
.addField('<a:winterok:909343302086713404> Rastgele kız gifleri atar', '!woman')
.setImage('https://media.discordapp.net/attachments/887390925968511006/903348693896405022/standard_1.gif')
.setFooter('!oy vererek destek olabilirsiniz')
message.channel.send(imdat)
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["help", "y", "h"], 
  permLevel: 0 
};

exports.help = {
  name: 'gif',
  description: 'Tüm komutları gösterir.',
  usage: 'eqweqw'
};;
