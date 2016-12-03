const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
 .options({
  a:{
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
 })
 .help()
 .alias('help', 'h')
 .argv;

 var encodedAddress = encodeURIComponent(argv.address);

 var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address="${encodedAddress}`;

var toCelsius = (temp)=>{
  return parseFloat((temp-32)*5/9).toFixed(1);
};

axios.get(geocodeUrl).then((response)=>{

  if(response.data.status === 'ZERO_RESULTS'){
    throw new Error("Unable to find that address");
  }

  var lat = response.data.results[0].geometry.location.lat ;
  var lng = response.data.results[0].geometry.location.lng ;
  var weatherUrl = "https://api.darksky.net/forecast/d79243fcc7770a73c43306d466b29990/"+lat+","+lng;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response)=>{
  var temperature = (response.data.currently.temperature);
  var apparentTemperature = (response.data.currently.apparentTemperature);

  console.log(`It is currently ${toCelsius(temperature)} degrees. It feels like ${ toCelsius(apparentTemperature) } degrees Celsius `);
}).catch((e)=>{
  if(e.code === "ENOTFOUND"){
    console.log("Unable to connect to API servers");
  }else{
    console.log(e.message);
  }
});





























