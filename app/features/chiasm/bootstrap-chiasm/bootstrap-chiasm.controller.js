'use strict';

var Chiasm = require("chiasm");

module.exports = function () {
    var chiasm = new Chiasm();

    chiasm.plugins.layout = require("chiasm-layout");
    chiasm.plugins.links = require("chiasm-links");
    chiasm.plugins.dsvDataset = require("chiasm-dsv-dataset");

    chiasm.plugins.scatterPlot = require("./scatterPlot");
    chiasm.plugins.lineChart = require("./lineChart");
    chiasm.plugins.barChart = require("./barChart");
    chiasm.plugins.pieChart = require("./pieChart");

    chiasm.setConfig({
        "inject-bar-chart": {
            "plugin": "layout",
            "state": {
                "containerSelector": "#bar-chart-container",
                "layout": "myBarChart"
            }
        },
        "inject-line-chart": {
            "plugin": "layout",
            "state": {
                "containerSelector": "#line-chart-container",
                "layout": "myLineChart"
            }
        },
        "inject-scatter-plot": {
            "plugin": "layout",
            "state": {
                "containerSelector": "#scatterplot-container",
                "layout": "myScatterPlot"
            }
        },
        "inject-pie-chart": {
            "plugin": "layout",
            "state": {
                "containerSelector": "#pie-chart-container",
                "layout": "myPieChart"
            }
        },
        "lineChartDataLoader": {
            "plugin": "dsvDataset",
            "state": {
                "path": "./data/lineChartData"
            }
        },
        "myLineChart": {
            "plugin": "lineChart",
            "state": {
                "xAxisLabelText": "Time",
                "xColumn": "timestamp",
                "yAxisLabelText": "Temperature",
                "yColumn": "temperature",
                "xAxisLabelTextOffset": 32,
                "yAxisLabelTextOffset": 30,
                "margin": {top: 0, right: 20, bottom: 45, left: 50}
            }
        },
        "scatterPlotDataLoader": {
            "plugin": "dsvDataset",
            "state": {
                "path": "./data/scatterPlotData"
            }
        },
        "myScatterPlot": {
            "plugin": "scatterPlot",
            "state": {
                "xAxisLabelText": "Sepal Length",
                "xColumn": "sepal_length",
                "yAxisLabelText": "Petal Length",
                "yColumn": "petal_length",
                "xAxisLabelTextOffset": 32,
                "yAxisLabelTextOffset": 30,
                "margin": {top: 5, right: 20, bottom: 45, left: 50}
            }
        },
        "barChartDataLoader": {
            "plugin": "dsvDataset",
            "state": {
                "path": "./data/barChartData"
            }
        },
        "myBarChart": {
            "plugin": "barChart",
            "state": {
                "xAxisLabelText": "Name",
                "xColumn": "name",
                "yAxisLabelText": "Amount",
                "yColumn": "amount",
                "xAxisLabelTextOffset": 32,
                "yAxisLabelTextOffset": 30,
                "margin": {top: 5, right: 20, bottom: 45, left: 50}
            }
        },
        "myPieChart": {
            "plugin": "pieChart",
            "state": {
                "sliceColumn": "amount",
                "fill": "none",
                "stroke": "black",
                "strokeWidth": "2px"
            }
        },
        "myLinks": {
            "plugin": "links",
            "state": {
                "bindings": [
                    "lineChartDataLoader.data -> myLineChart.data",
                    "scatterPlotDataLoader.data -> myScatterPlot.data",
                    "barChartDataLoader.data -> myBarChart.data",
                    "barChartDataLoader.data -> myPieChart.data"
                ]
            }
        }
    });
};