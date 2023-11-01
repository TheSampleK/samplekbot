const prefix = process.env.PREFIX;
const db = require('quick.db');
const { MessageEmbed, Permissions } = require('discord.js');
exports.run = async (client, message, args) => {

    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) return message.channel.send({content: `<:dnotdisturb:1051899421253701653> Bu Komutu kullanabilmek için \`SUNUCUYU_YÖNET\` yetkisine sahip olmalısın`})
    if(args[0] == 'ayarla'){
        const rol = message.mentions.roles.first();
        if(!rol) return message.channel.send({content: `<:dnotdisturb:1051899421253701653> Hatalı kullanım. Kulanım bu şekilde olmalıdır: **?yetkili-rol ayarla [@rol]**`})
        db.set(`yetkirol`, rol.id);
        const embed = new MessageEmbed()
        .setTitle(`BAŞARILI!`)
        .setDescription(`<:online:1051899418946838528> Kayıt Sorumlusu Rolü Başarıyla ${rol} isimli role ayarlandı`)
        .setColor("GREEN")
        message.channel.send({embeds: [embed]});
        return;
    }
    if(args[0] == 'sıfırla'){
        db.delete(`yetkirol`);
        const embed = new MessageEmbed()
        .setTitle(`BAŞARILI!`)
        .setDescription(`<:online:1051899418946838528> Kayıt Sorumlusu Rolü Başarıyla sıfırlandı`)
        .setColor("GREEN")
        message.channel.send({embeds: [embed]});
        return;
    }
    message.channel.send({content: `<:dnotdisturb:1051899421253701653> Hatalı kullanım. Kulanım bu şekilde olmalıdır: **?yetkili-rol sıfırla**`})
};

exports.name = "yetkili-rol";