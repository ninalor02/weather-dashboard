var button = document.getElementById('#btn');
var inText = document.querySelector("#inputText");

var historyList = function(cityName) {
    $('.previous-search:contains("' + cityName + '")').remove();

    var searchHistoryInput = $('<p>');
    searchHistoryInput.addClass('past-search');
    searchHistoryInput.text(cityName);
    //console.log('data', historyInput) // not working //

    var searchInputContainer = $('<div>');
    searchInputContainer.addClass('past-search-container');

    searchInputContainer.append(historyInput);

    var searchHistoryContainer = $('#searchHistoryContainer');
    searchHistoryContainer.append(searchInputContainer);

    if (saveSearch.length > 0) {
        var previousSearch = localStorage.getItem('saveSearch');
        $("#search-input").val("");
    };
};

var loadHistory = function() {

    var saveSearchHistory = localStorage.getItem("saveSearch");
    if (!saveSearchHistory) {
        return false;
    }

    saveSearchHistory = JSON.parse(saveSearchHistory);
    for (var i = 0; i <saveSearchHistory.length; i++) {
        historyList(saveSearchHistory[i]);
    }
};

var currentWeatherContainer = function(cityName) {
    //get api 
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13')
    .then(function(response) {
        return response.json();
    })
}

