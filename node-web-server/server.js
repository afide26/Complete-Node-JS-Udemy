const express = require('express');

var app = express();
var port = process.env.PORT || 3000;
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


app.get("/bad", (req,res)=>{
  res.send({
    errorMessage:"Unable to handle request"
  });
});


app.listen(port, ()=>{
  console.log("App starting at "+ port)
})