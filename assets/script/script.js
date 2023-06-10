var button = document.getElementById('#btn');
var searchInput = 


button.addEventListener("click", function() {
    getData();
  });

async function getdata() {

const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '20f0a2a25bmsha1132609ec51c03p19afc2jsn69af4cefaa78',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	},
    body: JSON.stringify({
		text: textToTranslate.value,
		target: 'ru'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();

	console.log(result);
} catch (error) {
	console.error(error);
}}