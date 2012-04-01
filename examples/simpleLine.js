
var width = function() { return $(window).width() - 40 };
    height = function() { return 500 },
    xFormat = d3.format('.02f'),
    yFormat = d3.format(',%');

var chart = nv.models.lineWithLegend()
            .width(width())
            .height(height());

    //chart.yAxis.axisLabel('Cumulative');
    //chart.xAxis.axisLabel('Date');

    chart.yAxis.tickFormat(yFormat);
    chart.xAxis.tickFormat(xFormat);

var svg = d3.select('#chart svg')
            .attr('width', width())
            .attr('height', height())
            .datum(sinAndCos())

svg.transition().duration(500).call(chart);



chart.dispatch.on('tooltipShow', function(e) {
  var offset = $('#chart').offset(),
      left = e.pos[0] + offset.left,
      top = e.pos[1] + offset.top;

  var content = '<h3>' + e.series.key + '</h3>' +
                '<p>' +
                chart.yAxis.tickFormat()(e.point) + ' on ' + chart.xAxis.tickFormat()(e.point) +
                '</p>';

  nvtooltip.show([left, top], content);
});

chart.dispatch.on('tooltipHide', function(e) {
  nvtooltip.cleanup();
});



$(window).resize(function() {
  chart
     .width(width())
     .height(height());

  d3.select('#chart svg')
    .attr('width', width())
    .attr('height', height())
    .call(chart);
});




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
      key: "Sine Wave",
      color: "#ff7f0e"
    },
    {
      values: cos,
      key: "Cosine Wave",
      color: "#2ca02c"
    }
  ];
}

