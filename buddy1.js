

//add new youtube api feature

// button up 3party.js
//add git stats to code function
// create an object of words for built in foas.

//the Dev modules
const discord = require('discord.js');
const client = new discord.Client();
const fetch = require('node-fetch');

// the  self made modules
const config = require('./config/config.js');

const apiroute = require('./lib/3party.js');
const processing = require('./lib/processing.js');

const init = require('./events/ready.js');
const message = require('./events/message.js');
const member = require('./events/member.js');

//below are the events

//event to turn the client on  when node application is run
init.startup(client);

//event that a message is sent into the chat
message.internalResponse(client, processing);

//event that a new member joins
member.newmember(client)

//event to log the bot into its account
client.login(config.discordkey.login)
