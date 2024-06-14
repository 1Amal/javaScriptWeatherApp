# WebDevGitHubProjectTemplate

GitHub Repository Template for Web Development Projects

This repository provides a comprehensive template for your web development projects, incorporating essential tools for efficient development and maintaining high code quality.

## Features

Webpack: Bundles JavaScript modules and dependencies for optimized builds.
HtmlWebpackPlugin: Automatically generates HTML files with references to bundled assets.
ESLint: Lints your JavaScript code, catching errors and enforcing style consistency.
Prettier: Formats your JavaScript code automatically for consistent and readable style.
Simplified project structure: Easy organization and maintenance of your codebase.
Supports development workflow: Optional automatic reloading with a development server.
Getting Started
Clone this repository:

## Initial Setup

When creating a new project use Github templates and choose this template to create a repo with this template

Install all dependencies at once:
`npm install css-loader eslint webpack html-webpack-plugin prettier eslint-config-prettier --save-dev`

Install dependencies individually
`npm install css-loader --save-dev`
`npm install html-webpack-plugin --save-dev`
`npm install html-webpack-plugin --save-dev`
`npm install prettier --save-dev`
`npm install eslint-config-prettier --save-dev`
`npm install eslint --save-dev`

## Webpack
This will install the file loader to correctly load images
`npm install file-loader --save-dev`

## Manual build

`npm run build`

## Automatic build

`npx webpack --watch`

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

## Project Structure

This template includes the following folders and files:

src: Contains the source code for your web application.
components: Reusable UI components.
mainStyleSheet.css: Stylesheet for the application, it is served from the mainJavaScript.js.
assets: Static assets like images, fonts, etc.
mainJavaScript.js: The main entry point for your JavaScript application.
index.html: The main HTML template for your application.
Additional folders can be added based on your project needs (e.g., utils, api).
package.json: Manages project dependencies and scripts.
webpack.config.js: Webpack configuration file for bundling JavaScript modules.
.eslintrc.js: ESLint configuration file for linting rules.
.prettierrc.js: Prettier configuration file for formatting rules.
Note: The public folder is not strictly required but can be helpful during development with a development server.

ESLint: During development, consider running ESLint automatically on file changes to catch errors and style inconsistencies early on. You can integrate it with your development server or use a linting tool like ESLint CLI.
Prettier: Prettier can be configured to format your code automatically on save or using a script. This ensures consistent code style throughout your project.
Building for Production
The specific steps for building a production-ready version of your application may vary depending on your chosen tools and hosting platform. Generally, you'll want to:

Run a build script (often defined in package.json) to:
Bundle JavaScript modules using Webpack.
Minify the code (optional) for smaller file sizes.
Optimize assets (optional) for faster loading.
Follow the deployment instructions for your chosen hosting platform.
Remember: This is a comprehensive template. Feel free to customize it further based on your specific needs! Consider adding additional linters or formatters depending on your preferences.
