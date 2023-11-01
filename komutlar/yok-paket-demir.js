const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const prefix = process.env.PREFIX;
exports.run = async (client, message, args) => {
  
  const yt = new MessageButton().setLabel('CoderX Web').setStyle('LINK').setURL('https://coderxbot.tr.gg/');
  const dc = new MessageButton().setLabel('CoderX Destek').setStyle('LINK').setURL('https://discord.io/brkk');
  const row = new MessageActionRow().addComponents(dc, yt)
  const embed = new MessageEmbed()
  .setTitle(`<:emoj_gozluk33:925391296141619270> Özel CoderX | Demir Paket <:emoj_gozluk33:925391296141619270>`)
.setDescription("<:emoj_gozluk33:925391296141619270> ***Demir Paket Özellikleri*** <:emoj_gozluk33:925391296141619270> \n\n <:nitro_gozluk:917112354116866078> `Botuna özel profil resmi` \n\n <:nitro_gozluk:917112354116866078> `Özel belirlediğin isim` \n\n <:nitro_gozluk:917112354116866078> `Botuna Özel Gif` \n\n <:nitro_gozluk:917112354116866078> `Kayıt Yardım Seçeneği` \n\n <:nitro_gozluk:917112354116866078> `Buton Seçeneği` \n\n <:nitro_gozluk:917112354116866078> `7/24 aktif bot`")



  
  .setColor('#ff0000')
  .setImage("https://cdn.discordapp.com/attachments/927185412835917864/940969975630397460/ozelcoderx.gif")
  message.channel.send({embeds: [embed], components:[row]})

};

exports.name = "demir-paket--/3";