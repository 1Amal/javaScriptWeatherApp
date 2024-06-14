//This is the main JavaScript file

//ES Module Imports
//Following will import the CSS file used to style the project
import "./mainStyleSheet.css";
import {processWeatherAPI} from "./queryAPI.js";
import { displayController } from "./displayController.js";

const newInstanceProcessWeatherAPI= new processWeatherAPI;
const newInstanceDisplayController= new displayController;

newInstanceProcessWeatherAPI.sendAPIQuery();
newInstanceDisplayController.receiveUserInput();