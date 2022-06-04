const wensamita = require('discord.js');

//Wen
exports.run = function(client, message) {
const imdat = new wensamita.MessageEmbed()
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setColor('RANDOM')
.setTitle(`Winter Bot Gif menüsü`)
.addField('<a:winterok:909343302086713404> Abone Log kanalını ayarlar', '!abonelog #kanal')
.addField('<a:winterok:909343302086713404> Abone Rolü ayarlar', '!abonerol @rol')
.addField('<a:winterok:909343302086713404> Abone Rol verme yetkisi ayarlar', '!abone-y-rol @rol')
.addField('<a:winterok:909343302086713404> Yetkililerin Abone rol vermesini sağlar', '!abone')
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
  name: 'abonesistem',
  description: 'Tüm komutları gösterir.',
  usage: 'eqweqw'
};
