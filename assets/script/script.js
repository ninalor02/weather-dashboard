var searchButton = document.querySelector('#searchButton');
var previousSearch = document.querySelector('#previousSearch');
var cityName = document.querySelector('#cityName');
var fiveDayForecast = document.querySelector('#fiveDayForecast');

button.addEventListener("click", function() {
    getData();
  });
 
async function getData() {
const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '20f0a2a25bmsha1132609ec51c03p19afc2jsn69af4cefaa78',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	},
  body: JSON.stringify({
		text: textToTranslate.value,
		target: 'ru'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
  cityName.textContent = searchText;
  console.log(searchText);
} catch (error) {
	console.error(error);
}}