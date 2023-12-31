const prefix = process.env.PREFIX;
const db = require('quick.db');
const { MessageEmbed, Permissions } = require('discord.js');
exports.run = async (client, message, args) => {

    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) return message.channel.send({content: `<:dnotdisturb:1051899421253701653> Bu Komutu kullanabilmek için \`SUNUCUYU_YÖNET\` yetkisine sahip olmalısın`})
    if(args[0] == 'ayarla'){
        const rol = message.mentions.roles.first();
        if(!rol) return message.channel.send({content: `<:dnotdisturb:1051899421253701653> Hatalı kullanım. > Lütfen bir rol belirtiniz`})
        db.set(`kayıtrol`, rol.id);
        const embed = new MessageEmbed()
        .setTitle(`BAŞARILI!`)
        .setDescription(`<:online:1051899418946838528> Kayıt Rolü Başarıyla ${rol} isimli role ayarlandı`)
        .setColor("GREEN")
        message.channel.send({embeds: [embed]});
        return;
    }
    if(args[0] == 'sıfırla'){
        db.delete(`kayıtrol`);
        const embed = new MessageEmbed()
        .setTitle(`BAŞARILI!`)
        .setDescription(`<:online:1051899418946838528> Kayıt Rolü Başarıyla sıfırlandı`)
        .setColor("GREEN")
        message.channel.send({embeds: [embed]});
        return;
    }
    message.channel.send({content: `<:dnotdisturb:1051899421253701653> Hatalı kullanım. > \`${prefix}kayıt-rol ayarla/sıfırla\``})
};

exports.name = "kayıt-rol";