
const apiroute = require('./3party.js')
const tool = require("./tools.js");

  const processingCommand = async(message) => {

      let fullCommand = message.content.substr(1)
      let splitCommand = fullCommand.split(" ")
      let primaryCommand = splitCommand[0]
      let arguements = splitCommand.slice(1)

      switch (primaryCommand) {

         case 'help':
                          tool.help(arguements, message)
                          break;
          case 'multiply':
                          tool.multiply(arguements, message)
                          break;
          case "iss":
                          message.channel.send(await apiroute.iss());
                          break;
          case "joke":
                          message.channel.send(await apiroute.joke());
                          break;
          case "code":
                          message.channel.send(await apiroute.code());
                          break;
          case "beer":
                          message.channel.send(await apiroute.beer());
                          break;
          case "foas":
                          message.channel.send(await apiroute.foas1());
                          break;
          case "stocks":
                          message.channel.send(await apiroute.stocks(arguements, message));
                          break;
          case "yt":
                          message.channel.send(await apiroute.ytresults(arguements, message));
                          break;
          default:
                          tool.help(arguements, message);
                          break;
      }

}


module.exports = {processingCommand}
