const Discord = require("discord.js");
let orospu = "true" 
exports.run = (client, message, args, anticode) => {
if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`<a:unlem:909343654081085481> Bu komutu kullanabilmek için **Üyeleri Engelle** yetkisine sahip olmalısın!`));
let warn = `@`
const memberanticode = message.mentions.members.first();//Anticode
if (!message.mentions.members.first()) {
let sebep = args.slice(1).join(" ")
let guild = message.guild;
let id = args[0]//AntiCode 
const banndd = client.users.cache.get(id)
if(!id) return message.channel.send("<a:unlem:909343654081085481> Bir Üye IDsi gir")
if(id == message.author.id) return message.reply("<a:unlem:909343654081085481> Kendini mi banlayacaksın, hmm...")

if(!sebep) return message.channel.send("Bir Sebep Gir")

//ANTİCODE
if(id == message.author.id) return message.reply('<a:unlem:909343654081085481> Kendini mi banlayacaksın,  hm..') 
message.guild.members.ban(id, { reason: sebep})
//ANTİCODE
const ban = new Discord.MessageEmbed()
.setColor('RANDOM')
.setImage("https://cdn.discordapp.com/attachments/780206454770630676/780564660046397470/1c6c3e07b46b40dab72bbacedae268cf.gif%22")
//if(banladim > 0) ban.addField(`** **,**${member}** isimli kullanıcı bir sorun nedeniyle banlanamadı.`)
ban.setDescription(`**${banndd}** isimli kullanıcı **${sebep}** sebebiyle **${message.author}** tarafından banlandı.`)

message.channel.send(ban)
//client.users.cache.get(id).send(`**${sebep}** sebebiyle **${message.guild.name}** isimli sunucudan banlandın.`)

}else{

let sebep = args.slice(1).join(" ")
let guild = message.guild;

if(!memberanticode) return message.channel.send("<a:unlem:909343654081085481> Bir Üye Etıketle.")

if(memberanticode == message.author) return message.reply("<a:unlem:909343654081085481> Kendini mi banlayacaksın, hmm...")
    
if(message.guild.member(message.author).roles.highest.position  <= message.guild.member(memberanticode).roles.highest.position)
{
return message.channel.send("<a:unlem:909343654081085481> Kulanıcının yetkisi seninle aynı veya senden daha yüksek olduğu için komut geçersiz.")
}

if(message.guild.member(client.user).roles.highest.position  <= message.guild.member(memberanticode).roles.highest.position)
{
return message.channel.send("<a:unlem:909343654081085481> Botun rolü kullanıcadan daha düşük.")
}

if(!sebep) return message.channel.send("<a:unlem:909343654081085481> Bir Sebep Gir")

message.guild.members.ban(memberanticode, { reason: sebep})

const ban = new Discord.MessageEmbed()
.setColor('RANDOM')
.setImage("https://media.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif?cid=ecf05e472a1psf4r12a4cdwxcgr685uzjl237x132dgzq3pg&rid=giphy.gif&ct=g")
ban.setDescription(`**${memberanticode}** isimli kullanıcı **${sebep}** sebebiyle **${message.author}** tarafından banlandı.`)

message.channel.send(ban)
client.users.cache.get(memberanticode.id).send(`**${sebep}** sebebiyle **${message.guild.name}** isimli sunucudan banlandın.`)
} 
  
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['ban','yasakla'],
  permLevel: 0, 
  amcık: orospu
};
exports.help = {
  name: 'ban', 
  description: 'misixban', 
  usage: '!ban @user <sebep>' 
};;