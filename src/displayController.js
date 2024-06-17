// This module will receive user inputs and update the Display based on received API data

export class displayController {
  constructor() {}

  receiveUserInput() {
    console.log("Display Controller Module called");
  }

  updateDisplay(weatherData) {
    console.log(weatherData);
    // Following code will select the relevant HTML Selectors
    const displayLocation = document.querySelector(".displayLocation");
    const displayRegion = document.querySelector(".displayRegion");
    const displayCountry = document.querySelector(".displayCountry");
    const displayDate1 = document.querySelector(".displayDate1");
    const displayLocalTime = document.querySelector(".displayLocalTime");

    const DisplayTempDay1 = document.querySelector(".DisplayTempDay1");
    const displayTempFeelsLikeDay1 = document.querySelector(
      ".displayTempFeelsLikeDay1"
    );
    const displayWeatherConditionDay1 = document.querySelector(
      ".displayWeatherConditionDay1"
    );
    const displayHumidityDay1 = document.querySelector(".displayHumidityDay1");
    const displayWindSpeedDay1 = document.querySelector(
      ".displayWindSpeedDay1"
    );
    const displayPressureDay1 = document.querySelector(".displayPressureDay1");
    const displayUVDay1 = document.querySelector(".displayUVDay1");
    const displaySunriseDay1 = document.querySelector(".displaySunriseDay1");
    const displaySunsetDay1 = document.querySelector(".displaySunsetDay1");
    const displayWeatherAlertsDay1 = document.querySelector(
      ".displayWeatherAlertsDay1"
    );
    const displayLastUpdateDay1 = document.querySelector(
      ".displayLastUpdateDay1"
    );

    //Following code will update the above selected HTML selectors with relevant data;
    displayLocation.innerText = weatherData.locationdDetails.location;
    displayRegion.innerText = weatherData.locationdDetails.region;
    displayCountry.innerText = weatherData.locationdDetails.country;
    displayDate1.innerText = weatherData.locationdDetails.localTime;
    displayLocalTime.innerText = weatherData.locationdDetails.localTime;

    DisplayTempDay1.innerText = weatherData.weatherNow.temperatureC + "°";
    displayTempFeelsLikeDay1.innerText =
      weatherData.weatherNow.temperatureCFeelsLike + "°";
    displayWeatherConditionDay1.innerText = weatherData.weatherNow.condition;
    displayHumidityDay1.innerText = weatherData.weatherNow.humidity;
    displayWindSpeedDay1.innerText = weatherData.weatherNow.windSpeed + " Km/h";
    displayPressureDay1.innerText = weatherData.weatherNow.pressure + " Mb";
    displayUVDay1.innerText = weatherData.weatherNow.uv;
    displaySunriseDay1.innerText = weatherData.weatherNow.sunrise;
    displaySunsetDay1.innerText = weatherData.weatherNow.sunset;
    displayWeatherAlertsDay1.innerText = weatherData.weatherNow.weatherAlerts;
    displayLastUpdateDay1.innerText = weatherData.weatherNow.weatherLastUpdated;
  }
}
