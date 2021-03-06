# Getting Started

## Installing Dependencies

In order to run DCG, you will need the software listed [ here ]( ./about.md#software-dependencies ).

### Windows:
1. Install [Git for Windows](https://git-scm.com/download/win)
2. Install [Node.js](https://nodejs.org/en/download/)
3. Run the Git Shell (Installed in step 1)
4. Install grunt: `$ npm install -g grunt-cli`
5. Generate a [SSH key](https://help.github.com/articles/generating-ssh-keys/#step-2-generate-a-new-ssh-key) if needed, and [add it to your github account](https://help.github.com/articles/generating-ssh-keys/#step-4-add-your-ssh-key-to-your-account)
6. Clone repo: `$ git clone git@github.com:notyoyoma/dcg.git`
7. Navigate to the directory: `$ cd dcg`
8. Install dependencies: `$ npm install`

### OSX / Linux:
1. Install [Xcode and Git](http://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac)
2. Install [NVM](https://github.com/creationix/nvm#install-script)
3. Install NPM: `$ nvm install stable`
4. Install grunt: `$ npm install -g grunt-cli`
6. Generate a new [SSH key](https://help.github.com/articles/generating-ssh-keys/#step-2-generate-a-new-ssh-key) if needed, and [add it to your github account](https://help.github.com/articles/generating-ssh-keys/#step-4-add-your-ssh-key-to-your-account)
7. Clone repo: `$ git clone git@github.com:notyoyoma/dcg.git`
8. Navigate to the directory: `$ cd dcg`
9. Install dependencies: `$ npm install`

### Running the project

Use one of the commands below, then load [localhost:8080](http://localhost:8080)

##### Production environment:
```shell
$ grunt prod
```

##### Development environment:
```shell
$ grunt
```

## Understanding Code Structure

DCG code is organized into two separate folders.

1. `/src/game_modules` contains the logic for loading, and running the game.
2. `/src/ui_modules` contains the code for display and user interaction.

All game modules run on the core game object. The UI modules observe the core game object, and update whenever changes are made. In a development environment, you can access the core game object by typing `game` in the javascript console of your browser. Using that object, you can directly run individual module's functions to test results.

You can read more about the code structure [ here ]( ./code-structure.md )

## Debugging

When using the webpack-dev-server ( `$ grunt` ) you can view and debug your code using Chrome's debugging tools. To do this follow these steps:

1. Open the Developer tools (ctrl + shift + I | cmd + alt + I)
2. Navigate to the *Sources* tab
3. Open the *webpack://* source location
4. Navigate to `./src/`, and open the file you need to debug 

You can place breakpoints, set watches on variables, and most other debugging tasks right from here.
