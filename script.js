const cityName = document.getElementById("cityName");
let result = document.getElementById("result");

async function fetchWeather() {
  const city = cityName.value;
  if (city !== "") {
    try {
      result.innerHTML = "Getting latest weather...";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84f4e950d23f50aec1107a3944bb936c`,
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const weatherData = data.main;
        const weather = Math.round(weatherData.temp - 273.15);
        const climate = data.weather[0].main;
        result.innerHTML = `
                <div class="weather-result">
                    <p>${data.name}, ${data.sys.country}</p>
                    <h1>${weather}°C</h1>
                    <p>${climate}</p>
                </div>`;
      } else {
        result.innerHTML =
          "City not found. <br> Check the spelling or try adding a country code (e.g. Rome, IT)";
      }
    } catch {
      result.innerHTML = "Network error. Check your connection.";
    }
  } else {
    result.innerHTML = "City name cannot be empty.";
  }
}
