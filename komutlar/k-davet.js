const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const prefix = process.env.PREFIX;
exports.run = async (client, message, args) => {
  
  const dc = new MessageButton().setLabel('Sample TOP.GG').setStyle('LINK').setURL('https://top.gg/bot/1046832784267812884');
const yt = new MessageButton().setLabel('Sample Destek').setStyle('LINK').setURL('https://discord.gg/mdeQPNZ9M4');
  const row = new MessageActionRow().addComponents(dc, yt)
  const embed = new MessageEmbed()
  .setTitle(`<:info:1051899445169635389> Sample | Davet <:info:1051899445169635389>`)
.setDescription(' ・・・・・・・・\n\n<:online:1051899418946838528> [**Davet Et!**](https://discord.com/oauth2/authorize?client_id=1046832784267812884&scope=bot&permissions=0)')


.setFooter(`Komut ${message.author.tag} tarafından kullanıldı.`, message.author.avatarURL({dynamic:true}))
  
  .setColor('#ffffff')
  .setImage("https://cdn.discordapp.com/attachments/1047445576754679848/1052267748094394418/SampleKaytGif.gif")
  message.channel.send({embeds: [embed], components:[row]})

};

exports.name = "davet";