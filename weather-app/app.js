const request = require('request');

// Use the loaded request function
// The first argument is an options object{ }
// The second argument is a callback function

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=10%20lombard%20street%20philadelphia',
  json: true

},(error, response, body)=>{
  // As the request file(JSON) was converted to an object
  // The response needs to be converted to JSON, this time with
  // 3 arguments, the object, undefined and the 3rd argument which is the number of lines each object should have
  console.log(JSON.stringify(body, undefined, 2));
});