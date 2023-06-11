let previousSearch = false;

$('#searchButton').on('click', function() {
let cityValue = $('input').val();
lastCity = true;
cityWeatherInfo(cityValue);
$('input').val('');
console.log('data', cityWeatherInfo)
});

$("#cityList").on("click", "button", function(event) {
  let cityValue = event.target.textContent;
  theLastCity = false;
  cityWeatherInfo(cityValue);
});








