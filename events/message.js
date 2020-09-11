
const discord = require('discord.js');
const client = new discord.Client();
const fetch = require('node-fetch');
var config = require('../config/config.js');
var apiroute = require('../lib/3party.js')


const internalResponse = async(client) => {

      await client.on('message', (message) => {
            const process = require("../lib/processing.js");

            if (message.author == client.user){
              return
            }
            //message.channel.send("message received, " + message.author.toString() + ": " + message.content)
            if (message.content == 'hi buddy'){
                message.react("🤚")
                message.channel.send('whats good ' + message.author)
            }else if(message.content.includes('buddy')){
                message.channel.send('hi');
            }else if(message.content.includes('buddy' && 'fuck')){
                message.channel.send('aahhhh my virgin ears!')
            }else if (message.content.includes('hi')){
                message.channel.send('hi' + " " + message.author)
            }

            if(message.content.startsWith("!")){
                console.log('hit the starts with ! if statement');
                process.processingCommand(message);
              }

            })

}

module.exports = {
  internalResponse
}
