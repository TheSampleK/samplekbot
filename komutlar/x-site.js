const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const prefix = process.env.PREFIX;
exports.run = async (client, message, args) => {
  
  const yt = new MessageButton().setLabel('CoderX Web').setStyle('LINK').setURL('https://coderxbot.tr.gg/');
  const dc = new MessageButton().setLabel('CoderX Destek').setStyle('LINK').setURL('https://discord.io/brkk');
  const row = new MessageActionRow().addComponents(dc, yt)
  const embed = new MessageEmbed()
  .setTitle(`<:squarepartner:1051899436088954960> WEB SİTEM <:squarepartner:1051899436088954960>`)
.setDescription("\n\n <:info:1051899445169635389> [WEB SİTEM](https://samplebot.my.canva.site/) ")




  .setColor('#d6680e')
  
  message.channel.send({embeds: [embed]})

};

exports.name = "site";