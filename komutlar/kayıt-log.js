const prefix = process.env.PREFIX;
const db = require('quick.db');
const { MessageEmbed, Permissions } = require('discord.js');
exports.run = async (client, message, args) => {

    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) return message.channel.send({content: `Bu Komutu kullanabilmek için \`SUNUCUYU_YÖNET\` yetkisine sahip olmalısın`})

    const zatenvar = db.get(`logkanal`);
    if(args[0] == 'ayarla'){
        if(zatenvar) return message.channel.send({content: `<:dnotdisturb:1051899421253701653> Log Kanalı Zaten ayarlanmış`});
        let kanal = message.mentions.channels.first();
        if(!kanal) return message.channel.send({content: `<:dnotdisturb:1051899421253701653> Lütfen bir kanal belirleyiniz`});
        db.set(`logkanal`, kanal.id)
        const embed = new  MessageEmbed().setTitle('BAŞARILI').setDescription(`<:online:1051899418946838528> Kayıt Log Kanalı ${kanal} olarak ayarlandı`).setColor('GREEN');
        message.channel.send({embeds:[embed]})
        return;
    }
    if(args[0] == 'sıfırla'){
        if(!zatenvar) return message.channel.send({content: `<:5505idlestatus:1047141246117888091> Log Kanalı Zaten ayarlanmamış`});
        db.delete(`logkanal`)
        const embed = new  MessageEmbed().setTitle('BAŞARILI').setDescription(`<:online:1051899418946838528> Kayıt Log Kanalı Sıfırlandı`).setColor('GREEN');
        message.channel.send({embeds:[embed]})
        return;
    }
    message.channel.send({content: `<:dnotdisturb:1051899421253701653> Hatalı Kullanım > ${prefix}kayıt-log ayarla/sıfırla`});
};
exports.name = "kayıt-log";