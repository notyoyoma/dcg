# About DCG

## Methodology

I wanted to build a front-end game engine that could support basic RPGs with minimal code complexity. My goal is to keep the game code as simple and elegant as possible.

## Technology Stack
#### Languages

Javascript
HTML
CSS

#### Software Dependencies

+ [ Node.js ]( https://nodejs.org/en/ )
+ [ Grunt ]( https://www.npmjs.com/package/grunt-cli )
+ [ Webpack ]( https://www.npmjs.com/package/webpack )
+ [ Babel.js ]( https://www.npmjs.com/package/babel )
+ [ Handlebars.js ]( http://handlebarsjs.com/ )
+ [ GoldenLayout ]( https://golden-layout.com/ )
+ [ SASS ]( http://sass-lang.com/guide )

I've written [ simple instructions ]( ./getting-started.md#installing-dependencies ) for how to install all of this, and get started.

#### How it works

The grunt task runs webpack with configuration options (you can run a dev server or compile a static production-ready build). Webpack bundles the modules, and runs [ ./src/app.js ]( ../src/app.js ) which creates the core game object. The core game object stores the state and functions of the game, and the UI objects manage user input and interface templates. Handlebars.js builds these templates, and sets up Object.observe watchers to update the UI when the game state changes.

## Contributors

+ [ Marty Naselli ]( http://github.com/notyoyoma )
+ [ DeWayne Johnsonbaugh ](http://github.com/djohnsonbaugh)
