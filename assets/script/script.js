var button = document.getElementById('#btn');
var inText = document.querySelector("#inputText");

button.addEventListener("click", function() {
  getData();
});

async function getdata() {
  const url = 'https://openweather43.p.rapidapi.com/weather?q=%3CREQUIRED%3E&appid=da0f9c8d90bde7e619c3ec47766a42f4&appid=%3CREQUIRED%3E&units=standard';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '20f0a2a25bmsha1132609ec51c03p19afc2jsn69af4cefaa78',
      'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}