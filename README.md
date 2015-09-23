# Setup environment

### Windows:
1. Install [Git for Windows](https://git-scm.com/download/win)
2. Install [Node.js](https://nodejs.org/en/download/)
3. Run the Git Shell (Installed in step 1)
4. Install grunt: `$ npm install -g grunt-cli`
5. Generate a [SSH key](https://help.github.com/articles/generating-ssh-keys/#step-2-generate-a-new-ssh-key) and [add it to your github account](https://help.github.com/articles/generating-ssh-keys/#step-4-add-your-ssh-key-to-your-account)
6. Clone repo: `$ git clone git@github.com:notyoyoma/dcg.git`
7. Install modules: `$ npm install`

### OSX / Linux:
1. Install [Xcode and Git](http://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac)
2. Install [NVM](https://github.com/creationix/nvm#install-script)
3. Install NPM: `$ nvm install stable`
4. Install grunt: `$ npm install -g grunt-cli`
6. Generate a [SSH key](https://help.github.com/articles/generating-ssh-keys/#step-2-generate-a-new-ssh-key) and [add it to your github account](https://help.github.com/articles/generating-ssh-keys/#step-4-add-your-ssh-key-to-your-account)
7. Clone repo: `$ git clone git@github.com:notyoyoma/dcg.git`
8. Install modules: `$ npm install`

# Running the project

Use one of the commands below, then load [localhost:8080](http://localhost:8080)

### Production environment:
```shell
$ grunt prod
```

### Development environment:
```shell
$ grunt
```
