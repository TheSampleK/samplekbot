const prefix = process.env.PREFIX;
const { MessageEmbed,Permissions } = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {

    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) return message.channel.send({content: `Bu Komutu kullanabilmek için \`SUNUCUYU_YÖNET\` yetkisine sahip olmalısın`})

    const zatenvar = db.get(`kayıtkanal`);
    let kanal = message.mentions.channels.first();
    if(args[0] == 'ayarla'){
        if(zatenvar) return  message.channel.send({content:'<:dnotdisturb:1051899421253701653> Kayıt kanalı zaten ayarlanmış.'});
        if(!kanal) return message.channel.send({content:'<:dnotdisturb:1051899421253701653> Lütfen Bir Kanal Belirtiniz.'});
        db.set(`kayıtkanal`, kanal.id);
        const embed = new MessageEmbed().setTitle('<:online:1051899418946838528> BAŞARILI').setDescription(`Kayıt Kanalı ${kanal} olarak ayarlandı`).setColor('GREEN');
        message.channel.send({embeds:[embed]});
        return;
    }
    if(args[0] == 'sıfırla'){
        if(!zatenvar) return  message.channel.send({content:'<:dnotdisturb:1051899421253701653> Kayıt kanalı zaten ayarlanmamış'});
        db.delete(`kayıtkanal`);
        const embed = new MessageEmbed().setTitle('BAŞARILI').setDescription(`<:online:1051899418946838528> Kayıt Kanalı sıfırlandı`).setColor('GREEN');
        message.channel.send({embeds:[embed]});
        return;
    }
    message.channel.send({content: `<:dnotdisturb:1051899421253701653> Hatalı kullanım. > \`${prefix}kayıt-kanal ayarla/sıfırla\``})
};
exports.name = "kayıt-kanal";