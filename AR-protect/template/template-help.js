const settings = await Guild.findOne({
            guildID : message.guild.id
        }, (err, guild) => {
            if(err) console.error(err)
            if(!guild){
                const newGuild = new Guild({
                    _id: mongoose.Types.ObjectId(),
                    guildID: message.guild.id,
                    guildName: message.guild.name,
                    prefix: process.env.PREFIX,
                    muteRole : process.env.MUTE,
                })

                newGuild.save()
                .then(result => Logger.info(`Le role mute a été defini : ${Logger.setColor('green', result)}`))
                .catch(err => Logger.error(`Error : ${Logger.setColor('red', err)}`))
    
                return message.channel.send('This server was not in our database! We have added it, please retype this command.').then(m => m.delete({timeout: 10000}));
            }
        });

if(!args[1]){
    const help = new Discord.MessageEmbed()
            .setTitle('Command : __mute__')
            .setDescription(`**Description : ** Mute a member `)
            .addField("**Usage:**",`${settings.prefix}mute @member reason \n`)
            .addField('**Example:**', `${settings.prefix}mute @TAKEFY Spam`)
            .setFooter(client.user.username)
            .setTimestamp()
            .setColor('#eb4034')
            return message.channel.send(help)
}
