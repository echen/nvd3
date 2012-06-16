
nv.addGraph(function() {
    var chart = nv.models.linePlusBarChart()
        .x(function(d,i) { return i })
        .color(d3.scale.category10().range());

    chart.xAxis.tickFormat(function(d) {
      var dx = testdata[0].values[d] && testdata[0].values[d].x || 0;
      return d3.time.format('%x')(new Date(dx))
    });

    chart.yAxis1
        .tickFormat(d3.format(',f'));

    chart.yAxis2
        .tickFormat(function(d) { return '$' + d3.format(',f')(d) });

    chart.bars.forceY([0]);
    //chart.lines.forceY([0]);

    d3.select('#chart1 svg')
        .datum(testdata)
      .transition().duration(500).call(chart);

    return chart;
});

