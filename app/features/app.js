'use strict';

require('es5-shim');
require('es5-sham');

require('jquery');
var angular = require('angular');
require('angular-route');
require('angular-animate');
require('angular-aria');
require('angular-material');

var app = angular.module('chiasmApp', ['ngRoute', 'ngAnimate', 'ngAria', 'ngMaterial']);

app.config(['$mdThemingProvider', function ($mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('deep-orange');
}]);

app.constant('VERSION', require('../../package.json').version);

require('./imprint');
require('./todo-list');

app.config(function ($routeProvider) {

    $routeProvider.when('/todos', {
            templateUrl: 'features/todo-list/todos.html',
            controller: 'TodoCtrl'
        })
        .when('/imprint', {
            templateUrl: 'features/imprint/imprint.html',
            controller: 'ImprintCtrl'
        })
        .otherwise({
            redirectTo: '/todos'
        });
});
