const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const prefix = process.env.PREFIX;
exports.run = async (client, message, args) => {
  
  const dc = new MessageButton().setLabel('Sample TOP.GG').setStyle('LINK').setURL('https://top.gg/bot/1046832784267812884');  
const yt = new MessageButton().setLabel('Sample Destek').setStyle('LINK').setURL('https://discord.gg/mdeQPNZ9M4');
  const row = new MessageActionRow().addComponents(dc, yt)
  const embed = new MessageEmbed()
  .setTitle(`<:info:1051899445169635389> Sample | Kayıt Menüsü <:info:1051899445169635389> \n`)
  .addField(`> <:online:1051899418946838528>  ${prefix}kayıt`,`Kullanıcıları kayıt eder.`,false) 
  .addField(`> <:online:1051899418946838528>  ${prefix}yetkili-rol ayarla/sıfırla`,`kayıt yetkili rolü ayarlar/sıfırlar.`,false)
  .addField(`> <:online:1051899418946838528>  ${prefix}kayıt-rol ayarla/sıfırla`,`kayıt edilince verilecek rolü ayarlar/sıfırlar.`,false)
  .addField(`> <:online:1051899418946838528>  ${prefix}kayıtsız-rol ayarla/sıfırla`,`kayıtsız rolünü ayarlar/sıfırlar.`,false)
  .addField(`> <:online:1051899418946838528>  ${prefix}kayıt-kanal ayarla/sıfırla`,`kaydın yapılacağı kanalı ayarlar/sıfırlar.`,false)
  .addField(`> <:online:1051899418946838528>  ${prefix}kayıt-log ayarla/sıfırla`,`logların gideceği kanalı ayarlar/sıfırlar.`,false)
  .setFooter(`Komut ${message.author.tag} tarafından kullanıldı.`, message.author.avatarURL({dynamic:true}))
  .setColor('#ffffff')
  .setImage("https://cdn.discordapp.com/attachments/1047445576754679848/1052267748094394418/SampleKaytGif.gif")
  message.channel.send({embeds: [embed], components:[row]})

};

exports.name = "kayıt-yardım";