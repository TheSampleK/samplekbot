const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const prefix = process.env.PREFIX;
exports.run = async (client, message, args) => {
  
const dc = new MessageButton().setLabel('Sample TOP.GG').setStyle('LINK').setURL('https://top.gg/bot/1046832784267812884');
const yt = new MessageButton().setLabel('Sample Destek').setStyle('LINK').setURL('https://discord.gg/mdeQPNZ9M4');
  const row = new MessageActionRow().addComponents(dc, yt)
  const embed = new MessageEmbed()
  .setTitle(`<:squarepartner:1051899436088954960> DURUM MESAJI <:squarepartner:1051899436088954960>`)
.setDescription("・・・・・・\n\n <:servers:1051899425523515432> ***TÜM SUNUCULARDA TEKRAR AKTİFİM.*** \n\n Mesajın Konumu: <#1051895198608793740> ・ https://discord.gg/mdeQPNZ9M4")




  .setColor('#ffffff')
  
  message.channel.send({embeds: [embed]})

};

exports.name = "aktif-oldum";