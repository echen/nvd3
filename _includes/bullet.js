
nv.addGraph(function() {  
  var chart = nv.models.bulletChart()
                .width(400)
                .height(80);

  d3.select('#chart svg')
      .datum([exampleData()])
    .transition().duration(1000)
      .call(chart);

  return chart;
});



function exampleData() {
  return [
    {"title":"Revenue","subtitle":"US$, in thousands","ranges":[150,225,300],"measures":[220],"markers":[250]}
  ];
}
