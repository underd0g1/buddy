
const apiroute = require('./3party.js')


  const processingCommand = async(receivedMessage) => {
    
      let fullCommand = receivedMessage.content.substr(1)
      let splitCommand = fullCommand.split(" ")
      let primaryCommand = splitCommand[0]
      let arguements = splitCommand.slice(1)

   if (primaryCommand == "help"){
     helpCommand(arguements, receivedMessage)
   }else if (primaryCommand == "multiply"){
     multiplyCommand(arguements, receivedMessage)
   }else if(primaryCommand == "iss"){
      receivedMessage.channel.send(await apiroute.iss());
  }else if(primaryCommand == "joke"){
      receivedMessage.channel.send(await apiroute.joke());
  }else if(primaryCommand == "code"){
     receivedMessage.channel.send(await apiroute.code());
 }else if(primaryCommand == "beer"){
    receivedMessage.channel.send(await apiroute.beer());
  }else if(primaryCommand == "foas"){
    receivedMessage.channel.send(await apiroute.foas1());
  }else{
     helpCommand(arguements,receivedMessage)
   }
 }


module.exports = {processingCommand}
