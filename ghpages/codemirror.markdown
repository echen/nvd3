---
layout: ex
title: Simple Line Chart
---

<link rel="stylesheet" href="../css/codemirror.css"></link>
<link rel="stylesheet" href="../css/ambiance.css"></link>
<style type="text/css">
  .CodeMirror {
    width: 100%;
    border: 1px solid #999;
    margin: 30px 0;
  }
  .CodeMirror-scroll {
    height: auto;
    overflow-y: hidden;
    overflow-x: auto;
  }
  iframe {
    width: 100%;
    float: left;
    height: 420px;
    border-width: 0;
  }
</style>


<h2>Simple Line Chart</h2>


<iframe id="preview">

</iframe>



<textarea id="code" name="code">
&lt;!doctype html>
&lt;html>
  &lt;head>
    &lt;meta charset="utf-8">
    &lt;link rel="stylesheet" href="../src/nv.d3.css">
    &lt;script type="text/javascript" src="../lib/d3.v2.js"> &lt;/script>
    &lt;script type="text/javascript" src="../nv.d3.js"> &lt;/script>
  &lt;/head>
  &lt;body>
    &lt;div id="chart">
      &lt;svg style="height:400px"> &lt;/svg>
    &lt;/div>
    &lt;script>

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

    &lt;/script>
  &lt;/body>
&lt;/html>
</textarea>


<script type="text/javascript" src="../js/lib/codemirror/codemirror.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/xml/xml.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/javascript/javascript.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/css/css.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/gfm/gfm.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/htmlmixed/htmlmixed.js"> </script>



<script>
  var delay;
  // Initialize CodeMirror editor with a nice html5 canvas demo.
  var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
    mode: 'text/html',
    tabMode: 'indent',
    theme: 'ambiance',
    lineNumbers: true,
    onChange: function() {
      clearTimeout(delay);
      delay = setTimeout(updatePreview, 300);
    }
  });

  function updatePreview() {
    var previewFrame = document.getElementById('preview');
    var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
    preview.open();
    preview.write(editor.getValue());
    preview.close();
  }
  setTimeout(updatePreview, 300);
</script>

