var width = function() { return $(window).width() - 40 },
    height = 500,
    xFormat = d3.format(',r'),
    yFormat = d3.format('.02f'),
    chart = nv.models.lineWithLegend(),
    container = d3.select('#chart svg');


chart
    .width(width())
    .height(height);

chart.xAxis
    .axisLabel('Time (ms)')
    .tickFormat(xFormat);

chart.yAxis
    .axisLabel('Voltage (v)')
    .tickFormat(yFormat);


container
    .attr('width', width())
    .attr('height', height)
    .datum(sinAndCos());

container.transition().duration(500).call(chart);



function tooltipShow(e) {
  var offset = $('#chart').offset(),
      left = e.pos[0] + offset.left,
      top = e.pos[1] + offset.top,
      content;

  content = '<h3>' + e.series.key + '</h3>' +
            '<p>' + chart.yAxis.tickFormat()(chart.y()(e.point)) + 'v at ' +
            chart.xAxis.tickFormat()(chart.x()(e.point)) + 'ms</p>';

  nvtooltip.show([left, top], content);
}


function resizeChart() {
  chart
      .width(width())
      .height(height);

  container
      .attr('width', width())
      .call(chart);
};



// Bind event handlers to their events
chart.dispatch.on('tooltipShow', tooltipShow);
chart.dispatch.on('tooltipHide', nvtooltip.cleanup);
$(window).resize(resizeChart)




/**************************************
 * Simple test data generator
 */


function sinAndCos() {
  var sin = [],
      cos = [];

  for (var i = 0; i < 100; i++) {
    sin.push({x: i, y: Math.sin(i/10)});
    cos.push({x: i, y: .5 * Math.cos(i/10)});
  }

  return [
    {
      values: sin,
      key: 'Sine Wave',
      color: '#ff7f0e'
    },
    {
      values: cos,
      key: 'Cosine Wave',
      color: '#2ca02c'
    }
  ];
}

