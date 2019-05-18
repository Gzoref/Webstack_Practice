const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'f4dfea083a32bfa2456f6b42c55b5a8e';
let city = argv.c || 'hartford';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if (err) {
    console.log('error:', error);
  } else {
    console.log('body:', body);
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}`;
    console.log(message);

  }
});
