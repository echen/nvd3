
nv.addGraph(function() {
  var chart = nv.models.scatterChart()
                .showDistX(true)
                .showDistY(true)
                .color(d3.scale.category10().range());

  chart.xAxis.tickFormat(d3.format('.02f'))
  chart.yAxis.tickFormat(d3.format('.02f'))

  d3.select('#chart svg')
      .datum(randomData())
    .transition().duration(500)
      .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});




/**************************************
 * Simple test data generator
 */


function randomData() {
  var data = [],
      random = d3.random.normal();

  for (i = 0; i < 2; i++) {
    data.push({
      key: 'Group ' + i,
      values: []
    });

    for (j = 0; j < 100; j++) {
      data[i].values.push({x: random(), y: random(), size: Math.random()});
    }
  }

  return data;
}

