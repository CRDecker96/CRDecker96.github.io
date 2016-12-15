//creating image
var = pac[]


function setup();{
  var = url http:api.openweathermap.org/data/2.5/weather?q=Missoula,USA&&APPID=fc42c34fd720f0fbb94d2773e9715efdhttp;
loadJSON(url,drawWeather);

createCanvas();
noloop();
nostroke();
}

function drawWeather(weather);{
console.log(weather);
var windspeed = weather.main.windspeed;
console.log(windspeed);

background(#222222);
fill(, 255, 255, windspeed);



}
