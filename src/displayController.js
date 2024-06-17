// This module will receive user inputs and update the Display based on received API data

export class displayController {
  constructor() {}

  receiveUserInput() {
    console.log("Display Controller Module called");
  }

  updateDisplay(weatherData) {
    console.log(weatherData);

    // Following code will select the relevant HTML Selectors for Day 1
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

    // Following code will select the relevant HTML Selectors for Day 2
    const displayDate2 = document.querySelector(".displayDate2");
    const DisplayTempAverageDay2 = document.querySelector(
      ".DisplayTempAverageDay2"
    );
    const displayTempLowDay2 = document.querySelector(".displayTempLowDay2");
    const displayTempHighDay2 = document.querySelector(".displayTempHighDay2");
    const displayWeatherConditionDay2 = document.querySelector(
      ".displayWeatherConditionDay2"
    );
    const displayHumidityDay2 = document.querySelector(".displayHumidityDay2");
    const displayWindSpeedDay2 = document.querySelector(
      ".displayWindSpeedDay2"
    );

    const displayUVDay2 = document.querySelector(".displayUVDay2");
    const displaySunriseDay2 = document.querySelector(".displaySunriseDay2");
    const displaySunsetDay2 = document.querySelector(".displaySunsetDay2");

    // Following code will select the relevant HTML Selectors for Day 3
    const displayDate3 = document.querySelector(".displayDate3");
    const DisplayTempAverageDay3 = document.querySelector(
      ".DisplayTempAverageDay3"
    );
    const displayTempLowDay3 = document.querySelector(".displayTempLowDay3");
    const displayTempHighDay3 = document.querySelector(".displayTempHighDay3");
    const displayWeatherConditionDay3 = document.querySelector(
      ".displayWeatherConditionDay3"
    );
    const displayHumidityDay3 = document.querySelector(".displayHumidityDay3");
    const displayWindSpeedDay3 = document.querySelector(
      ".displayWindSpeedDay3"
    );

    const displayUVDay3 = document.querySelector(".displayUVDay3");
    const displaySunriseDay3 = document.querySelector(".displaySunriseDay3");
    const displaySunsetDay3 = document.querySelector(".displaySunsetDay3");

 

    //Following code will update the above selected HTML selectors with relevant data for Day 1;
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
    displayPressureDay1.innerText = weatherData.weatherNow.pressure + " Pa";
    displayUVDay1.innerText = weatherData.weatherNow.uv;
    displaySunriseDay1.innerText = weatherData.weatherNow.sunrise;
    displaySunsetDay1.innerText = weatherData.weatherNow.sunset;
    // displayWeatherAlertsDay1.innerText = weatherData.weatherNow.weatherAlerts;
    displayLastUpdateDay1.innerText = weatherData.weatherNow.weatherLastUpdated;

    //Following code will update the above selected HTML selectors with relevant data for Day 2;
    displayDate2.innerText = weatherData.weatherTommorrow.currentDate;
    DisplayTempAverageDay2.innerText =
      weatherData.weatherTommorrow.temperatureCAverage + "°";
    displayTempLowDay2.innerText =
      weatherData.weatherTommorrow.temperatureCLow + "°";
    displayTempHighDay2.innerText =
      weatherData.weatherTommorrow.temperatureCHigh + "°";
    displayWeatherConditionDay2.innerText =
      weatherData.weatherTommorrow.condition;
    displayHumidityDay2.innerText =
      weatherData.weatherTommorrow.humidityAverage;
    displayWindSpeedDay2.innerText =
      weatherData.weatherTommorrow.windSpeedMaximum + " Km/h";
    displayUVDay2.innerText = weatherData.weatherTommorrow.uv;
    displaySunriseDay2.innerText = weatherData.weatherTommorrow.sunrise;
    displaySunsetDay2.innerText = weatherData.weatherTommorrow.sunset;

    //Following code will update the above selected HTML selectors with relevant data for Day 3;
    displayDate3.innerText = weatherData.weatherDayAfterTommorrow.currentDate;
    DisplayTempAverageDay3.innerText =
      weatherData.weatherDayAfterTommorrow.temperatureCAverage + "°";
    displayTempLowDay3.innerText =
      weatherData.weatherDayAfterTommorrow.temperatureCLow + "°";
    displayTempHighDay3.innerText =
      weatherData.weatherDayAfterTommorrow.temperatureCHigh + "°";
    displayWeatherConditionDay3.innerText =
      weatherData.weatherDayAfterTommorrow.condition;
    displayHumidityDay3.innerText =
      weatherData.weatherDayAfterTommorrow.humidityAverage;
    displayWindSpeedDay3.innerText =
      weatherData.weatherDayAfterTommorrow.windSpeedMaximum + " Km/h";
    displayUVDay3.innerText = weatherData.weatherDayAfterTommorrow.uv;
    displaySunriseDay3.innerText = weatherData.weatherDayAfterTommorrow.sunrise;
    displaySunsetDay3.innerText = weatherData.weatherDayAfterTommorrow.sunset;
  }

  apiStatus(apiMessage)  //Code to display API Status

  {
    const apiStatus = document.querySelector(".apiStatus");
    apiStatus.innerText = apiMessage;

  }

}
