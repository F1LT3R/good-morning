var jsdom = require('jsdom')
  , request = require('request')
  , connect = require('connect')
  , Promise = require('bluebird')
  , fs = require('fs')
  ;


var home = {
 lat: 42.346784,
 lng: -71.151408
};

var weatherUrl = {
  //http://api.openweathermap.org/data/2.5/forecast?lat=42.346784&lon=-71.151408
  //http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139
  base: 'http://api.openweathermap.org/data/2.5/forecast'
}

weatherUrl.sum = weatherUrl.base + '?lat=' + home.lat + '&lon=' +home.lng +'&units=metric&cnt=7';

console.log(weatherUrl.sum);

request({
    url: weatherUrl.sum,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response

        fs = require('fs');
        fs.writeFile('data/weather.json', JSON.stringify(body), 'utf8', function (err) {
          if (err) return console.log(err);
          console.log('Saved weather data.');
        });


    }
})






// jsdom.env(
//   "http://nodejs.org/dist/",
//   ["http://code.jquery.com/jquery.js"],
//   function (errors, window) {
//     console.log("there have been", window.$("a").length, "nodejs releases!");
//   }
// );