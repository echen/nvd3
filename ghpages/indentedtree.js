
//***** THIS API WILL BE CHANGED DRASTICALLY IN THE NEXT DAY OR TWO *****

nv.addGraph(function() {
  var chart = nv.models.indentedTree()
                .options(testOptions())
                .tableClass('table'); //for bootstrap styling

  d3.select('#chart')
      .datum(testData())
    .call(chart);

  return chart;
});




/**************************************
 * Example data
 */

function testData() {
  return [{
    key: 'NVD3',
    url: 'http://novus.github.com/nvd3',
    values: [
      {
        key: "Charts",
        _values: [
          {
            key: "Simple Line",
            type: "Historical",
            url: "http://novus.github.com/nvd3/ghpages/line.html"
          },
          {
            key: "Scatter / Bubble",
            type: "Snapshot",
            url: "http://novus.github.com/nvd3/ghpages/scatter.html"
          },
          {
            key: "Stacked / Stream / Expanded Area",
            type: "Historical",
            url: "http://novus.github.com/nvd3/ghpages/stackedArea.html"
          },
          {
            key: "Discrete Bar",
            type: "Snapshot",
            url: "http://novus.github.com/nvd3/ghpages/discreteBar.html"
          },
          {
            key: "Grouped / Stacked Multi-Bar",
            type: "Snapshot / Historical",
            url: "http://novus.github.com/nvd3/ghpages/multiBar.html"
          },
          {
            key: "Horizontal Grouped Bar",
            type: "Snapshot",
            url: "http://novus.github.com/nvd3/ghpages/multiBarHorizontal.html"
          },
          {
            key: "Line and Bar Combo",
            type: "Historical",
            url: "http://novus.github.com/nvd3/ghpages/linePlusBar.html"
          },
          {
            key: "Cumulative Line",
            type: "Historical",
            url: "http://novus.github.com/nvd3/ghpages/cumulativeLine.html"
          },
          {
            key: "Line with View Finder",
            type: "Historical",
            url: "http://novus.github.com/nvd3/ghpages/lineWithFocus.html"
          }
        ]
      },
      {
        key: "Chart Components",
        _values: [
          {
            key: "Legend",
            type: "Universal",
            url: "http://novus.github.com/nvd3/examples/legend.html"
          }
        ]
      }
    ]
  }];
}

// THIS OPTIONS FORMAT WILL BE CHANGED DRASTICALLY!, will likely be chained options on the chart, like everything else

function testOptions() {
  return {
    columns: [
      {
        key: 'key',
        label: 'Name',
        showCount: true,
        width: 50,
        type: 'text',
        classes: function(d) { return d.url ? 'clickable name' : 'name' },
        click: function(d) {
           if (d.url) window.location.href = d.url;
        }
      },
      {
        key: 'type',
        label: 'Type',
        width: 5,
        type: 'text'
      }
    ],
    header: true,
    noResults: "Nothing portfolios found."
  };
}

