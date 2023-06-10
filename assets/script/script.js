var apiKey = '20f0a2a25bmsha1132609ec51c03p19afc2jsn69af4cefaa78';
console.log('data') // added to gitignore file need to delete//

var currentWeather = function(cityName) {
console.log('testing')
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13')
    console.log('currentWeather', currentWeather)

    .then (function(response) {
        return response.json();
    }
        )};