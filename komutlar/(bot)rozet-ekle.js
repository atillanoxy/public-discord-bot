const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const db = require("quick.db");
exports.run = async (client, message, args) => {
try {
    if(message.author.id !== "711341385231368222") return message.reply("<a:unlem:909343654081085481>Yetersiz etki!");
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!member) return message.reply("<a:unlem:909343654081085481> Bir kişi etiketlemeli veya ID'sini girmelisin");
    let rozet = args[1];
    if(!rozet) return message.reply("<a:unlem:909343654081085481> Bir rozet ismi girmelisin");
    const rozetler = db.get(`rozetler.${member.user.id}`);
    if(rozetler && rozetler.includes(rozet)) return message.reply("<a:unlem:909343654081085481> Bu kişide zaten bu rozet var!");
    const basarili = new MessageEmbed()
    .setTitle("Başarılı")
    .setDescription(`${member} kişisine başarıyla ${rozet} rozeti verildi`)
    db.push(`rozetler.${member.user.id}`, rozet);

    } catch(err) {
    console.log(err)
     }   
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["p"],
    permLevel: 0
  };
exports.help = {
    name: 'rozet-ekle',
    description: '',
    category: ''
};