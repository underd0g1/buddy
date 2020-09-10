
const discord = require('discord.js');
const client = new discord.Client();
const fetch = require('node-fetch');
var config = require('../config/config.js');
var apiroute = require('../lib/3party.js')


const internalResponse = async(client) => {
await client.on('message', (receivedMessage) => {
  const process = require("../lib/processing.js");
  console.log("received message was : " + receivedMessage.content)
if (receivedMessage.author == client.user){
  return
}
//receivedMessage.channel.send("message received, " + receivedMessage.author.toString() + ": " + receivedMessage.content)
if (receivedMessage.content == 'hi buddy'){
  receivedMessage.react("🤚")
  receivedMessage.channel.send('whats good ' + receivedMessage.author)
}else if(receivedMessage.content.includes('buddy')){
  receivedMessage.channel.send('hi');
}else if(receivedMessage.content.includes('buddy' && 'fuck')){
  receivedMessage.channel.send('aahhhh my virgin ears!')
}else if (receivedMessage.content.includes('hi')){
  receivedMessage.channel.send('hi' + " " + receivedMessage.author)
}

if(receivedMessage.content.startsWith("!")){
  console.log('hit the starts with ! if statement');
  process.processingCommand(receivedMessage);
}

})

}

module.exports = {
  internalResponse
}
