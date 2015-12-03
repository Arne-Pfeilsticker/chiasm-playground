'use strict';

require('es5-shim');
require('es5-sham');

require('jquery');
var angular = require('angular');
var Hammer = require('hammerjs');  // I do not really know if that's so right.

var app = angular.module('chiasmApp', [require('angular-ui-router'), require('angular-material') ]);

app.config(['$provide', '$mdThemingProvider', '$mdIconProvider', function ($provide, $mdThemingProvider, $mdIconProvider) {

    $mdIconProvider
        //.iconSet('action', './images/icons/action-icons.svg', 24)
        //.iconSet('alert', './images/icons/alert-icons.svg', 24)
        //.iconSet('av', './images/icons/av-icons.svg', 24)
        //.iconSet('communication', './images/icons/communication-icons.svg', 24)
        //.iconSet('content', './images/icons/content-icons.svg', 24)
        //.iconSet('device', './images/icons/device-icons.svg', 24)
        //.iconSet('editor', './images/icons/editor-icons.svg', 24)
        //.iconSet('file', './images/icons/file-icons.svg', 24)
        //.iconSet('hardware', './images/icons/hardware-icons.svg', 24)
        //.iconSet('icons', './images/icons/icons-icons.svg', 24)
        //.iconSet('image', './images/icons/image-icons.svg', 24)
        //.iconSet('maps', './images/icons/maps-icons.svg', 24)
        .iconSet('navigation', 'images/icons/navigation-icons.svg', 24)
        //.iconSet('notification', './images/icons/notification-icons.svg', 24)
        //.iconSet('social', './images/icons/social-icons.svg', 24)
        //.iconSet('toggle', './images/icons/toggle-icons.svg', 24)
        //.icon('kommune', './images/icons/icon_kommune.png', 24)
        //.icon('arrowright', './images/icons/arrow_right.svg', 150)
    ;

    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('deep-orange');

    var colorStore = {};

    //fetch the colors out of the themeing provider
    Object.keys($mdThemingProvider._PALETTES).forEach(
        // clone the pallete colors to the colorStore var
        function (palleteName) {
            var pallete = $mdThemingProvider._PALETTES[palleteName];
            var colors = [];
            colorStore[palleteName] = colors;
            Object.keys(pallete).forEach(function (colorName) {
                // use an regex to look for hex colors, ignore the rest
                if (/#[0-9A-Fa-f]{6}|0-9A-Fa-f]{8}\b/.exec(pallete[colorName])) {
                    colors[colorName] = pallete[colorName];
                }
            });
        });

    $provide.factory('mdThemeColors', [
        function () {
            var service = {};

            var getColorFactory = function (intent) {
                return function () {
                    var colors = $mdThemingProvider._THEMES.default.colors[intent];
                    var name = colors.name;
                    // Append the colors with links like hue-1, etc
                    colorStore[name].default = colorStore[name][colors.hues.default];
                    colorStore[name].hue1 = colorStore[name][colors.hues['hue-1']];
                    colorStore[name].hue2 = colorStore[name][colors.hues['hue-2']];
                    colorStore[name].hue3 = colorStore[name][colors.hues['hue-3']];
                    return colorStore[name];
                };
            };

            /**
             * Define the getter methods for accessing the colors
             */
            Object.defineProperty(service, 'primary', {
                get: getColorFactory('primary')
            });

            Object.defineProperty(service, 'accent', {
                get: getColorFactory('accent')
            });

            Object.defineProperty(service, 'warn', {
                get: getColorFactory('warn')
            });

            Object.defineProperty(service, 'background', {
                get: getColorFactory('background')
            });

            return service;
        }
    ]);
}]);

app.constant('VERSION', require('../../package.json').version);

require('./layout');
require('./home');
require('./imprint');
require('./todo-list');
require('./chiasm/magic-bar-chart');
require('./chiasm/chiasm-charts');
require('./chiasm/bootstrap-chiasm');
require('./material-demo');

app.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states

    $stateProvider
        .state('menu', {
            url: '/menu',
            templateUrl: 'features/layout/menu.html',
            controller: 'MenuController',
            controllerAs: 'vm'
        })
        .state('home', {
            url: '/',
            templateUrl: 'features/home/home.html',
            controller: 'HomeController',
            controllerAs: 'vm',
            data: {
                property1: 'foo',
                property2: 'bar'
            }
        })
        .state('magicbarchart', {
            url: '/magicbarchart',
            templateUrl: 'features/chiasm/magic-bar-chart/magic-bar-chart.html',
            controller: 'MagicBarChartController',
            controllerAs: 'vm'
        })
        .state('chiasmcharts', {
            url: '/chiasmcharts',
            templateUrl: 'features/chiasm/chiasm-charts/chiasm-charts.html',
            controller: 'ChiasmChartsController'
        })
        .state('bootstrapchiasm', {
            url: '/bootstrapchiasm',
            templateUrl: 'features/chiasm/bootstrap-chiasm/bootstrap-chiasm.html',
            controller: 'BootstrapChiasmController'
        })
        .state('todos', {
            url: '/todos',
            templateUrl: 'features/todo-list/todos.html',
            controller: 'TodoCtrl'
        })
        .state('materialdemo', {
            url: '/materialdemo',
            templateUrl: 'features/material-demo/material-demo.html'
        })
        .state('materialdemobsl', {
            url: '/materialdemobsl',
            templateUrl: 'features/material-demo/bottom-sheet-list-template.html'
        })
        .state('imprint', {
            url: '/imprint',
            templateUrl: 'features/imprint/imprint.html',
            controller: 'ImprintCtrl'
        })
    ;
});
