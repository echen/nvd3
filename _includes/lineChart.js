
nv.charts.line()
    .selector('#chart1')
    .data(sinAndCos())
    .y(function(d) { return d.voltage })
    .yAxisLabel('Voltage (v)')
    .build();


/**************************************
 * Simple test data generator
 */

function sinAndCos() {
  var sin = [],
      cos = [];

  for (var i = 0; i < 100; i++) {
    sin.push({x: i, voltage: Math.sin(i/10)});
    cos.push({x: i, voltage: .5 * Math.cos(i/10)});
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

