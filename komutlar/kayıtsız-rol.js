const { MessageEmbed, Permissions } = require("discord.js");
const db = require('quick.db');
exports.run = async(client, message, args) => {
    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) return message.channel.send({content: `Bu Komutu kullanabilmek için \`SUNUCUYU_YÖNET\` yetkisine sahip olmalısın`})
const prefix = process.env.PREFIX;
    const zatenvar = db.get(`kayıtsızrol`);
    if(args[0] == 'ayarla'){
        const rol = message.mentions.roles.first();
        if(zatenvar) return message.channel.send({content:'<:dnotdisturb:1051899421253701653> Kayıtsız Rol Zaten Ayarlanmış'});
        if(!rol) return message.channel.send({content: `<:dnotdisturb:1051899421253701653> Hatalı kullanım. > Lütfen bir rol belirtiniz`})
        db.set(`kayıtsızrol`, rol.id);
        const embed = new MessageEmbed().setTitle('BAŞARILI').setDescription(`<:online:1051899418946838528> Kayıtsız rolü ${rol} olarak ayarlandı.`).setColor('GREEN');
        message.channel.send({embeds:[embed]});
        return;
    }
    if(args[0] == 'sıfırla'){
        if(!zatenvar) return message.channel.send({content:'<:dnotdisturb:1051899421253701653> Kayıtsız Rol Zaten Ayarlanmamış'});
        db.delete(`kayıtsızrol`);
        const embed = new MessageEmbed().setTitle('BAŞARILI').setDescription(`<:online:1051899418946838528> Kayıtsız rolü Sıfırlandı`).setColor('GREEN');
        message.channel.send({embeds:[embed]});
        return;
    }
    message.channel.send({content: `<:dnotdisturb:1051899421253701653> Hatalı kullanım. > \`${prefix}kayıtsız-rol ayarla/sıfırla\``})

};
exports.name = "kayıtsız-rol";