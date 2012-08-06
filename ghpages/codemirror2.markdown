---
layout: default
title: Simple Line Chart
---

<link rel="stylesheet" href="../css/codemirror.css"></link>
<link rel="stylesheet" href="../css/eclipse.css"></link>
<style type="text/css">
  .container {
    position: relatove;
  }

  .codemirror-controls {
    list-style-type: none;
  }

  .codemirror-controls .status {
    font-weight: bold;
  }

  .CodeMirror {
    width: 100%;
    border: 1px solid #999;
    margin: 0 0 30px 0;
    overflow: auto;
  }

  .CodeMirror-scroll {
    height: 100%;
    /*
    height: auto;
    overflow-y: hidden;
    overflow-x: auto;
    background: rgba(38, 38, 38, 0.8);
    */
    background: rgba(255, 255, 255, 0.9);
  }

  #previewWrap {
    position: absolute;
    right: 0;
    top: 40px;
    width: 100%;
  }

  #codeWrap {
    position: absolute;
    left: 0;
    top: 40px;
    overflow: auto;
  }

  iframe {
    width: 100%;
    height: 420px;
    border-width: 0;
  }
</style>


<div class="row-fluid">


<div class="span6" id="codeWrap">



<div class="accordion" id="codeAccordian"> 
  <div class="accordion-group"> 
    <div class="accordion-heading"> 
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#codeAccordian" href="#collapseOne"> 
        HTML / CSS Markup
      </a> 
    </div> 
    <div id="collapseOne" class="accordion-body collapse in"> 
      <div class="accordion-inner">
<textarea id="codeMarkup" name="codeMarkup">
&lt;div id="chart">
  &lt;svg style="height:400px">&lt;/svg>
&lt;/div>
</textarea>
      </div> 
    </div> 
  </div> 
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#codeAccordian" href="#collapseTwo">
        JavaScript / Chart Code
      </a>
    </div>
    <div id="collapseTwo" class="accordion-body collapse">
      <div class="accordion-inner">

<textarea id="code" name="code">
nv.addGraph(function() {
  var chart = nv.models.lineChart();

  chart.xAxis
      .axisLabel('Time (ms)')
      .tickFormat(d3.format(',r'));

  chart.yAxis
      .axisLabel('Voltage (v)')
      .tickFormat(d3.format('.02f'));

  d3.select('#chart svg')
      .datum(sinAndCos())
    .transition().duration(500)
      .call(chart);

  nv.utils.windowResize(function() { d3.select('#chart svg').call(chart) });

  return chart;
});


function sinAndCos() {
  var sin = [],
      cos = [];

  for (var i = 0; i &lt; 100; i++) {
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
</textarea>

      </div>
    </div>
  </div>
</div>


<!--
<ul class="codemirror-controls pull-right">
  <li>
    <a href="#" id="vim-mode">Vim mode: <span class="status">Off</span></a>
  </li>
</ul>
-->


</div>



<div class="span6" id="previewWrap">

<iframe id="preview">

</iframe>

</div>



</div>


<script type="text/javascript" src="../js/lib/codemirror/codemirror.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/keymap/vim.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/xml/xml.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/javascript/javascript.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/css/css.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/gfm/gfm.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/htmlmixed/htmlmixed.js"> </script>



<script type="text/javascript" src="codemirror.js"> </script>
