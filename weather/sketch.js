//creating image
var = bubles [];

function setup() {
var url = 'http:api.openweathermap.org/data/2.5/weather?q=Missoula,USA&&APPID=fc42c34fd720f0fbb94d2773e9715efd'

  loadJSON(url, drawWeather);

createCanvas(600,600);
noloop();
nostroke();
}

function draw() {

}

function drawWeather(weather) {
console.log(weather);
var windspeed = weather.main.windspeed;
console.log(windspeed);

background(#222222);
fill(, 255, 255, windspeed);
for (var i = 0; i < 30; i++) {
  ellipse(30,30,30,30)
}

}
