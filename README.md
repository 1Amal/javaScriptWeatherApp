# Title: Weather App with JavaScript, HTML, CSS, Webpack, and a Weather API

## Description:

This repository contains the source code for a user-friendly weather app built with JavaScript, HTML, CSS, Webpack, and a weather API. It allows users to search for locations and displays the current weather conditions, including temperature, weather description.

## Features:

Location Search: Users can enter a city name or zip code to retrieve weather data.
Weather Data Display: The app displays essential weather information like temperature, description.
Modern Design: Utilizes CSS to create a visually appealing and responsive user interface.
Modular Code: Employs Webpack for code organization and bundling, enhancing maintainability.
Weather API Integration: Retrieves weather data from a reliable and well-documented Weather API (https://www.weatherapi.com/)
Prerequisites:

Node.js and npm installed on your system.
A free API key from a weather service (e.g.Weather API (https://www.weatherapi.com/)).

Installation:

Clone this repository: git clone git@github.com:1Amal/javaScriptWeatherApp.git
Navigate to the project directory: cd weather-app
Install dependencies: `npm install css-loader eslint webpack html-webpack-plugin prettier eslint-config-prettier --save-dev`

Edit the HTML, CSS, and JavaScript files within the src directory to customize the app's appearance and functionality.
The Webpack configuration (webpack.config.js) manages bundling and optimization.
Refer to the chosen weather API's documentation for specific API calls and response formats.

## Webpack

This will install the file loader to correctly load images
`npm install file-loader --save-dev`

## Manual build

`npm run build`

## Automatic build

`npx webpack --watch`

Build the optimized production version of the app: npm run build
The bundled files will be placed in the dist directory.
Follow the hosting provider's instructions to deploy the app to a web server or use following instructions to host this on GitHub Pages.

## Automatically deploy to Github Pages

Step 1
Remove the 'dist' directory from the project’s .gitignore file.

Step 2
Make sure git knows about your subtree (the subfolder with your site).

`git add dist && git commit -m "Initial dist subtree commit"`

Step 3
Use subtree push to send it to the gh-pages branch on GitHub.

`git subtree push --prefix dist origin gh-pages`
Boom. If your folder isn’t called dist, then you’ll need to change that in each of the commands above.

By adding this to the packages.json (Already configured for this repo)
You can simply push the commit to both the main branch and the gh-pages branch (Git Hub pages will be served from gh-pages branch)
`"scripts": {"gh-pages": "git subtree push --prefix dist origin gh-pages && git push"}`

`npm run gh-pages`

License: This project is licensed under the GNU GPL V3.0 (see the LICENSE file for details).
