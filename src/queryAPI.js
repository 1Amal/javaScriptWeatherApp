// This module will handle all WeatherAPI.com API authentication, query and processing of the received data before passing onto the displayController module

export class processWeatherAPI {
  constructor() {
    this.apiKey = "5f5b890a42c24a71a1535406241206";
  }

  async sendAPIQuery(location) {
    console.log("Send a API query Module Loaded");
    const sendQueryURL = `https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${location}&days=3&aqi=yes&alerts=yes`;

    let fetchWeather = await fetch(sendQueryURL, { mode: "cors" });
    const weatherDataJSON = await fetchWeather.json();

    return this.forwardDataToDisplayController(weatherDataJSON);
  }

  forwardDataToDisplayController(returnedAPIQuery) {
    console.log(returnedAPIQuery);
    const displayData = {
      locationdDetails: {
        Location: returnedAPIQuery.location.name,
        region: returnedAPIQuery.location.region,
        country: returnedAPIQuery.location.country,
        localTime: returnedAPIQuery.location.localtime,
      },
      weatherNow: {
        temperatureC: returnedAPIQuery.current.temp_c,
        temperatureCFeelsLike: returnedAPIQuery.current.feelslike_c,
        condition: returnedAPIQuery.current.condition.text,
        sunrise: returnedAPIQuery.forecast.forecastday[0].astro.sunrise,
        sunset: returnedAPIQuery.forecast.forecastday[0].astro.sunset,
        humidity: returnedAPIQuery.current.humidity,
        pressure: returnedAPIQuery.current.pressure_mb,
        windSpeed: returnedAPIQuery.current.wind_kph,
        uv: returnedAPIQuery.current.uv,
        weatherAlerts: returnedAPIQuery.alerts.alert,
        weatherLastUpdated: returnedAPIQuery.current.last_updated,
      },
      weatherTommorrow: {
        currentDate: returnedAPIQuery.forecast.forecastday[0].date,
        temperatureCLow: returnedAPIQuery.forecast.forecastday[0].day.mintemp_c,
        temperatureCHigh:
          returnedAPIQuery.forecast.forecastday[0].day.maxtemp_c,
        temperatureCAverage:
          returnedAPIQuery.forecast.forecastday[0].day.avgtemp_c,
        humidityAverage:
          returnedAPIQuery.forecast.forecastday[0].day.avghumidity,
        dailyChanceOfRain:
          returnedAPIQuery.forecast.forecastday[0].day.daily_chance_of_rain,

        windSpeedMaximum:
          returnedAPIQuery.forecast.forecastday[0].day.maxwind_kph,
        uv: returnedAPIQuery.forecast.forecastday[0].day.uv,
        condition: returnedAPIQuery.forecast.forecastday[0].day.condition.text,
        sunrise: returnedAPIQuery.forecast.forecastday[0].astro.sunrise,
        sunset: returnedAPIQuery.forecast.forecastday[0].astro.sunset,
      },
      weatherDayAfterTommorrow: {},
    };
    console.log(displayData);
  }
}
