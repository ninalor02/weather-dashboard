function getInfo(){
  const newName = document.getElementById("cityInput");
  const cityName = document.getElementById("cityName");
  cityName.innerHTML = "--" + newName.value + "--"
}