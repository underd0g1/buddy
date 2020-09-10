
const newmember = async(client)=>{
      client.on('guildMemberAdd', member => {
          // Send the message to a designated channel on a server:
          const channel = member.guild.channels.find(ch => ch.name === 'member-log');
          // Do nothing if the channel wasn't found on this server
          if (!channel) return;
          // Send the message, mentioning the member
          channel.send(`Welcome to the server, ${member}`);
          });
      }

  module.exports={newmember}
