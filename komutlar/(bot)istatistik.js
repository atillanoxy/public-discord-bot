const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("© 2021 Winter", client.user.avatarURL())
    .addField(":crown: **Botun Sahibi** :crown:", "\🔥 <@711341385231368222> / SOULFLY#2155 \🔥")
    .addField("<a:ayar:909343471800827914> **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("<a:ayar:909343471800827914> **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("<a:ayar:909343471800827914> **Çalışma süresi**", seksizaman, true)
    .addField("<a:ayar:909343471800827914> **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("<a:ayar:909343471800827914> **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField("<a:ayar:909343471800827914> **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField("<a:ayar:909343471800827914> **Node.JS sürüm**", `${process.version}`, true)
    .addField("<a:ayar:909343471800827914> **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField("<a:ayar:909343471800827914> **Bit**", `\`${os.arch()}\``, true)
    .addField("<a:ayar:909343471800827914> **İşletim Sistemi**", `\`\`${os.platform()}\`\``, true)
    .setImage('https://media.discordapp.net/attachments/887390925968511006/903348693896405022/standard_1.gif')
    .setFooter('Winter Bot')
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};