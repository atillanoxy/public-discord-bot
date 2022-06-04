const wensamita = require('discord.js'); 

//Wen
exports.run = function(client, message) {
const imdat = new wensamita.MessageEmbed()
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setColor('RANDOM')
.setTitle(`» ${client.user.username} Yardım Menüsü`)
.addField('<a:winterok:909343302086713404> Eğlence Komutları', '!eğlence')
.addField('<a:winterok:909343302086713404> Moderasyon Komutları', '!moderasyon')
.addField('<a:winterok:909343302086713404> Gif Komutları', '!gif')
.addField('<a:winterok:909343302086713404> Abone Sistem', '!abonesistem')  
.addField(':link: **Bağlantılar** :link: ', '**[Website](https://winterproject.cf/)**    **[Destek Sunucusu](https://discord.gg/sS6q46GpnX)**      **[Oy Ver](https://top.gg/bot/872137409419153468/vote)**')
.addField('__**Yeni Başlıyoruz**__', '💐')
.setImage('https://media.discordapp.net/attachments/887390925968511006/903348693896405022/standard_1.gif')
.setFooter('Winter Bot');
message.channel.send(imdat)
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["help", "y", "h"], 
  permLevel: 0 
}; 

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: '31'
};;
