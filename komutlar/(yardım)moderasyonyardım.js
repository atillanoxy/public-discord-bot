const wensamita = require('discord.js');

//Wen
exports.run = function(client, message) {
const imdat = new wensamita.MessageEmbed()
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setColor('RANDOM')
.setTitle(`Winter Bot Moderasyon menüsü`)
.addField('<a:winterok:909343302086713404> Belirtilen Kullanıcıya Ban atar', '!ban')
.addField('<a:winterok:909343302086713404> Belirtilen Kullanıcıyı sunucudan atar', '!kick')
.addField('<a:winterok:909343302086713404> Belirtilen Kanalı kilitler', '!lock')
.addField('<a:winterok:909343302086713404> Belirtilen Kanalın kilidini açar', '!unlock')
.addField('<a:winterok:909343302086713404> Belirtilen Kanalı siler ve aynı özelliklere sahip bir şekilde açar', '!nuke')
.addField('<a:winterok:909343302086713404> Belirtilen Sayıda Mesaj Siler', '!sil')
.addField('<a:winterok:909343302086713404> Sunucun çok mu kötü görünüyor O zaman senin için bot kursun', '!sunucu-kur')
.addField('<a:winterok:909343302086713404> Bir kullanıcı selam verdiğinde cevap olarak as yazar', '!sa-as aç')
.addField('<a:winterok:909343302086713404> Sunucunda Spam yapılmasını önler', '!spam aç')
.setImage('https://media.discordapp.net/attachments/887390925968511006/903348693896405022/er', '!spam aç')
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
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'eqweqw'
};
