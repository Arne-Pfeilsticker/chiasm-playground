'use strict';

require('es5-shim');
require('es5-sham');

require('jquery');
var angular = require('angular');
require('angular-ui-router');
require('angular-animate');
require('angular-aria');
require('angular-material');

var app = angular.module('chiasmApp', ['ui.router', 'ngAnimate', 'ngAria', 'ngMaterial']);

app.config(['$mdThemingProvider', function ($mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('deep-orange');
}]);

app.constant('VERSION', require('../../package.json').version);

require('./imprint');
require('./todo-list');

app.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/todos');
    //
    // Now set up the states

    $stateProvider.state('todos', {
            url: '/todos',
            templateUrl: 'features/todo-list/todos.html',
            controller: 'TodoCtrl'
        })
        .state('imprint', {
            url: '/imprint',
            templateUrl: 'features/imprint/imprint.html',
            controller: 'ImprintCtrl'
        })
    ;
});
