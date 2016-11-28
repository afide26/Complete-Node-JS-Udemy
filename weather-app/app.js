// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');

// const argv = yargs
//              .options({
//               a:{
//                 demand: true,
//                 alias: 'address',
//                 describe: 'Address to fetch weather for',
//                 string: true
//               }
//              })
//              .help()
//              .alias('help', 'h')
//              .argv;


// geocode.geocodeAddress(argv.address, (errorMessage,results)=>{

//   if(errorMessage){
//     console.log(errorMessage);
//   }else{
//     console.log(JSON.stringify(results, undefined, 2));
//   }

// });

// https://api.darksky.net/forecast/d79243fcc7770a73c43306d466b29990/long,lat
const request = require('request');
request({
  url:"https://api.darksky.net/forecast/d79243fcc7770a73c43306d466b29990/-33.8533939,150.9132068",
  json: true
},(error, response, body)=>{
  if(!error && response.statusCode === 200){
    console.log(parseFloat((body.currently.temperature-32)*5/9).toFixed(1));
  }else{
    console.log("Unable to fetch weather");
  }
});






