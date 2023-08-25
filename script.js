const apiKey = "27e1b3cea2a605170f1f750d81d31bee";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML =
    Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "/images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "/images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "/images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "/images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "/images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "/images/snow.png";
  }

  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  console.log("button clicked");
  checkWeather(searchBox.value);
});
