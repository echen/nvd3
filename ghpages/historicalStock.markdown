---
layout: ex
title: Historical Stock Data using Yahoo Pipes
---

## Historical Stock Data using Yahoo Pipes

<form id="stockForm" class="well form-inline">
  <label for="ticker">Stock Ticker: </label>
  <input type="text" id="ticker" class="input-small" name="ticker" value="GOOG"></input>

  <label for="endDate">Start Date: </label>
  <input type="text" id="startDate" class="input-small" name="startDate" value="-1 year"></input>

  <label for="endDate">End Date: </label>
  <input type="text" id="endDate" class="input-small" name="endDate" value="now"></input>

  <label for="frequency">Frequency: </label>
  <select id="frequency" class="input-small" name="frequency">
    <option value="d">Daily</option>
    <option value="w">Weekly</option>
    <option value="m">Monthly</option>
    <!--<option value="v">Dividends Only</option>-->
  </select>
  <button type="submit" id="getData" name="getData" class="btn btn-primary pull-right">Get Data</button>
</form>

<h1>
  <span id="stockName"> </span>
  <span id="stockValue"> </span>
  <!--<span id="stockSymbol"> </span>-->

  <small>
    <span id="stockChange"> </span>
    (<span id="stockChangePercent"> </span>)
  </small>

  <small id="stockLoading" class="pull-right" style="display:none">
    <img src="images/spinner.gif" style="height: 24px; width: 24px; display: inline-block"> Loading....
  </small>
</h1>

<div id="chart">
  <svg style="height:500px"> </svg>
</div>

<script type="text/javascript" src="historicalStock.js"> </script>


### Source Code

{% highlight js linenos %}
{% include historicalStock.js %}
{% endhighlight %}
