const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
exports.run = async (client, message, args) => {
try {
   
    const embed = new MessageEmbed()
    .setColor(`#34ff14`)
    .setTitle(`Botumuza oy vermek için`)
    .setThumbnail(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjL8-2xWlJEQSltGSOpvsL3hLjDUlE5ULkA&usqp=CAU`)
    .setDescription(`**[Tıkla](https://top.gg/bot/872137409419153468/vote)**`)
    .setFooter('Winter Bot', 'https://winterproject.cf/assets/winter.png');
    
    message.channel.send(embed)
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
    name: 'oy',
    description: '',
    category: ''
} 
