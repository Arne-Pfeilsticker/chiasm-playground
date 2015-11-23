'use strict';

var Chiasm = require('chiasm');

// This is the module published as the npm package 'chiasm-charts'.
var components = require('./components');

module.exports = function() {
    var chiasm = new Chiasm();

    chiasm.plugins.layout = require('chiasm-layout');
    chiasm.plugins.links = require('chiasm-links');
    chiasm.plugins.dsvDataset = require('chiasm-dsv-dataset');

    // TODO add an API to Chiasm that supports registering multiple plugins simultaneously.
    // e.g. chiasm.registerPlugins(Charts.components);
    chiasm.plugins.scatterPlot = components.scatterPlot;
    chiasm.plugins.lineChart = components.lineChart;
    chiasm.plugins.barChart = components.barChart;

    chiasm.setConfig({
        'layout': {
            'plugin': 'layout',
            'state': {
                'containerSelector': '#container',
                'layout': {
                    'orientation': 'vertical',
                    'children': [
                        {
                            'orientation': 'horizontal',
                            'size': 2,
                            'children': ['myBarChart', 'myScatterPlot']
                        },
                        'myLineChart'
                    ]
                }
            }
        },
        'lineChartDataLoader': {
            'plugin': 'dsvDataset',
            'state': {
                'path': './data/lineChartData'
            }
        },
        'myLineChart': {
            'plugin': 'lineChart',
            'state': {
                'xAxisLabelText': 'Time',
                'xColumn': 'timestamp',
                'yAxisLabelText': 'Temperature',
                'yColumn': 'temperature',
                'xAxisLabelTextOffset': 32,
                'yAxisLabelTextOffset': 30,
                'margin': {top: 0, right: 20, bottom: 35, left: 50}
            }
        },
        'scatterPlotDataLoader': {
            'plugin': 'dsvDataset',
            'state': {
                'path': './data/scatterPlotData'
            }
        },
        'myScatterPlot': {
            'plugin': 'scatterPlot',
            'state': {
                'xAxisLabelText': 'Sepal Length',
                'xColumn': 'sepal_length',
                'yAxisLabelText': 'Petal Length',
                'yColumn': 'petal_length',
                'xAxisLabelTextOffset': 32,
                'yAxisLabelTextOffset': 30,
                'margin': {top: 5, right: 20, bottom: 35, left: 50}
            }
        },
        'barChartDataLoader': {
            'plugin': 'dsvDataset',
            'state': {
                'path': './data/barChartData'
            }
        },
        'myBarChart': {
            'plugin': 'barChart',
            'state': {
                'xAxisLabelText': 'Name',
                'xColumn': 'name',
                'yAxisLabelText': 'Amount',
                'yColumn': 'amount',
                'xAxisLabelTextOffset': 32,
                'yAxisLabelTextOffset': 30,
                'margin': {top: 5, right: 20, bottom: 35, left: 50}
            }
        },
        'myLinks': {
            'plugin': 'links',
            'state': {
                'bindings': [
                    'lineChartDataLoader.data -> myLineChart.data',
                    'scatterPlotDataLoader.data -> myScatterPlot.data',
                    'barChartDataLoader.data -> myBarChart.data'
                ]
            }
        }
    });
};
