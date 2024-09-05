const city = "Novosibirsk";
const apiKey = "533004032dd1d4a862e03cadd4e58f4d";
const lang = "ru";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${lang}`;

async function fetchWeatherData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const weatherContainer = document.getElementById('weather-container');

    const imgNovosibirsk = document.createElement('img');
    imgNovosibirsk.src = 'img/novosibirsk.jpg';
    imgNovosibirsk.classList.add('weather-img-novosibirsk');
    weatherContainer.appendChild(imgNovosibirsk);

    const weatherInfo = document.createElement('div');
    weatherInfo.classList.add('weather-info');
    weatherContainer.appendChild(weatherInfo);

    const infoList = document.createElement('ul');
    infoList.classList.add('info-list');
    weatherInfo.appendChild(infoList);

    const city = document.createElement('li');
    city.classList.add('city');
    city.textContent = `Город: ${data.name}`;
    infoList.appendChild(city);

    const coordinates = document.createElement('li');
    coordinates.classList.add('coordinates');
    coordinates.textContent = `Координаты: ${data.coord.lat}, ${data.coord.lon}`;
    infoList.appendChild(coordinates);

    const clouds = document.createElement('li');
    clouds.classList.add('clouds');
    clouds.textContent = `Облачность: ${data.weather[0].description}`;
    infoList.appendChild(clouds);

    const temperature = document.createElement('li');
    temperature.classList.add('temperature');
    temperature.textContent = `Температура: ${data.main.temp}°C`;
    infoList.appendChild(temperature);

    const humidity = document.createElement('li');
    humidity.classList.add('humidity');
    humidity.textContent = `Влажность: ${data.main.humidity}%`;
    infoList.appendChild(humidity);

    const pressure = document.createElement('li');
    pressure.classList.add('pressure');
    pressure.textContent = `Давление: ${data.main.pressure} hPa`;
    infoList.appendChild(pressure); 

    const wind = document.createElement('li');
    wind.classList.add('wind');
    wind.textContent = `Ветер: ${data.wind.speed} м/с`;
    infoList.appendChild(wind);
    
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

fetchWeatherData();


