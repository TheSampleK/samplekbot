const db  = require("quick.db");
const { MessageEmbed } = require("discord.js");
const prefix = process.env.PREFIX;

exports.run = async(client, message, args) => {

    let member = message.mentions.members.first();
    const jailrol = db.get(`jailrol`);
  
    const yetkirol = db.get(`yetkirol`);
    /*
    if(args[0] == 'ver'){
        if(message.member.roles.cache.has(jailrol)) return message.channel.send({content:`Kullanıcıda zaten jail rolü var`});
        member.roles.add(jailrol);
        const embed = new MessageEmbed().setDescription(`${member} isimli kullanıcı jaile gönderildi`)
        message.channel.send({embeds:[embed]})
        return;
    }
    */
    if(!message.member.roles.cache.has(yetkirol)) return message.channel.send({content:`<:emoj_gozluk17:925391294220619806> Bu komutu kullanmak için yeterli yetkiniz yok`});
    if(args[0] == 'al'){
        if(!member.roles.cache.has(jailrol)) return message.channel.send({content:`<:emoj_gozluk27:925391294761676882> Kullanıcıda zaten jail rolü yok`});
        member.roles.remove(jailrol);
        const embed = new MessageEmbed().setDescription(`
<:emoj_gozluk32:925391296166772777> ${member} isimli kullanıcı jailden alındı`)
        message.channel.send({embeds:[embed]})
        return;
    }
    message.channel.send({content:`<:emoj_gozluk27:925391294761676882> Lütfen bir arg belirtin > ${prefix}jail al @kullanıcı`})
};
exports.name = "kaldırıldı--/2";