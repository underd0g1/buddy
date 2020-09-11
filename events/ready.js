const config = require("../config/config.js");


const startup = (client) => {

      client.on('ready', ()=>{
            console.log(client.user)
            console.log('connected as ' + client.user.tag)
            client.user.setActivity('Node.js vids', { type: 'Watching' });
            client.guilds.cache.forEach((guild)=>{
                  console.log(guild.name)
                  guild.channels.cache.forEach((channel)=>{
                  console.log(` ~ ${channel.name} ${channel.type} ${channel.id}`)
                        })
                    })
              let genchannel = client.channels.cache.get(config.discordkey.genchan)
              //const attachment = new discord.Attachment("")
              genchannel.send(`  ▒█▀▀█ █░░█ █▀▀▄
                                ▒█▀▀▄ █░░█  █░░█
                                ▒█▄▄█ ░▀▀▀ ▀▀▀░ v1.0`)

                    })

}

module.exports = {startup}
