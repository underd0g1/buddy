const fetch = require('node-fetch');
const config = require("../config/config.js")
const ytcall  = require('youtube-api-v3-search');

const urls = {
    iss: 'https://api.wheretheiss.at/v1/satellites/25544',
    joke:  'http://api.icndb.com/jokes/random',
    beer:  'https://sandbox-api.brewerydb.com/v2/beer/random/?',
    foas1: 'https://www.foaas.com/operations',
    foas2:'https://www.foaas.com',
    code: 'https://api.github.com/repos/underd0g1/buddy',
    stocks: 'https://query1.finance.yahoo.com/v7/finance/quote?symbols='
}


const iss = async(receivedMessage) =>{
  const response = await fetch(urls.iss)
  const data = await response.json()
  console.log(data)
  const {latitude, longitude} = data
  return "lat: " + latitude + " long: "+  longitude;
}



const joke = async (receivedMessage)=> {
  const response = await fetch(urls.joke);
  const data = await response.json()
  console.log(data)
  var joke = data.value.joke
  console.log(joke)
  return joke;
}

const  beer = async(receivedMessage)=> {
  const key = 'key=' +config.token.beerkey;
  var api = urls.beer + key
  const response = await fetch(api)
  const info = await response.json()
  console.log(info)
  var brand = info.data.name
  var name = info.data.style.category.name
  var abv = info.data.abv
  var desc = info.data.style.description
  return brand +"\n" + name + "\n" + abv + "\n" + desc
}



async function foas(arguements, receivedMessage){
  const response = await fetch(urls.foas1);
  const data = await response.json();
  var arr = [];
  for (i=0; i < data.length; i++){
    if (data[i].fields.length == 1){
      arr.push(data[i].url);
    }
  }
  var rand = Math.floor(Math.random()*46);
  var link = arr[rand];
  var glink = link.lastIndexOf('/');
  flink = link.slice(0,glink);
  var name = 'buddy';
  var link2 = urls.foas2 + flink +"/"+ name;
  console.log(link2.toString());
  return link2.toString();
}

const foas1 =async(receivedMessage)=>{
  var searchurl = await foas();
  const response = await fetch(searchurl , {
    method: 'GET',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  });
  const data1 = await response.json();
  return data1.message  + " " +  data1.subtitle;
}


const code = async(recievedMessage) => {
    var req = await fetch(urls.code);
    var data = await req.json();
  return `▒█▀▀█ █░░█ █▀▀▄
▒█▀▀▄ █░░█ █░░█
▒█▄▄█ ░▀▀▀ ▀▀▀░ v1.0

`
   + '\n' + "Author: " +data.owner.login +"\n" +
                    "Description: " +  data.description + '\n' +
                    "Repo: " + data.clone_url + '\n' +
                    "Open Issues: " + data.open_issues + " Forks: " + data.forks + "\n" +
                    "Subscribers: " + data.subscribers_count + "\n" +
                    "Language: " + data.language;
}


const stocks = async(arguements, message)=>{
//if they type one symbol.
// if they type more than one
// if they type invalid ones
console.log("just args:    " +arguements)
console.log("index 0   " + arguements[0]);
          var req = await fetch(urls.stocks+arguements[0]);
          var data = await req.json();
          console.log(data.quoteResponse.result);
          return data.quoteResponse.result[0].displayName + ":   $ " + data.quoteResponse.result[0].regularMarketPrice

}

const ytresults =async (arguements, message) => {
  options ={
    q: arguements[0],
    part: "snippet",
    type: "video"
  }
  let result = await ytcall(config.token.youtubekey,options);
  var link = ("url: " + "https://youtube.com/watch?v=" + result.items[0].id.videoId);
  console.log(link);
  return link;
}

module.exports = {
  iss,
  joke,
  beer,
  foas1,
  code,
  stocks,
  ytresults
}
