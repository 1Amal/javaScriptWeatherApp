//This is the main JavaScript file

//ES Module Imports
//Following will import the CSS file used to style the project
import "./mainStyleSheet.css";
import { processWeatherAPI } from "./queryAPI";
import { displayController } from "./displayController";

const weatherSearchButton = document.querySelector("#weatherSearchButton");
const weatherSearchField = document.querySelector("#locationInput");

export const newInstanceProcessWeatherAPI = new processWeatherAPI();
export const newInstanceDisplayController = new displayController();

newInstanceDisplayController.receiveUserInput();

weatherSearchButton.addEventListener("click", () => {
  newInstanceProcessWeatherAPI.sendAPIQuery(weatherSearchField.value);
  console.log(weatherSearchField.value);
});
