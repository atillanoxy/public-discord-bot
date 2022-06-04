const Discord = require('discord.js');
const data = require('quick.db');


exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.glitch.com/6f5bb25b-c11b-4003-8a39-69490341df18%2FScreenshot_1.png'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Oyun & Sohbet Tema')
.setThumbnail('https://cdn.discordapp.com/avatars/686185592899633200/6499d2f1c46b106eed1e25892568aa55.webp?size=512')
.setFooter(`Ping: ${client.ws.ping.toFixed(0)}`, client.user.avatarURL({dynamic: true}))
.setDescription(`${message.author} **Sunucunun** kurulmasını onaylıyor musun? 😇

**Dipnot:** Bazı kanllar silinmemiş gibi görünebilir. Discord dan çıkıp girin düzelir.`)).then(resulter => {
resulter.react('✅').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {
message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' silindi sqrt'));
message.guild.channels.cache.forEach(a => a.delete());

message.guild.roles.create({ data: { name: 'Kurucu' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('#070719');
});
message.guild.roles.create({ data: { name: 'Yönetici' }, reason: 'ayn' }).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'KICK_MEMBERS', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#3b0b0b');
});
message.guild.roles.create({ data: { name: 'Moderatör' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: '👑 | Kurucu' }, reason: 'ayn' }).then(s => s.setColor('#df00'))
message.guild.roles.create({ data: { name: '⛔ | Yönetici' }, reason: 'ayn' }).then(s => s.setColor('#df0000'))
message.guild.roles.create({ data: { name: '⛩ | Rehber' }, reason: 'ayn' }).then(s => s.setColor('#955aab'))
message.guild.roles.create({ data: { name: '🌸 | Özel Üye' }, reason: 'ayn' }).then(s => s.setColor('#2e9afe'))
message.guild.roles.create({ data: { name: '💛 | Üye' }, reason: 'ayn' }).then(s => s.setColor('#00ff40'))
message.guild.roles.create({ data: { name: '🔮・Botlar' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))

message.guild.channels.create('●▬▬๑「Kayıt Alanı」๑▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('・register-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎤 | Teyit ¹', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('🎤 | Teyit ²', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('🎤 | Teyit ³', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
});

message.guild.channels.create('§▬▬▬「GENEL」▬▬▬§', {type: 'category'}).then(parent => {
message.guild.channels.create('📃・kurallar', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📢・duyurular', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💾・sunucu-log', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('☆▬▬「BİLGİLENDİRME」▬▬☆', {type: 'category'}).then(parent => {
message.guild.channels.create('💬・sohbet', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📷・galeri', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🤖・bot-komut', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎁・boost-bilgi ', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('☆▬▬▬▬「🖨」▬▬▬▬☆', {type: 'category'}).then(parent => {
message.guild.channels.create('📥・sayaç', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🚪・giriş-çıkış', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('♢▬▬▬「YÖNETİM」▬▬▬♢', {type: 'category'}).then(parent => {
message.guild.channels.create('📌・şikayet-öneri', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🏆・Yönetici Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🏆・Kurucu Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});


message.guild.channels.create('●▬▬▬▬๑「🎵 Müzik Alanı」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('🎵 ・ Music Room', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎤 ・ Live Music', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('🔓 ・ Free Style', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('💫・ Starbucks', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});

message.guild.channels.create('●▬▬▬▬๑「Eğlence Alanı」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('💼・tuttu-tutmadı', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🚫・bir-söz-bırak', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔎・instagram', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎆・sayı-sayma', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📘・şarkı-türet', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('●▬▬▬▬๑「🎰 Oyun Alanı」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('👥・oyun-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎮・League Of Legends', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・ZULA', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('🎮・CSGO', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・PUBG', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・FORTNİTE', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・MİNECRAFT', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('🎮・ROBLOX', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・APEX', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});
});

no.on('collect', async reaction => {
resulter.delete();
});

})


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kur'
};