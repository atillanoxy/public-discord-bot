const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const db = require("quick.db");
exports.run = async (client, message, args) => {
const memberMent = message.mentions.members.first()
const memberIdOrAuthor = message.guild.members.cache.get(args[0]) || message.author

try {
   if(message.mentions.members.first()) {
    if(!memberMent) return message.reply("<a:unlem:909343654081085481> Bir kişi etiketlemeli veya ID'sini girmelisin");
    let rozetler = db.get(`rozetler.${memberMent.user.id}`) || "Bu kullanıcının rozeti bulunmamakta"
    const mentEmbed = new MessageEmbed()
    .setTitle(`${memberMent.user.username} adlı kullanıcının profili`)
    .setThumbnail(memberMent.user.displayAvatarURL())
    .setDescription(`Rozetler: \n${rozetler}`)
    message.channel.send(mentEmbed) 
} else {
    if(!memberIdOrAuthor) return message.reply("Bir kişi etiketlemeli veya ID'sini girmelisin");
    let rozetler = db.get(`rozetler.${memberIdOrAuthor.id}`) || "Bu kullanıcının rozeti bulunmamakta"
    const othEmbed = new MessageEmbed()
    .setTitle(`${memberIdOrAuthor.username} adlı kullanıcının profili`)
    .setThumbnail(memberIdOrAuthor.displayAvatarURL())
    .setDescription(`Rozetler: \n${rozetler}`)    
    message.channel.send(othEmbed) 
}
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
    name: 'profil',
    description: '',
    category: ''
}
 
