
d3.select('#stockForm').on('submit', chooseTicker);

chooseTicker();


function chooseTicker() {
  if (d3.event) d3.event.preventDefault();

  var ticker = d3.select('#ticker').property('value');
  var startDate = d3.select('#startDate').property('value');
  var endDate = d3.select('#endDate').property('value');
  var frequency = d3.select('#frequency').property('value');

  getHistoricalStockData(ticker, startDate, endDate, frequency);
  getStockInfo(ticker);
}


function getStockInfo(symbol) {
  d3.json('http://pipes.yahoo.com/pipes/pipe.run?_id=ctBz1YeB3BGxfaUVqWIyXQ&_render=json&StockNames=' + symbol, function(data) {
    var info = data.value.items[0];

    //nv.log(info);
    if (typeof info == 'undefined' || info.StockValue == 0) return;

    d3.select('#stockName').text(info.StockName);
    //d3.select('#stockSymbol').text(info.Symbol);
    d3.select('#stockValue').text(info.StockValue);
    d3.select('#stockChange')
        .text(info.Change)
        .style('color', parseFloat(info.Change) > 0 ? 'green' : 'red' );
    d3.select('#stockChangePercent')
        .text(d3.format('.2%')(parseInt(info.Change) / info.StockValue))
        .style('color', parseFloat(info.Change) > 0 ? 'green' : 'red' );
    d3.select('#stockDate')
        .text(d3.time.format('%b %e %Y')(new Date(info.Date)));

  });
}


function getHistoricalStockData(symbol, startDate, endDate, frequency) {
  startDate = startDate || '-1 year';
  endDate = endDate || 'now';
  frequency = frequency || 'd';

  var loading = d3.select('#stockLoading').style('display', 'block');

  d3.csv('http://pipes.yahoo.com/pipes/pipe.run?_id=e9668915a9ae04cb96c6f8c63279ad7f&_render=csv&enddate=' + endDate + '&startdate=' + startDate + '&frequency=' + frequency + '&ticker=' + symbol, function(data) {
    //nv.log(data);

    loading.style('display', 'none');

    if (!data) return;

    data = data.reverse(); //order data oldest to newest, left to right

    var lineData = [
        {
          "key": "Volume",
          "bar": true,
          "values": data.map(function(d,i) {
            return {
              'x': Date.parse(d.Date),
              'dx': i,
              'y': d.Volume / 1000  //TODO: figure out why y domain was maxing out at 9933800
            }
          })
        },
        {
          "key": "Price",
          "bar": false,
          "values": data.map(function(d,i) {
            return {
              'x': Date.parse(d.Date),
              'dx': i,
              'y': d.Close
              'open': d.Open,
              'close': d.Close,
              'high': d.High,
              'low': d.Low
            }
          })
        }
      ];

    //nv.log(lineData);

    //Having issue with tooltips when updating data
    d3.selectAll('#chart svg *').remove();

    nv.addGraph(function() {
      var chart = nv.models.historicalStockChart()
          //.margin({top: 30, right: 70, bottom: 50, left: 55})
          .x(function(d,i) { return i })
          .color(d3.scale.category10().range());

      // Use if we are removing weekends/holidays
      chart.xAxis
          //.tickPadding(7)
          .tickFormat(function(d) {
            return '';
          });

      chart.xAxis2
          .tickPadding(7)
          .tickFormat(function(d) {
            d = parseInt(d);
            var dx = lineData[0].values[d] && lineData[0].values[d].x || 0;
            return d3.time.format('%x')(new Date(dx))
          });

      chart.xAxis3
          .tickPadding(7)
          .tickFormat(function(d) {
            var dx = lineData[0].values[d] && lineData[0].values[parseInt(d)].x || 0;
            return d3.time.format('%x')(new Date(dx))
          });

      // Use to treat dates linear
      //chart.xAxis.tickFormat(function(d) {
        //return d3.time.format('%x')(new Date(d))
      //});

      chart.yAxis1
          .tickFormat(d3.format(',f'));
          //.tickFormat(function(d) { return d3.format(',f')(d) + 'K' });

      chart.yAxis2
          .tickFormat(d3.format(',.2f'));
          //.tickFormat(function(d) { return '$' + d3.format(',.2f')(d) });

      chart.yAxis3
          .tickFormat(d3.format(',.2f'));
          //.tickFormat(function(d) { return '$' + d3.format(',.2f')(d) });

      chart.bars.forceY([0]);

      d3.select('#chart svg')
          .datum(lineData)
        .transition().duration(500).call(chart);


      return chart;
    });

  });
}
