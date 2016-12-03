const request = require('request');
var toCelsius = (temp)=>{
  return parseFloat((temp-32)*5/9).toFixed(1);
};
var getWeather = (lat,lng, callback)=>{
  request({
    url:"https://api.darksky.net/forecast/d79243fcc7770a73c43306d466b29990/"+lat+","+lng,
    json: true
  },(error, response, body)=>{
    if(error){
      callback('Unable to fetch weather from forecast.io servers');
    }else if(response.statusCode ===400){
      callback("Unable to fetch weather, check your input data");
    }else if(response.statusCode === 200){
      callback(undefined, {
        temperature: toCelsius(body.currently.temperature),
        apparentTemperature: toCelsius(body.currently.apparentTemperature)
      });
    }
  });
};



module.exports.getWeather = getWeather;