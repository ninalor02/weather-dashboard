var apiKey = "2aa5de91e2d58f7baa00946e1b387784"
var savedSearches = [];

function getInfo() {
  const newName = document.getElementById("cityInput");
  const cityName = document.getElementById("cityName");
  cityName.innerHTML = "--" + newName.value + "--"


  fetch("http://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=2aa5de91e2d58f7baa00946e1b387784")
    .then(response => response.json())
    .then(data => {

      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Temp").innerHTML = "Temp:" + Number(data.list[i].main.temp_min).toFixed(1) + "°";
      }

      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Wind").innerHTML = "Wind:" + Number(data.list[i].wind.speed).toFixed(1) + "%";
      }

      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Humidity").innerHTML = "Humidity" + Number(data.list[i].main.humidity).toFixed(1) + "°";
      }

      for (i = 0; i < 5; i++) {
        document.getElementById("img" + (i + 1)).src = "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
      }

      for (i = 0; i < 5; i++) {
        document.getElementById('day' + (i + 1)).innerHTML = weekday[checkDay(i)];
      }
    })
    .catch(err => ('somthing went wrong'))
}

function defaultScreen() {
  document.getElementById("cityInput").defaultvalue = "minneapolis";
  getInfo();
}
const d = new Date();
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];

function checkDay(day) {
  if (day + d.getDay() > 6) {
    return day + d.getDay() - 7;
  }
  else {
    return day + d.getDay();
  }

};
cityName.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('cityName', cityName)

  var cityName = document.getElementById("cityName");
  var newName = localStorage.getItem('newName');

  cityName.textContent = newName;
  console.log('cityName', cityName)

  localStorage.setItem("cityInput", cityInput);
});

