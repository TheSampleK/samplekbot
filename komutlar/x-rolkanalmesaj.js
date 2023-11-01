const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const prefix = process.env.PREFIX;
exports.run = async (client, message, args) => {
  
  const yt = new MessageButton().setLabel('CoderX Web').setStyle('LINK').setURL('https://coderxbot.tr.gg/');
  const dc = new MessageButton().setLabel('CoderX Destek').setStyle('LINK').setURL('https://discord.io/brkk');
  const row = new MessageActionRow().addComponents(dc, yt)
  const embed = new MessageEmbed()
  .setTitle(`<:rules:1051899453344317530> Dikkat <:rules:1051899453344317530>`)
.setDescription("\n\n <:squarepartner:1051899436088954960> Gereksiz yere rol almayınız. Gereksiz yere rol alanlar **BANLANACAKTIR.** \n\n Rol sildirmek için __Moderatör__ ile görüşün.")




  .setColor('#d6680e')
  
  message.channel.send({embeds: [embed]})

};

exports.name = "rol-al-mesaj";