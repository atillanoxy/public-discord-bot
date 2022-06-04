const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  
      if(message.author.id !== "711341385231368222") if(message.author.id !== "711341385231368222"){
  return message.channel.send('🚫 Geliştiricim Değilsin!')
        };

     const embed = new Discord.MessageEmbed()
    .setAuthor('Tokenimi Veremem')
    .setColor("RANDOM")
    .setDescription(`Çünkü benim tokenim yok ${message.author}`)
     if (args[0] === "client.token") return message.channel.send(embed)
 
     
    
      try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled));
    } catch (err) {
      message.channel.send(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eval'],
  permLevel: 0
};

exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [Kodunuz]'
};
