---
layout: default
title: Simple Line Chart
---

<link rel="stylesheet" href="../css/codemirror.css"></link>
<link rel="stylesheet" href="../css/eclipse.css"></link>

<link rel="stylesheet" href="../css/inlet/Color.Picker.Classic.css"></link>
<link rel="stylesheet" href="../css/inlet/jquery-ui-slider.css"></link>

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
    min-height: 300px;
    /*
    width: 100%;
    border: 1px solid #999;
    margin: 0 0 30px 0;
    overflow: auto;
    */
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
    /*
    position: absolute;
    right: 0;
    top: 40px;
    width: 100%;
    */
  }

  #codeWrap {
    /*
    position: absolute;
    left: 0;
    top: 40px;
    */
    overflow: auto;
  }

  iframe {
    width: 100%;
    height: 420px;
    border-width: 0;
  }
</style>



<!--
<div class="subnav navbar-fixed-top">
  <ul class="nav nav-pills">
    <li class="active"><a href="#">Simple Line Chart</a></li>
    <li><a hre="#">Test</a></li>
  </ul>
</div>
-->




<div class="row-fluid">

<div class="span6" id="previewWrap">

<iframe id="preview">

</iframe>

</div>


<div class="span6" id="codeWrap">

<div>
  <ul class="nav nav-tabs" id="codeTabs">
    <li class="active"><a href="#chartCode" data-toggle="tab">Chart Code (JavaScript)</a></li>
    <li><a href="#chartData" data-toggle="tab">Data (JSON)</a></li>
    <li><a href="#chartMarkup" data-toggle="tab">Markup (HTML/CSS)</a></li>
    <!--
    <li class="dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown">Settings</a>
      <ul class="dropdown-menu">
        <li><a href="#">Vim Mode</a></li>
      </ul>
    </li>
    -->
  </ul>
</div>

<div class="tab-content" id="codeTabsContent">
  <div class="tab-pane fade in active" id="chartCode">
    <textarea id="code" name="code"> </textarea>
  </div>
  <div class="tab-pane fade in active" id="chartData">
    <textarea id="codeData" name="codeData"> </textarea>
  </div>
  <div class="tab-pane fade in active" id="chartMarkup">
    <textarea id="codeMarkup" name="codeMarkup"> </textarea>
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





</div>


<script type="text/javascript" src="../js/lib/codemirror/codemirror.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/keymap/vim.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/xml/xml.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/javascript/javascript.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/css/css.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/gfm/gfm.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/htmlmixed/htmlmixed.js"> </script>

<script type="text/javascript" src="../js/lib/inlet/jquery-ui.1.8.16.custom.min.js"> </script>
<script type="text/javascript" src="../js/lib/inlet/jquery.ui.slider.js"> </script>
<script type="text/javascript" src="../js/lib/inlet/underscore-min.js"> </script>
<script type="text/javascript" src="../js/lib/inlet/Color.Picker.Classic.js"> </script>
<script type="text/javascript" src="../js/lib/inlet/Color.Space.js"> </script>
<script type="text/javascript" src="../js/lib/inlet/inlet.js"> </script>



<script type="text/javascript" src="codemirror.js"> </script>
