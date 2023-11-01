const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const prefix = process.env.PREFIX;
exports.run = async (client, message, args) => {
  
  const dc = new MessageButton().setLabel('Sample TOP.GG').setStyle('LINK').setURL('https://top.gg/bot/1046832784267812884');  
const yt = new MessageButton().setLabel('Sample Destek').setStyle('LINK').setURL('https://discord.gg/mdeQPNZ9M4');
  const row = new MessageActionRow().addComponents(dc, yt)
  const embed = new MessageEmbed()
  .setTitle(`<:info:1051899445169635389> Sample | Hakkında <:info:1051899445169635389>`)
.setDescription(' ・・・・・・・・ \n\n<:dev:1051899414219857940> **Yapımcı:** <@791682296755257354>      \n\n          <:info:1051899445169635389> **Versiyon:** V13 \n\n <:squarepartner:1051899436088954960> **İşletim Sitemi:** `LİNUX 64BİT` \n\n <:timeout:1051899416803549245> **Ping:** 17ms (__Genel ortalama alınmıştır.__)   \n\n<:rules:1051899453344317530> **Destek sunucusu:** https://discord.gg/mdeQPNZ9M4 \n\n<:file:1051899431903035463> **Top.gg:** https://bit.ly/3iFMFiy')


.setFooter(`Komut ${message.author.tag} tarafından kullanıldı.`, message.author.avatarURL({dynamic:true}))
  
  .setColor('#ffffff')
  .setImage("https://cdn.discordapp.com/attachments/1047445576754679848/1052267748094394418/SampleKaytGif.gif")
  message.channel.send({embeds: [embed], components:[row]})

};

exports.name = "bilgi";