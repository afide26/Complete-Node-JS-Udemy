const express = require('express');

var app = express();
var port = process.env.PORT || 3000;

// Set-up the middleware
app.use(express.static(__dirname+'/public'));


app.get("/", (req, res)=>{
  // res.send("<h1>Hello Express!</h1>");
  res.send({
    name: 'Alan',
    likes: ["Martial Arts", "Self-Help", "Programming"]
  });
});

app.get("/about", (req, res)=>{
  res.send('About Page');
});




app.listen(port, ()=>{
  console.log("Server is up at port: "+ port)
})