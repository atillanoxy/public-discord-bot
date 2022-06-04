const Discord = require('discord.js');
const data = require('fera.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
 
if(message.author.id !== message.guild.owner.id) return message.channel.send(nn.setImage('https://i.imgur.com/KKywwBj.png').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`!koruma\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.

Sunucu Sahibi**
${message.guild.owner.user.tag}`))

const sistem = await data.fetch(`spam.${message.guild.id}`);
if(sistem) return message.channel.send(nn.setDescription(`Korumalar zaten aktif. Daha neyi açmaya çalışıyorsun? 😑`)).then(a => a.delete({timeout: 10000}));

data.set(`spam.${message.guild.id}`, 'açık');
return message.channel.send(nn.setTitle(`İşte bu kadar!`).setColor('#000001').setDescription('Sistem başarıyla açıldı'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'spam'
};