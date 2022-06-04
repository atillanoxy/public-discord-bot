const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send(':thinking:  Hemen Yazıyorum... :stuck_out_tongue_winking_eye: ').then(message => {
   var espriler = [' **Gülen ördeğe ne denir? Kıkır-Duck ** ' ,' **Siviller hangi dili konuşur? -Sivilce** ' ,' **Kırmızı Giyen Erkeğe ne denir? -Albay** ' ,' **En Çok eşşek yavrusu nerde bulunur -Spa Merkezinde** ' ,' **Hava korsanı uçağı kaçıracaktı ama yapamadı çünkü uçağı kaçırdı.** ' ,' **Seven unutmaz oğlum, eight unutur.** ' ,' ** Geçen file çorap aldım, zürafaya almadım** ' ,' **Bak şu karşıdaki uçak PİSTİ, ama bir türlü temizlemediler.** ' ,' **Uzun lafın kısası: U.L.** ' ,' **Sen kamyonu al, Leonardo da vinci.** '];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espri', 'espiri'],
  permLevel: 0
};

exports.help = {
  name: 'Espri',
  description: 'Espri Yapar',
  usage: 'Espri'
};