const express = require('express');
const hbs = require('hbs');



var app = express();
var port = process.env.PORT || 3000;

// Set-up the middleware
app.use(express.static(__dirname+'/public'));

// Set-up and register partials in hbs
hbs.registerPartials(__dirname + '/views/partials');

// Set-up and register a helper in hbs
hbs.registerHelper('getCurrentYear', ()=>{
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=>{
  return text.toUpperCase();
})
// Set-up the templating engine
app.set("view engine", "hbs");


app.get("/", (req, res)=>{
  res.render("home.hbs", {
    pageTitle: "Home Page",
    welcomeMessage: "Welcome to my website"
  })
});

app.get("/about", (req, res)=>{
  res.render('about.hbs', {
    pageTitle: "Some website"
  });
});




app.listen(port, ()=>{
  console.log("Server is up at port: "+ port)
})