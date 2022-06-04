const wensamita = require('discord.js');

//Wen
exports.run = function(client, message) {
const imdat = new wensamita.MessageEmbed()
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setColor('#FF0000')
.setTitle(`Aylin 💖 Alperen`)
.addField('Kanatlarım yok belki ama senin varlığının verdiği mutluluk ile göklerde uçuyorum.', 'Alperen seni seviyor')
.setImage('https://i.pinimg.com/736x/19/50/45/19504538eab9066ab46800873aae0989.jpg')
.setThumbnail('https://c.tenor.com/muwCfXTsTScAAAAC/kalp.gif')
.setFooter('Winter Bot')
message.channel.send(imdat)
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["alpin", "alpin", "alpin"], 
  permLevel: 0 
};

exports.help = {
  name: 'alpin',
  description: 'Tüm komutları gösterir.',
  usage: 'eqweqw'
};