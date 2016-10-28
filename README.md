# Webpack Sandbox
This repository is a sandbox for learning the [webpack](http://webpack.github.io/docs/) build tool. As a Software Consultant working for [Unicon](http://www.unicon.net), it is important to consistently review and evaluate emerging technologies. To that end, this repository aims to explore the webpack build tool and its associated plugin ecosystem. Please note, that very little consideration has been given to the compiled application that is generated from this webpack implementation. Again, the purpose of this repository is too explore webpack and to understand how webpack might be leveraged in a real-world application.

# Get Started
## Clone the Repository
Open a terminal and enter the `git clone` command to a directory of your choice.

    git clone https://github.com/mpolizzotti/webpacksandbox

## Install Node & NPM
This sandbox leverages [node.js](http://nodejs.org/) and makes use of npm, a package manager for installing node modules. The latest releases of node ships with npm so only a node installation is required. Node offers platform installers for both Windows and Mac OSX. They also offer binaries for Windows, Mac OSX and Linux systems. Visit the [download](https://nodejs.org/en/download/) page for more information.

To verify your node installation, open a terminal and enter the `node -v` command.

    node -v

To verify your npm installation, open a terminal and enter the `npm -v` command.

    npm -v

## Install Node Modules
Once node and npm are installed you will need to install all of the node modules leveraged by this sandbox. You can view all of the module dependencies by examining the package.json file located under the `webpacksandbox` root directory.

Open a terminal window and navigate to the root `webpacksandbox` directory.

    cd path/to/webpacksandbox

Run the `npm install` command. (_You must run the npm install command in the same directory that contains the package.json file_).

    npm install

Depending upon your system permissions, you may need to run the `npm install` as root.

    sudo npm install

Once complete, the `node_modules` directory, containing all of your project's node modules, will be added to your project.

## Install Webpack
The purpose of this sandbox is to test the webpack build tool, as such, it is recommended to install webpack globally so it is accessible across all projects.

    npm install -g webpack

#### Build & Compile Front-end
Once everything is installed you will need to build the front-end and compile assets using webpack.

Open a terminal window and navigate to your application's root `webpacksandbox` directory.

    cd path/to/webpacksandbox

Run the `npm build:dev` command. This runs the `webpack` command.

    npm build:dev

#### Launch Application
To preview the sandbox, open a terminal window and navigate to the root of your project.

    cd path/to/webpacksandbox

Run the `npm run watch` command. This launches the application using the `webpack-dev-server`.

    npm run watch

Open a browser window and navigate to *localhost:8080*.

# Command-Line Interface
* `npm run build:dev` - Build development environment
* `npm run build:prod` - Build production environment
* `npm run watch` - Watch files & live reload the browser
* `npm run lint` - Lint JavaScript code using [eslint](https://github.com/eslint/eslint)
