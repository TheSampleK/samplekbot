const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const prefix = process.env.PREFIX;
exports.run = async (client, message, args) => {
  
  const yt = new MessageButton().setLabel('CoderX Web').setStyle('LINK').setURL('https://coderxbot.tr.gg/');
  const dc = new MessageButton().setLabel('CoderX Destek').setStyle('LINK').setURL('https://discord.io/brkk');
  const row = new MessageActionRow().addComponents(dc, yt)
  const embed = new MessageEmbed()
  .setTitle(`<:rules:1051899453344317530> Kurallar - Rules <:rules:1051899453344317530>`)
.setDescription("\n\n **TR** \n <:report:1051899456741703810>  [Discord Topluluk Kuralları'na](https://discord.com/terms) uyun. \n\n **EN** \n <:report:1051899456741703810> Obey [Discord Community Guidelines](https://discord.com/terms)")




  .setColor('#ffffff')
  
  message.channel.send({embeds: [embed]})

};

exports.name = "kural-yaz";