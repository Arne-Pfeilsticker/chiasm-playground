'use strict';
// This is an example Chaism plugin that uses D3 to make a pie chart.
// Draws from this Pie Chart example http://bl.ocks.org/mbostock/3887235
// Originally part of this example "Fundamental Visualizations" http://bl.ocks.org/curran/3cc1a2a289dddbd64688

var d3 = require("d3");
var ChiasmComponent = require("chiasm-component");
var Model = require("model-js");
function PieChart() {

    var my = ChiasmComponent({

        // This property specifies which column of the input data should be used to
        // determine the size of each slice of the pie chart.
        sliceColumn: Model.None,

        // This number varies between 0 and 1. Any value other than 0 converts the
        // visualization from a pie chart to a donut chart.
        //
        // 0 = a pie chart,
        // 0.5 = a thick donut chart
        // 0.9 = a thin donut chart
        donutHoleSize: 0,

        // The margin (in pixels) on all sides of the pie chart.
        margin: 10,

        fill: "none",
        stroke: "gray",
        strokeWidth: "1px"

    });

    var arc = d3.svg.arc();
    var pie = d3.layout.pie().sort(null);

    var g = d3.select(my.initSVG()).append("g");

    my.when(["data", "box", "sliceColumn", "donutHoleSize", "margin", "fill", "stroke", "strokeWidth" ],
        function (data, box, sliceColumn, donutHoleSize, margin, fill, stroke, strokeWidth){

            pie.value(function(d) { return d[sliceColumn]; });

            var arcPath = g.selectAll("path").data(pie(data));

            var radius = Math.min(box.width, box.height) / 2 - margin;
            arc.outerRadius(radius);
            arc.innerRadius(donutHoleSize * radius);

            arcPath.enter().append("path");
            arcPath.exit().remove();
            arcPath
                .attr("d", arc)
                .attr("fill", fill)
                .attr("stroke", stroke)
                .attr("stroke-width", strokeWidth);

        });

    my.when("box", function (box) {
        g.attr("transform", "translate(" + box.width / 2 + "," + box.height / 2 + ")");
    });

    return my;
}
module.exports = PieChart;