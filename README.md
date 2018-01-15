
# What is Fortress?

Fortress is a repository for learning the [webpack](http://webpack.github.io/docs/) build tool. This repository provides the webpack code configurations that correspond to [blog posts](https://matthewpolizzotti.com) appearing on [matthewpolizzotti.com](https://matthewpolizzotti.com). Check out the below **Blog Post Code Branches** section for a full list of blog posts and their corresponding code branches.

# Get Started

## Clone the Repository

Open a terminal and enter the `git clone` command to a directory of your choice.

    git clone https://github.com/mpolizzotti/fortress.git

## Install Node & NPM

This repository leverages [node.js](http://nodejs.org/) and makes use of npm, a package manager for installing node modules. The latest releases of node ships with npm so only a node installation is required. Node offers platform installers for both Windows and Mac OSX. They also offer binaries for Windows, Mac OSX and Linux systems. Visit the [download](https://nodejs.org/en/download/) page for more information.

To verify your node installation, open a terminal and enter the `node -v` command.

    node -v

To verify your npm installation, open a terminal and enter the `npm -v` command.

    npm -v

## Install Node Modules

Once node and npm are installed you will need to install all of the node modules leveraged by this repository. You can view all of the module dependencies by examining the `package.json` file located under the `fortress` root directory.

Open a terminal window and navigate to the root `fortress` directory.

    cd path/to/fortress

Run the `npm install` command. (_You must run the npm install command in the same directory that contains the package.json file_).

    npm install

Depending upon your system permissions, you may need to run the `npm install` as root.

    sudo npm install

Once complete, the `node_modules` directory, containing all of your project's node modules, will be added to your project.

## Install Webpack

The purpose of this repository is to test the webpack build tool, as such, it is recommended to install webpack globally so it is accessible across all projects.

    npm install -g webpack

### Build & Compile Front-end

Once everything is installed you will need to build the front-end and compile assets using webpack.

Open a terminal window and navigate to your application's root `fortress` directory.

    cd path/to/fortress

Run the `npm build` command. This runs the `webpack` command.

    npm build

### Launch Application
To preview the compiled application, open a terminal window and navigate to the root of your project.

    cd path/to/fortress

Run the `npm run start` command. This launches the application using the `webpack-dev-server`.

    npm run start

Open a browser window and navigate to *localhost:8080*.

# Blog Post Code Branches

Each branch within this repository corresponds to a different blog post.

## Webpack: (Part I) Setup a Basic Build

Follow the below instructions to run the code configuration for the Webpack: (Part I) Setup a Basic Build tutorial.

	cd path/to/fortress
	git checkout webpack-part-1-setup-a-basic-build
	npm install
	npm run build
	npm run start

Open a browser window and navigate to *localhost:8080*.