
const apiroute = require('./3party.js')
const tool = require("./tools.js");

  const processingCommand = async(message) => {

      let fullCommand = message.content.substr(1)
      let splitCommand = fullCommand.split(" ")
      let primaryCommand = splitCommand[0]
      let arguements = splitCommand.slice(1)

   if (primaryCommand == "help"){
     tool.help(arguements, message)
   }else if (primaryCommand == "multiply"){
     tool.multiply(arguements, message)
   }else if(primaryCommand == "iss"){
      message.channel.send(await apiroute.iss());
   }else if(primaryCommand == "joke"){
      message.channel.send(await apiroute.joke());
   }else if(primaryCommand == "code"){
     message.channel.send(await apiroute.code());
  }else if(primaryCommand == "beer"){
    message.channel.send(await apiroute.beer());
  }else if(primaryCommand == "foas"){
    message.channel.send(await apiroute.foas1());
  }else{
     tool.help(arguements,message)
   }
 }


module.exports = {processingCommand}
