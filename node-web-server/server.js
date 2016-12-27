const express = require('express');
const hbs = require('hbs');



var app = express();
var port = process.env.PORT || 3000;

// Set-up the middleware
app.use(express.static(__dirname+'/public'));
// Set-up the templating engine
app.set("view engine", "hbs");


app.get("/", (req, res)=>{
  res.render("home.hbs", {
    pageTitle: "Home Page",
    currentYear: new Date().getFullYear(),
    welcomeMessage: "Welcome to the home page"
  })
});

app.get("/about", (req, res)=>{
  res.render('about.hbs', {
    pageTitle: "Some website",
    // Syntax to get a dynamic current year
    currentYear: new Date().getFullYear()
  });
});




app.listen(port, ()=>{
  console.log("Server is up at port: "+ port)
})