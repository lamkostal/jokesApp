function joke(){
    console.log("called")
    fetch(`${process.env.APP_ENDPOINT}`, {
      "method": "GET",
     
    
  })
  .then(response => response.json())
  .then(data => {
      console.log(data)
      let joke1 = data.setup
      let joke2 = data.delivery ? data.delivery : data.joke
      document.getElementById('joke1').textContent= joke1 
      document.getElementById('joke2').textContent=joke2
    })
  .catch(err => {
      console.log(err);
      
      
  });
    
              }