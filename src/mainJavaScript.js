//This is the main JavaScript file
// 2024, Amal Kariyawasam

//Following will import the CSS file used to style the project
import "./mainStyleSheet.css";

//ES Module Imports
import { processWeatherAPI } from "./queryAPI";
import { displayController } from "./displayController";

//ES Module Exports
export const newInstanceProcessWeatherAPI = new processWeatherAPI();
export const newInstanceDisplayController = new displayController();

const weatherSearchButton = document.querySelector("#weatherSearchButton");
const weatherSearchField = document.querySelector("#locationInput");

newInstanceDisplayController.receiveUserInput();

weatherSearchButton.addEventListener("click", () => {
  newInstanceProcessWeatherAPI.sendAPIQuery(weatherSearchField.value);
  newInstanceDisplayController.apiStatus("Weather Location request Sent");
  console.log(weatherSearchField.value);
});

newInstanceProcessWeatherAPI.sendAPIQuery("Melbourne,Au");
