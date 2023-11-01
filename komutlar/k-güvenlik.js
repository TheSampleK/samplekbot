const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const prefix = process.env.PREFIX;
exports.run = async (client, message, args) => {
  
  const dc = new MessageButton().setLabel('Sample TOP.GG').setStyle('LINK').setURL('https://top.gg/bot/1046832784267812884');
const yt = new MessageButton().setLabel('Sample Destek').setStyle('LINK').setURL('https://discord.gg/mdeQPNZ9M4');
  const row = new MessageActionRow().addComponents(dc, yt)
  const embed = new MessageEmbed()
  .setTitle(`<:info:1051899445169635389> Sample | Güvenlik <:info:1051899445169635389>`)
.setDescription(" ・・・・・・・・\n\n<:online:1051899418946838528> **・Veri Erişimi** \n\n **1)** Mesajları oku: Sunuculardaki mesajlara erişebilir ve içeriklerinin okuyabilir. \n\n **2)** Durum: Sunucu üyelerinin çevrimiçi durumlarını ve hangi oyunları oynadıklarını, ne izlediklerini veya ne dinlediklerini görebilir. \n\n **3)** Üyeler: Sunuculardakileri ve sunuculardakilerinin rol, kullanıcı adı ve izin değişikliklerini görebilir.")



  
  .setColor('#ffffff')
  .setImage("https://cdn.discordapp.com/attachments/1047445576754679848/1052267748094394418/SampleKaytGif.gif")
  message.channel.send({embeds: [embed], components:[row]})

};

exports.name = "güvenlik";