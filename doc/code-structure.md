# Code Structure

With DCG I wanted to create something others will want to contribute to, fork, and use. To do this I've tried to design a system with:

* clean code structure
* understandable syntax
* simple and easy languages

## Modular Design Pattern

The [ modular design pattern ]( https://en.wikipedia.org/wiki/Module_pattern#Concept ) offers many benefits to a project like this. Separating the program into logical functional components that interact with each other will (I hope) give us these benefits:

+ **Conceptual simplicity** - It will offer easier debugging, testing, and continuous integration.
+ **Extensibility** - It will make it easier to add additional modules in the future.
+ **Configurability** - It will enable individual developers to remove, disable, or hide different modules to create a different game experiences.
+ **Scalability** - It will allow the game to grow in size and complexity, while (hopefully) remaining managable.
+ **Portability** - The various modules in DCG will be very dependant, so this isn't a huge concern. However, if a module is simple and usefull enough, it could easily be used in other projects.

#### Webpack and ES6
#### Modular Code Structure
###### Separation of Concerns
#### Tests
## Storage of running game state
## Storage of saved game state
