'use strict';

require('es5-shim');
require('es5-sham');

require('jquery');
var angular = require('angular');
require('angular-route');

var app = angular.module('chiasmApp', ['ngRoute']);

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
