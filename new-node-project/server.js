const express = require("express");
const app = express();
const hbs = require("hbs");

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.set("view engine", "hbs");

// Set the partial pages
hbs.registerPartials(__dirname + "/views/partials");

// Set Application helpers
hbs.registerHelper('getCurrentYear', ()=>{
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", (text)=>{
  return text.toUpperCase();
});





// Set Routes
app.get("/", (req,res)=>{
  res.render('home.hbs', {
    pageTitle: "Welcome to the Home Page",
    welcomeMessage:"A message from the home page"
  });
});

app.get("/about", (req,res)=>{
  res.render("about.hbs", {
    pageTitle:"Welcome to the About Page",
    welcomeMessage:"Hello from the about page."
  });
});


app.get("/projects", (req,res)=>{
  res.render("projects.hbs", {
    pageTitle:"Welcome to the Projects Page",
    welcomeMessage:"Hello from the projects page.",
    projectsList:["Proj1", "Proj2", "Proj3"]
  });
});




app.listen(port, ()=>{
  console.log(`Listening at port ${port}`);
});