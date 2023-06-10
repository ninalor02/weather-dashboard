var apiKey = '20f0a2a25bmsha1132609ec51c03p19afc2jsn69af4cefaa78';
console.log('data') // added to gitignore file need to delete//
var saveSearch = [];
console.log('saveSearch') // added to gitignore file need to delete//


var historyList = function(cityName) {
    $('.past-search:contains("' + cityName + '")').remove();
}

// history entries //
var historyEntry = $('<p>');
historyEntry.addClass('previous-search');
historyEntry.text('cityName');

// container for entry //

var entryContainer = $('<div>');
entryContainer.addClass('entryContainer');


var historyContainer = $('history-container');
historyContainer.append(historyEntry);

if(saveSearch.length > 0) {
    var previousSavedSearches = localStorage.getItem("savedSearches");
        savedSearches = JSON.parse(previousSavedSearches);
        console.log('data')
    }






var currentWeatherSection = function(cityName) {
    
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13')
    
        .then(function(response) {
            return response.json()
        })

        .then(function(response){
            return currentWeatherSection(cityName).json
        
        }); 
        
    }
    // console.log('test1') // only works outsde of function //