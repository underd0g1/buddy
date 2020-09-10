// test bot
//todo: git init here

//add new youtube api feature
// add the internal.js
// button up 3party.js
//add git stats to code function
// create an object of words for built in foas.

const discord = require('discord.js');
const client = new discord.Client();
const fetch = require('node-fetch');


const config = require('./config/config.js');
const apiroute = require('./lib/3party.js');
const init = require('./events/ready.js');
const message = require('./events/message.js');
const processing = require('./lib/processing.js');

init.startup(client);

message.internalResponse(client, processing);




// client.on('message', (receivedMessage) => {
//   if (receivedMessage.author == client.user){
//     return
//   }
//   //receivedMessage.channel.send("message received, " + receivedMessage.author.toString() + ": " + receivedMessage.content)
//   if (receivedMessage.content == 'hi buddy'){
//     receivedMessage.react("🤚")
//     receivedMessage.channel.send('whats good ' + receivedMessage.author)
//   }else if(receivedMessage.content.includes('buddy')){
//     receivedMessage.channel.send('hi');
//   }else if(receivedMessage.content.includes('buddy' && 'fuck')){
//     receivedMessage.channel.send('aahhhh my virgin ears!')
//   }else if (receivedMessage.content.includes('hi')){
//     receivedMessage.channel.send('hi' + " " + receivedMessage.author)
//   }
//
//   if(receivedMessage.content.startsWith("!")){
//     processCommand(receivedMessage)
//   }
//   //receivedMessage.react("🤚")
// })


client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});



// // add to handlers folder (events.js)
// async function processCommand(receivedMessage){
//
//    let fullCommand = receivedMessage.content.substr(1)
//    let splitCommand = fullCommand.split(" ")
//    let primaryCommand = splitCommand[0]
//    let arguements = splitCommand.slice(1)
//
//    if (primaryCommand == "help"){
//      helpCommand(arguements, receivedMessage)
//    }else if (primaryCommand == "multiply"){
//      multiplyCommand(arguements, receivedMessage)
//    }else if(primaryCommand == "iss"){
//       receivedMessage.channel.send(await apiroute.iss());
//   }else if(primaryCommand == "joke"){
//       receivedMessage.channel.send(await apiroute.joke());
//   }else if(primaryCommand == "code"){
//      receivedMessage.channel.send(await apiroute.code());
//  }else if(primaryCommand == "beer"){
//     receivedMessage.channel.send(await apiroute.beer());
//   }else if(primaryCommand == "foas"){
//     receivedMessage.channel.send(await apiroute.foas1());
//   }else{
//      helpCommand(arguements,receivedMessage)
//    }
//  }


 function multiplyCommand(arguements, receivedMessage){
   if (arguements.length < 2){
     receivedMessage.channel.send('not enough arguements, you need 2')
   }else{
   let product = 1
   arguements.forEach((value)=>{
     product = product * parseFloat(value)
   })
   receivedMessage.channel.send('the product of ' + arguements + 'is '+ product.toString())
    }
 }


function helpCommand(arguements, receivedMessage){
  if (arguements.length == 0 ){
    receivedMessage.channel.send(`
    Here are some commands you can throw at me (![command]):
      - multiply[x y]
      - iss
      - code
      - beer
      - joke
    `)
  }
  else{
    receivedMessage.channel.send('looks like you need help with ' + arguements)
  }
}


function time(arguements, receivedMessage){
  var date = new date()
  var hours = date.getHours()
  if (hours == 3){
    receivedMessage.channel.send('Good morning Everyone!')
  }else if (hours == 12){
    receivedMessage.channel.send("its Noon O'Clock")
  } else if(hours == 17){
    receivedMessage.channel.send('Good Evening everyone!')
  }
}

client.login(config.discordkey.login)
