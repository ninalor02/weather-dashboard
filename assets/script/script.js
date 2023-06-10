var button = document.getElementById('#btn');
var inText = document.querySelector("#inputText");

var requestUrl = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data); // this works //

	for (var i = 0; i < data.length; i++) {
	}

	

  });