
/*****
 * This file is VERY ugly... but putting this together to force myself into fixing the API,
 * and making it consistent with the entire collection.
 * TODO: REFACTOR when API is fixed
 *****/


(function() {

  var mainExample, exampleOne, exampleTwo, exampleThree;

  var colors = d3.scale.category20().range();

  var test_data = stream_layers(3,20 + Math.random()*50,.1).map(function(data, i) {
    return {
      key: 'Stream' + i,
      values: data,
      color: colors[i]
    };
  });


  // --------------------------- MAIN EXAMPLE ---------------------------------

  var selector = '#mainExample';

  nv.addGraph({
    generate: function() {
      var chart = nv.models.multiBarWithLegend(),
          svg = d3.select(selector),
          width = function() { return parseInt(svg.style('width')) },
          height = function() { return parseInt(svg.style('height')) };
          //svg = container.append('svg');


      chart
          .margin({top: 50, bottom: 30, left: 40, right: 10})
          .width(width)
          .height(height);

      chart.xAxis
          .tickFormat(d3.format(',f'));

      chart.yAxis
          .tickFormat(d3.format(',.1f'));

      svg
          .datum(test_data)
        .transition().duration(500).call(chart);

      mainExample = chart;

      return chart;
    },
    callback: function(chart) {
      var showTooltip = function(e) {
        var offsetElement = document.getElementById(selector.substr(1)),
            left = e.pos[0] + offsetElement.offsetLeft,
            top = e.pos[1] + offsetElement.offsetTop,
            formatY = chart.yAxis.tickFormat(), //Assumes using same format as axis, can customize to show higher precision, etc.
            formatX = chart.xAxis.tickFormat();

        // uses the chart's getX and getY, you may customize if x position is not the same as the value you want
        //   ex. daily data without weekends, x is the index, while you want the date
        var content = '<h3>' + e.series.key + '</h3>' +
                      '<p>' +
                      formatY(chart.y()(e.point)) + ' at ' + formatX(chart.x()(e.point)) +
                      '</p>';

        nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's');
      };

      chart.dispatch.on('tooltipShow', showTooltip);
      chart.dispatch.on('tooltipHide', nv.tooltip.cleanup);

      chart.legend.dispatch.on('legendClick.updateExamples', function() {
        setTimeout(function() {

          exampleOne.update();

          d3.select('#exampleTwo')
              .datum(test_data.filter(function(d) { return !d.disabled }))
            .transition().duration(500)
              .call(exampleTwo);

          d3.select('#exampleThree')
              .datum(test_data.filter(function(d) { return !d.disabled }))
            .transition().duration(500)
              .call(exampleThree);

        }, 100);
      });

      nv.utils.windowResize(function() {
        d3.select(selector)
            .attr('width', chart.width()()) //need to set SVG dimensions, chart is not aware of the SVG component
            .attr('height', chart.height()())
          .transition().duration(500)
            .call(chart);
      });
    }
  });



  // --------------------------- EXAMPLE ONE ---------------------------------


  nv.addGraph(function() {  
    var chart = nv.models.lineChart()
                  .showLegend(false)
                  .margin({top: 10, bottom: 30, left: 40, right: 10});

    chart.xAxis // chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the partent chart, so need to chain separately
        .tickFormat(d3.format(',r'));

    chart.yAxis
        .tickFormat(d3.format(',.1f'));

    d3.select('#exampleOne')
        .datum(test_data)
      .transition().duration(500)
        .call(chart);

    //TODO: Figure out a good way to do this automatically
    nv.utils.windowResize(chart.update);
    //nv.utils.windowResize(function() { d3.select('#chart1 svg').call(chart) });

    exampleOne = chart;

    return chart;
  });


  // --------------------------- EXAMPLE TWO ---------------------------------

  nv.addGraph({
    generate: function() {
      var svg = d3.select("#exampleTwo"),
          width = function() { return parseInt(svg.style('width')) },
          height = function() { return parseInt(svg.style('height')) },
          chart = nv.models.stackedAreaWithLegend()
                  .margin({top: 10, bottom: 30, left: 40, right: 10})
                  .showControls(false)
                  .showLegend(false)
                  .width(width())
                  .height(height())
                  .style('stream');

                  //.offset('wiggle')
                  //.order('default')
                  //
      chart.yAxis
          .tickFormat(d3.format(',.1f'));

      svg
          .attr('width', width)
          .attr('height', height)
        .datum(test_data)
          .transition().duration(500).call(chart);

      exampleTwo = chart;

      return chart;
    },
    callback: function(chart) {


      chart.dispatch.on('tooltipShow', function(e) {
          var offsetElement = document.getElementById("exampleTwo"),
                  left = e.pos[0] + offsetElement.offsetLeft,
                  top = e.pos[1] + offsetElement.offsetTop,
                  formatterY = d3.format(",.2r"),
            formatterX = function(d) {
              return   d3.time.format('%x')(new Date(d))
            };

        var content = '<h3>' + e.series.key + '</h3>' +
                      '<p>' +
                      formatterY(chart.y()(e.point)) + ' at ' + formatterX(chart.x()(e.point)) +
                      '</p>';

        nv.tooltip.show([left, top], content);
      });

      chart.dispatch.on('tooltipHide', function(e) {
        nv.tooltip.cleanup();
      });



      nv.utils.windowResize(function() {
        var svg = d3.select("#exampleTwo"),
            width = function() { return parseInt(svg.style('width')) },
            height = function() { return parseInt(svg.style('height')) };

        d3.select("#exampleTwo")
            .attr('width', width()) //need to set SVG dimensions, chart is not aware of the SVG component
            .attr('height', height())
          .transition().duration(500)
            .call(chart);
      });
    }
  });




  // --------------------------- EXAMPLE THREE ---------------------------------

  nv.addGraph({
    generate: function() {
      var svg = d3.select("#exampleThree"),
          width = function() { return parseInt(svg.style('width')) },
          height = function() { return parseInt(svg.style('height')) },
          chart = nv.models.stackedAreaWithLegend()
                  .margin({top: 10, bottom: 30, left: 40, right: 10})
                  .showControls(false)
                  .showLegend(false)
                  .width(width())
                  .height(height());

                  //.offset('wiggle')
                  //.order('default')
                  //
      chart.yAxis
          .tickFormat(d3.format(',.1f'));

      svg
          .attr('width', width)
          .attr('height', height)
        .datum(test_data)
          .transition().duration(500).call(chart);

      exampleThree = chart;

      return chart;
    },
    callback: function(chart) {


      chart.dispatch.on('tooltipShow', function(e) {
          var offsetElement = document.getElementById("exampleThree"),
                  left = e.pos[0] + offsetElement.offsetLeft,
                  top = e.pos[1] + offsetElement.offsetTop,
                  formatterY = d3.format(",.2r"),
            formatterX = function(d) {
              return   d3.time.format('%x')(new Date(d))
            };

        var content = '<h3>' + e.series.key + '</h3>' +
                      '<p>' +
                      formatterY(chart.y()(e.point)) + ' at ' + formatterX(chart.x()(e.point)) +
                      '</p>';

        nv.tooltip.show([left, top], content);
      });

      chart.dispatch.on('tooltipHide', function(e) {
        nv.tooltip.cleanup();
      });



      nv.utils.windowResize(function() {
        var svg = d3.select("#exampleThree"),
            width = function() { return parseInt(svg.style('width')) },
            height = function() { return parseInt(svg.style('height')) };

        d3.select("#exampleThree")
            .attr('width', width()) //need to set SVG dimensions, chart is not aware of the SVG component
            .attr('height', height())
          .transition().duration(500)
            .call(chart);
      });
    }
  });



})();

