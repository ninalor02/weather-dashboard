
var apiKey = "2aa5de91e2d58f7baa00946e1b387784"
var savedSearches = [];

function getInfo(){
  const newName = document.getElementById("cityInput");
  const cityName = document.getElementById("cityName");
  cityName.innerHTML = "--" + newName.value + "--"
}
// won't pull to live server- valid in insomnia //
fetch("http://api.openweathermap.org/data/2.5/forecast?q=london&appid=2aa5de91e2d58f7baa00946e1b387784")
.then(response => response.json())
.then(data =>{
  //temp //
  for(i=0; i<5; i++) {
    document.getElementById("day" + (i+1)+"Temp").innerHTML = "Temp:" + Number(data.list[i].main.temp -290.62).toFixed(1)+"°";
  }
//wind speed //
  for(i=0; i<5; i++) {
    document.getElementById("day" + (i+1)+"Wind").innerHTML = "Wind:" + Number(data.list[i].wind.speed -0.82).toFixed(1)+"%";
  }
// humidity //
  for(i=0; i<5; i++) {
    document.getElementById("day" + (i+1)+"Humidity").innerHTML = "Humidity" + Number(data.list[i].main.humidity -86).toFixed(1)+"°";
  }

// image //
for(i=0; i<5; i++) {
  document.getElementById("img" + (i+1)).src = "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
}

for(i=0; i<5; i++) {
  document.getElementById('day' + (i+1)).innerHTML = weekday[checkDay(i)];
}

})

.catch(err =>('somthing went wrong'))

function defaultScreen() {
  document.getElementById("cityInput").defaultvalue = "minneapolis";
  getInfo();
}
const d = new Date();
const weekday = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',];

function checkDay(day) {
if (day + d.getDay() > 6) {
  return day + d.getDay()-7;
}
else{
  return day + d.getDay();
}


};

var text = document.getElementById("cityInput");
var cityName = document.getElementById("cityName");

var cityName = localStorage.getItem('newName');
// console.log('text', text) working

text.addEventListener("click", function() {
  if (cityName > 0) {
    text.textContent = cityInput;
    localStorage.setItem("cityInput", cityName);
  }
});