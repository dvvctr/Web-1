const apiKey = 'b5bc84fc88e4a99a49c1d764b277c7a3'; 
const city = 'London'; 

let dayOffset = 0;

const button = document.getElementById('get-weather');
const locationEl = document.getElementById('location');
const dateEl = document.getElementById('date');
const temperatureEl = document.getElementById('temperature');
const descriptionEl = document.getElementById('description');

async function getWeather() {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset); 
  const dateString = date.toISOString().split('T')[0]; 

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&date=${dateString}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const weather = data.weather[0];
      const temp = data.main.temp;

      locationEl.innerText = `Location: ${data.name}, ${data.sys.country}`;
      dateEl.innerText = `Date: ${date.toLocaleDateString()}`;
      temperatureEl.innerText = `Temperature: ${temp}°C`;
      descriptionEl.innerText = `Description: ${weather.description}`;
    } else {
      alert('Error fetching weather data');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

button.addEventListener('click', () => {
  if (dayOffset === 0) {
    dayOffset = 1;
    button.innerText = "Get Tomorrow's Weather";
  } else {
    dayOffset = 0; 
    button.innerText = "Get Today's Weather";
  }
  getWeather();
});

getWeather();
