# Chiasm Playground

This is my playground to learn and test Curran's [Chiasm](https://github.com/chiasm-project/chiasm) - A browser based 
environment for interactive data visualizations.
 
I more or less take his examples and combine them with technologies like:
* AngularJs
* Angular Material
* Browerify
* OrientDB
* gulp
* etc.

## Technological details

As a basis for this project Bastian's [angular-browserify](https://github.com/basti1302/angular-browserify) template was 
taken. But the app will be changed from a "By Tpye" in a "By Feature" directory structure. 
Bastian's suggestions are independent of the directory structure. 

At first glance one might think that Browserify is an 
Angular-killer, but Bastian makes them a perfect match. The how to is described [here](https://blog.codecentric.de/en/2014/08/angularjs-browserify/).

### Build

This project comes with a `gulpfile` that includes:

* running ESlint to lint JavaScript sources,
* running unit tests via Mocha,
* processing sources with Browserify (to create a non-minfied Browserify bundle),
* ngAnnotate & uglify (to create an ngAnnotate-processed and minified Browserify bundle),
* end-to-end tests with Protractor,
* a static asset server (gulp-connect) and
* live reload support.

### Useful gulp tasks

The
* `gulp fast`:
    * linting
    * unit tests
    * browserification
    * no minification, does not start server
 * `gulp watch`
    * starts server with live reload enabled
    * lints, unit tests, browserifies and live-reloads changes in browser
    * no minification
* `gulp`:
    * linting
    * unit tests
    * browserification
    * minification and browserification of minified sources
    * start server for e2e tests
    * run Protractor End-to-end tests
    * stop server immediately when e2e tests have finished

At development time, you should usually just have `gulp watch` running in the background all the time. Access the app via http://localhost:8080/. Whenever you change a source file and save it, the browserify bundle is recreated and your browser automatically reloads the changes. Use `gulp` (without a specific task) before releases.
