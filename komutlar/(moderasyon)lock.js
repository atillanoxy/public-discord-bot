const Discord = require('discord.js');
 
exports.run = (client, message, args) => {
if(!message.member.hasPermission('782286411281858570')) return;

let channel = message.mentions.channels.first() || message.channel;

let reason;
if(!message.mentions.channels.first()) {
if(args[0]) reason = args.slice(0).join(' ');
};
if(message.mentions.channels.first()) {
if(args[1]) reason = args.slice(1).join(' ');
};
             
let reasonn;
if(!reason) reasonn = 'Sebep Girilmemiş.';
if(reason) reasonn = `${reason}.`;
message.channel.send(`Kanal ${channel} kilitlendi.`).then(m => m.delete({timeout: 7000}));

let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': false }, 'Kilitleyen '+message.author.tag);
channel.send(new Discord.MessageEmbed()
.setColor('RED')
.setTitle(channel.name+' kilitlendi.')
.setDescription(`Ne yazık ki, modlar bunu kilitlemek zorunda kaldı \nKilitlenme Sebebi: ${reasonn}`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kilit','kanalkilit','kanal-kilit'],
  permLevel: 0
};
 
exports.help = {
  name: 'lock'
};