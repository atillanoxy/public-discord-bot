const Discord = require('discord.js');

exports.run = (client, message, args) => {
            message.channel.clone().then(knl => {
              let position = message.channel.position;
              knl.setPosition(position);
              knl.send(`Nuked`);
              message.channel.delete();
            });
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3 //Perm leveli istediğiniz gibi değiştirebilirsiniz.
};

exports.help = {
    name: 'nuke',
    description: 'Kanalı siler ve aynı kategoriye yenisini açar ve kanalın içindeki tüm mesajlar gider.',
    usage: 'nuke'
};