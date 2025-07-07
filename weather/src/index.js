function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInput.value;

  alert(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

function showCurrentTime() {
  let now = new Date(); //use for current time
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  let hour = now.getHours();
  let minutes = now.getMinutes();

  let changeTime = document.querySelector("#currentTime");
  changeTime.innerHTML = day + " " + hour + ":" + minutes;

  return day + " " + hour + ":" + minutes;
}
showCurrentTime();

// now adding currevt temp from api 
let apiurlNew =
  "https://api.shecodes.io/weather/v1/current?query=Sydney&key=4c8b405tf587a604fdd58fod46b3f159&units=metric";

function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
  let country = response.data.country;
  let description = response.data.condition.description;

  let temperatureElement = document.querySelector("#degreeChange");
  temperatureElement.innerHTML = temperature;

  let descriptionElement = document.querySelector("#description-ch");
 descriptionElement.innerHTML = description;


  let humidityElement = document.querySelector("#humidity-ch");
 humidityElement.innerHTML = response.data.temperature.humidity + "%";

  let windElement = document.querySelector("#wind-ch");
  windElement.innerHTML = response.data.wind.speed + " Km/h";

 console.log(response.data.temperature.humidity);
 console.log(response.data.wind.speed);

 
}

axios.get(apiurlNew).then(displayTemperature);
