const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const prefix = process.env.PREFIX;
exports.run = async (client, message, args) => {
  
const dc = new MessageButton().setLabel('Sample TOP.GG').setStyle('LINK').setURL('https://top.gg/bot/1046832784267812884');  
const yt = new MessageButton().setLabel('Sample Destek').setStyle('LINK').setURL('https://discord.gg/mdeQPNZ9M4');
  const row = new MessageActionRow().addComponents(dc, yt)
  const embed = new MessageEmbed()
  .setTitle(`<:pre:1051899423740928030> Özel Sample <:pre:1051899423740928030>`)
.setDescription("<:servers:1051899425523515432> ***'Sample ÖZEL' Paket Özellikleri*** <:servers:1051899425523515432> \n\n <:servers:1051899425523515432> `Botuna Özel Gif` \n\n <:servers:1051899425523515432> `?bilgi | ?yenilikler komutu` \n\n <:servers:1051899425523515432> `Top.gg Ye ekleme!` \n\n <:servers:1051899425523515432> `SAMPLE botundan daha hızlı çalışır ve daha az pinglidir.` \n\n <:servers:1051899425523515432> `Buton Seçeneği` \n\n <:servers:1051899425523515432> `7/24 aktif bot`")


.setFooter(`Komut ${message.author.tag} tarafından kullanıldı.`, message.author.avatarURL({dynamic:true}))
  
  .setColor('#ff0000')
  .setImage("https://cdn.discordapp.com/attachments/1047445576754679848/1052267748094394418/SampleKaytGif.gif")
  message.channel.send({embeds: [embed], components:[row]})

};

exports.name = "paket-bilgi";