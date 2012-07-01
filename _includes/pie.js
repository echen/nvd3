
nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .labelThreshold(.01)
      .showLabels(true);

    d3.select("#chart svg")
        .datum(exampleData())
      .transition().duration(1200)
        .call(chart);

  return chart;
});

nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true)
      .donut(true);

    d3.select("#chart2 svg")
        .datum(exampleData())
      .transition().duration(1200)
        .call(chart);

  return chart;
});



function exampleData() {
  return [
  {
    key: "Cumulative Return",
    values: [
      { 
        "label" : "CDS / Options" ,
        "value" : 29.765957771107
      } , 
      { 
        "label" : "Cash" , 
        "value" : 0
      } , 
      { 
        "label" : "Corporate Bonds" , 
        "value" : 32.807804682612
      } , 
      { 
        "label" : "Equity" , 
        "value" : 196.45946739256
      } , 
      { 
        "label" : "Index Futures" ,
        "value" : 0.19434030906893
      } , 
      { 
        "label" : "Options" , 
        "value" : 98.079782601442
      } , 
      { 
        "label" : "Preferred" , 
        "value" : 13.925743130903
      } , 
      { 
        "label" : "Not Available" , 
        "value" : 5.1387322875705
      }
    ]
  }
  ];
}


