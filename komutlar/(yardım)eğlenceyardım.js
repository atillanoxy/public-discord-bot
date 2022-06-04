const wensamita = require('discord.js');

//Wen
exports.run = function(client, message) {
const imdat = new wensamita.MessageEmbed()
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setColor('RANDOM')
.setTitle(`Winter Bot Eğlence menüsü`)
.addField('<a:winterok:909343302086713404> 8ball oynarsınız', '!8ball')
.addField('<a:winterok:909343302086713404> Düello atarsınız', '!düello')
.addField('<a:winterok:909343302086713404> Bot soğuk espri yapar', '!espri')
.addField('<a:winterok:909343302086713404> Bot matematik işlemi yapar', '!hesapla')
.addField('<a:winterok:909343302086713404> Aşık olduğunuz kişinn dudağına yapışırsınız', '!op')
.addField('<a:winterok:909343302086713404> Stres Çarkı çevirirsiniz', '!stresçarkı')
.addField('<a:winterok:909343302086713404> Yazı tura oynarsınız', '!yazıtura')
.addField('<a:winterok:909343302086713404> Slot oynarsınız', '!slots')
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
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'eqweqw'
};
;
;
