let database = require("fera.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`<a:unlem:909343654081085481> Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(`<a:unlem:909343654081085481> Bir kanal etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonelog #kanal`)
  
  
  database.set(`abonelog.${message.guild.id}`, log.id)
  message.channel.send(`Abone kanalı başarıyla ${log} olarak ayarlandı.`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-log'],
  perm: 0
}
exports.help = {
  name: 'abonelog'
}

exports.play = {
  kullanım: '!abonelog #kanal',
  açıklama: 'Abone Logunu Ayarlarsınız',
  kategori: 'Abone'
}