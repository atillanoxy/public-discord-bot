let database = require("fera.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`<a:unlem:909343654081085481> Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`<a:unlem:909343654081085481> Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abone-y-rol @rol`)
  
  
  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id)
  message.channel.send(`Abone yetkilisi başarıyla ${rol} olarak ayarlandı.`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-y-rol'],
  perm: 0
}
exports.help = {
  name: 'abone-yetkili-rol'
}

exports.play = {
  kullanım: 'abone-y-rol @rol',
  açıklama: 'Abone Yetkili Rolünü Ayarlarsınız',
  kategori: 'Abone'
}