const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const prefix = process.env.PREFIX;
exports.run = async (client, message, args) => {
  
  const dc = new MessageButton().setLabel('Sample TOP.GG').setStyle('LINK').setURL('https://top.gg/bot/1046832784267812884');
const yt = new MessageButton().setLabel('Sample Destek').setStyle('LINK').setURL('https://discord.gg/mdeQPNZ9M4');
  const row = new MessageActionRow().addComponents(dc, yt)
  const embed = new MessageEmbed()
  .setTitle(`Sample | AnaMenü`)
.setDescription(' <:info:1051899445169635389>  ***Selam, Sample kayıt botunu kullanmaya hazır mısın?***')


.addField(`> <:online:1051899418946838528>  ${prefix}kayıt-yardım`,`Kayıt Menüsünü Açar.`,false)
.addField(`> <:online:1051899418946838528>  ${prefix}bilgi`,`Bilgi Menüsünü Açar.`,false)
.addField(`> <:online:1051899418946838528>  ${prefix}yenilikler`,`Yenilikler Menüsünü Açar.`,false)
  .addField(`> <:online:1051899418946838528>  ${prefix}davet`,`SAMPLE KAYIT botunu davet etme menüsünü açar.`,false)
  .addField(`> <:online:1051899418946838528>  ${prefix}oyver`,`SAMPLE botuna oy verirsiniz.`,false)
.addField(`> <:online:1051899418946838528>  ${prefix}güvenlik`,`SAMPLE botunun veri erişimi vb. şeyler hakkında bilgi alırsınız.`,false)
.addField(`> <:online:1051899418946838528>  ${prefix}site`,`SAMPLE botunun sitesine erişirsiniz..`,false)
  



.setFooter(`Komut ${message.author.tag} tarafından kullanıldı.`, message.author.avatarURL({dynamic:true}))



  
  .setColor('#ffffff')
  .setImage("https://cdn.discordapp.com/attachments/1047445576754679848/1052267748094394418/SampleKaytGif.gif")
  message.channel.send({embeds: [embed], components:[row]})

};

exports.name = "yardım";