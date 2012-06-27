
d3.json('cumulativeLineData.json', function(data) {
  nv.addGraph(function() {
    var chart = nv.models.cumulativeLineChart()
                  .x(function(d) { return d[0] })
                  .y(function(d) { return d[1]/100 }) //adjusting, 100% should be 1.00, not 100 as it is in the data
                  .color(d3.scale.category10().range());

     chart.xAxis
        .tickFormat(function(d) {
            return d3.time.format('%x')(new Date(d))
          });

    chart.yAxis
        .tickFormat(d3.format(',.02p'));

    d3.select('#chart svg')
        .datum(data)
      .transition().duration(500)
        .call(chart);

    //TODO: Figure out a good way to do this automatically
    nv.utils.windowResize(chart.update);

    return chart;
  });
});

