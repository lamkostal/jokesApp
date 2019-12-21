
const axios = require('axios');

exports.handler = function(event, context ,callback){

  const send = (body) => {
        callback( null, {
            statusCode : 200, 
            headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"},
            body : JSON.stringify(body)
        })
      }

  const getJokes= () => {

      axios.get("https://jokeapi.p.rapidapi.com/category/Programming?format=json", {
      "method": "GET",
      "headers": {
          "x-rapidapi-host": "jokeapi.p.rapidapi.com",
          "x-rapidapi-key": process.env.API_KEY
      }
  }).then(res=> send(res.data)).catch(err => send(err))
  
    }   

    getJokes();
   
}