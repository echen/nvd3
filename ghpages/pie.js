
nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .showLabels(false);

    d3.select("#chart svg")
        .datum(exampleData())
      .transition().duration(1200)
        .call(chart);

  return chart;
});



function exampleData() {
  return [
    { 
      key: "One",
      y: 5
    },
    { 
      key: "Two",
      y: 2
    },
    { 
      key: "Three",
      y: 9
    },
    { 
      key: "Four",
      y: 7
    },
    { 
      key: "Five",
      y: 4
    },
    {
        key: "Six",
        y: 3
    }
  ];
}


