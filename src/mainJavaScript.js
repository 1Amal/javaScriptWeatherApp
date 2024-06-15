//This is the main JavaScript file

//ES Module Imports
//Following will import the CSS file used to style the project
import "./mainStyleSheet.css";
import { processWeatherAPI } from "./queryAPI";
import { displayController } from "./displayController";



export const newInstanceProcessWeatherAPI = new processWeatherAPI();
export const newInstanceDisplayController = new displayController();

newInstanceProcessWeatherAPI.sendAPIQuery("Melbourne");
newInstanceDisplayController.receiveUserInput();
