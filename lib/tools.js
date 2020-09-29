const multiply = async(arguements, message) =>{
  if (arguements.length < 2){
    message.channel.send('not enough arguements, you need 2')
  }else{
  let product = 1
  arguements.forEach((value)=>{
    product = product * parseFloat(value)
  })
  message.channel.send('the product of ' + arguements + 'is '+ product.toString())
   }
}


const help = async(arguements, message) =>{
        if (arguements.length == 0 ){
              message.channel.send(`
                  Here are some commands you can throw at me !<command>:
                          - !multiply[x y]
                          - !iss
                          - !code
                          - !beer
                          - !joke
                  `)
          }
        else{
              message.channel.send('looks like you need help with ' + arguements)
            }
}

// this needs work lol
const time = function(){
        var date = new date()
        var hours = date.getHours()
        if (hours == 3){
              message.channel.send('Good morning Everyone!')
        }else if (hours == 12){
              message.channel.send("its Noon O'Clock")
        } else if(hours == 17){
              message.channel.send('Good Evening everyone!')
        }
}

const timer = async(arguements, message) =>{
  const length = arguements[0];
  setTimeout(length);
  

}

module.exports = {time, multiply, help}
