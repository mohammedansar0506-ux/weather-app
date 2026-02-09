const cityName = document.getElementById('cityName');
let result = document.getElementById('result');

async function fetchWeather() {
    const city = cityName.value;
    if (city === "") {
        result.innerHTML = 'Invalid Input'
    }
    else {
        try {
            result.innerHTML = 'Loading...'
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84f4e950d23f50aec1107a3944bb936c`)
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                const weatherData = data.main;
                const weather = Math.round(weatherData.temp - 273.15);
                const climate = data.weather[0].description.toUpperCase();
                result.innerHTML = `${weather}°C, ${climate}`;
            }
            else {
                result.innerHTML = 'Incorrect City';
            }
        }
        catch { result.innerHTML = 'No Internet Connection' };
    }
} 