const request = require('request');

// Use the loaded request function
// The first argument is an options object{ }
// The second argument is a callback function

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=10%20lombard%20street%20philadelphia',
  json: true

},(error, response, body)=>{
  console.log(body);
});