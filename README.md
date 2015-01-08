# Web Calculator based on the Flux TodoMVC Example

> Flux is An application architecture for React utilizing a unidirectional data flow.
> Built as a skills test for a potential client who requested a "Web calculator built using Facebooks React.js" I was quite pleased with it but never heard from them again.
> Two days R&D fell into the recruitment black hole
> Contributions / feedback are welcome.


## Running

You must have [npm](https://www.npmjs.org/) installed on your computer.
From the root project directory run these commands from the command line:

    npm install

This will install all dependencies.

To build the project, first run this command:

    npm start

This will perform an initial build and start a watcher process that will update build.js with any changes you wish to make.  This watcher is based on [Browserify](http://browserify.org/) and [Watchify](https://github.com/substack/watchify), and it transforms React's JSX syntax into standard JavaScript with [Reactify](https://github.com/andreypopp/reactify).

To run the app, spin up an HTTP server or simply open the index.html file in a browser.


## Credit

Application Architecture was heavily influenced by [Bill Fisher's](https://www.facebook.com/bill.fisher.771) [TodoMVC](http://todomvc.com/examples/react/#/).


## License

Flux is BSD-licensed. We also provide an additional patent grant.
