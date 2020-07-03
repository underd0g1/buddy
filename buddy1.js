// test bot
//todo: git init here
//store api keys and login vars in .env vars
//add new youtube api feature

const discord = require('discord.js');
const client = new discord.Client();
const fetch = require('node-fetch');
var config = require('./config.js');

client.on('ready', () => {
  console.log('connected as ' + client.user.tag)

  client.user.setActivity('Node.js vids', { type: 'Watching' });

  client.guilds.cache.forEach((guild)=>{
    console.log(guild.name)
    guild.channels.cache.forEach((channel)=>{
      console.log(` ~ ${channel.name} ${channel.type} ${channel.id}`)
    })
  })
    let genchannel = client.channels.cache.get(config.genchan)


    //const attachment = new discord.Attachment("")
     genchannel.send(`▒█▀▀█ █░░█ █▀▀▄
▒█▀▀▄ █░░█ █░░█
▒█▄▄█ ░▀▀▀ ▀▀▀░ v1.0

   `)

})

client.on('message', (receivedMessage) => {
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
    processCommand(receivedMessage)
  }
  //receivedMessage.react("🤚")
})
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

function processCommand(receivedMessage){
   let fullCommand = receivedMessage.content.substr(1)
   let splitCommand = fullCommand.split(" ")
   let primaryCommand = splitCommand[0]
   let arguements = splitCommand.slice(1)

   if (primaryCommand == "help"){
     helpCommand(arguements, receivedMessage)
   }else if (primaryCommand == "multiply"){
     multiplyCommand(arguements, receivedMessage)
   }else if(primaryCommand == "iss"){
    iss(arguements, receivedMessage)
  }else if(primaryCommand == "joke"){
    joke(arguements, receivedMessage)
  }else if(primaryCommand == "code"){
     code(arguements, receivedMessage)
 }else if(primaryCommand == "beer"){
    beer(arguements, receivedMessage)
  }else if(primaryCommand == "foas"){
    foas1(arguements, receivedMessage)
  }else{
     helpCommand(arguements,receivedMessage)
   }
 }


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

const url = 'https://api.wheretheiss.at/v1/satellites/25544'


async function iss(arguements, receivedMessage){
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  const {latitude, longitude} = data
  receivedMessage.channel.send('The current lat is: ' + latitude + ' and the current long is: ' + longitude)

}
const api = 'http://api.icndb.com/jokes/random'
async function joke(arguements, receivedMessage){
  const response = await fetch(api)
  const data = await response.json()
  console.log(data)
  var joke = data.value.joke
  console.log(joke)
  receivedMessage.channel.send(joke)

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

function code(arguements, receivedMessage){
  const repo = 'https://github.com/underd0g1/buddy'
  const lang = 'node.js'
  receivedMessage.channel.send(`▒█▀▀█ █░░█ █▀▀▄
▒█▀▀▄ █░░█ █░░█
▒█▄▄█ ░▀▀▀ ▀▀▀░ v1.0

`)
    receivedMessage.channel.send('Repo: ' + repo)
    receivedMessage.channel.send('lang: ' + lang)
    receivedMessage.channel.send('author: ' + 'underd0g')

}
//add beer to the received receivedMessage
async function beer(arguements, receivedMessage){
  const url = 'https://sandbox-api.brewerydb.com/v2/beer/random/?'
  const key = 'key=' +config.beerkey;
  var api = url + key
  const response = await fetch(api)
  const info = await response.json()
  console.log(info)
  var brand = info.data.name
  var name = info.data.style.category.name
  var abv = info.data.abv
  var desc = info.data.style.description
  receivedMessage.channel.send('Here is a beer that I found:')
  receivedMessage.channel.send(brand)
  receivedMessage.channel.send(name)
  receivedMessage.channel.send(abv)
  receivedMessage.channel.send(desc)
}

// //add the foas api
// https://www.foaas.com/operations
// async function foas(arguements, receivedMessage){
//   const response = await fetch(url)
//   const info = await response.json()
//
// }
//console.log('hello console!');
      const url1 = 'https://www.foaas.com/operations'
      const search = 'https://www.foaas.com'
      var name = 'buddy';
      var arr = [];
      async function foas(arguements,receivedMessage){
        const responce = await fetch(url1);
        const data = await responce.json();
        //console.log(data[0].fields.length);
        var arr = [];
        for (i=0; i < data.length; i++){
          if (data[i].fields.length == 1){
            arr.push(data[i].url);

            //console.log(data[i].fields.length, data[i].url);
          }
        }
        //console.log(arr.length);
        var rand = Math.floor(Math.random()*46);
        //console.log(rand);
        //console.log(arr[rand]);
        var link = arr[rand];
        var glink = link.lastIndexOf('/');
        flink = link.slice(0,glink);
        //console.log(flink);

        var link2 = search + flink +"/"+ name;
        console.log(link2.toString());
        return link2.toString();

      }




  //    console.log('right before the foas1 function');


      async function foas1(arguements, receivedMessage){
        var searchurl = await foas();
        const response = await fetch(searchurl , {
          method: 'GET',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        });
        const data1 = await response.json();

        //console.log(data[0].fields.length);
        //console.log(data1.message.toString());
        // console.log(data1.subtitle.toString());
        //return(data1.message.toString() + ' ' + data1.subtitle.toString());
        receivedMessage.channel.send(data1.message  + " " +  data1.subtitle);
        //document.write(data1.message + data1.subtitle);
      }

client.login(config.login)
