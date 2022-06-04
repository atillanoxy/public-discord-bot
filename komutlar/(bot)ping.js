const Discord = require('discord.js')
exports.run = async (client, message, args) => {
try {
  let p = client.ws.ping; 
  let ping = `💚 ${p}`
  if (p > 500) ping = `💛 ${p}`
  if (p > 1000) ping = `❤️ ${p}`
  let renk = `GREEN`
  if (p > 500) renk = `YELLOW`
  if (p > 1000) renk = `RED`
  let wen = new Date().getTime() - message.createdTimestamp; 
  let p2 = `💚 ${p}`
  if (wen > 500) p2 = `💛 ${wen}`
  if (wen > 1000) p2 = `❤️ ${wen}`
        let embed1 = new Discord.MessageEmbed()
        .setDescription("🏓 Pong! \n Ölçümler yapılıyor...")
        .setColor("BLUE")
        let embed = new Discord.MessageEmbed()
        .setTitle(`🏓 Pong!`)
        .setColor(renk)
        .addField("💻 Bot Pingi", `${ping} ms`, true)
        .addField("📶 Mesaj Pingi", `${p2} ms`, true)
        if (p > 1000) embed = new Discord.MessageEmbed() //eğer yüksek ping uyarısı istemiyorsanız burayı kaldırın
        .setColor("RED")
        .setDescription(`
        **!! YÜKSEK PİNG UYARISI !!**
        Şu anda bulunduğunuz sunucunun pingi: ${ping} ms
        Şu anda bulunduğunuz sunucunun mesaj pingi: ${p2} ms
        Pingi azaltmak için sunucu bölgesini değiştirebilir
        veya [destek sunucuma](https://discord.gg/sS6q46GpnX) gelerek sorunu anlatabilirsin.
        `)
      message.channel.send(embed1)
      .then((neiva) => neiva.edit(embed))
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
    name: 'ping',
    description: '',
    category: ''
}