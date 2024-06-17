// This module will handle all WeatherAPI.com API authentication, query and processing of the received data before passing onto the displayController module

import { newInstanceDisplayController } from "./mainJavaScript";

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
        location: returnedAPIQuery.location.name,
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
        // hourlyWeather:{returnedAPIQuery.forecast.forecastday[0].hour[0].time

        // }
      },
      weatherTommorrow: {
        currentDate: returnedAPIQuery.forecast.forecastday[1].date,
        temperatureCLow: returnedAPIQuery.forecast.forecastday[1].day.mintemp_c,
        temperatureCHigh:
          returnedAPIQuery.forecast.forecastday[1].day.maxtemp_c,
        temperatureCAverage:
          returnedAPIQuery.forecast.forecastday[1].day.avgtemp_c,
        humidityAverage:
          returnedAPIQuery.forecast.forecastday[1].day.avghumidity,
        dailyChanceOfRain:
          returnedAPIQuery.forecast.forecastday[1].day.daily_chance_of_rain,
        windSpeedMaximum:
          returnedAPIQuery.forecast.forecastday[1].day.maxwind_kph,
        uv: returnedAPIQuery.forecast.forecastday[1].day.uv,
        condition: returnedAPIQuery.forecast.forecastday[1].day.condition.text,
        sunrise: returnedAPIQuery.forecast.forecastday[1].astro.sunrise,
        sunset: returnedAPIQuery.forecast.forecastday[1].astro.sunset,
      },
      weatherDayAfterTommorrow: {
        currentDate: returnedAPIQuery.forecast.forecastday[2].date,
        temperatureCLow: returnedAPIQuery.forecast.forecastday[2].day.mintemp_c,
        temperatureCHigh:
          returnedAPIQuery.forecast.forecastday[2].day.maxtemp_c,
        temperatureCAverage:
          returnedAPIQuery.forecast.forecastday[2].day.avgtemp_c,
        humidityAverage:
          returnedAPIQuery.forecast.forecastday[2].day.avghumidity,
        dailyChanceOfRain:
          returnedAPIQuery.forecast.forecastday[2].day.daily_chance_of_rain,
        windSpeedMaximum:
          returnedAPIQuery.forecast.forecastday[2].day.maxwind_kph,
        uv: returnedAPIQuery.forecast.forecastday[2].day.uv,
        condition: returnedAPIQuery.forecast.forecastday[2].day.condition.text,
        sunrise: returnedAPIQuery.forecast.forecastday[2].astro.sunrise,
        sunset: returnedAPIQuery.forecast.forecastday[2].astro.sunset,
      },
    };
    // console.log(displayData);

    return newInstanceDisplayController.updateDisplay(displayData);
  }
}
