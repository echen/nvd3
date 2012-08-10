---
layout: default
title: Live Code examples powered by CodeMirror
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

  #codemirrorNav .toTop {
    visibility: hidden;
  }

  #codemirrorNav.subnav-fixed .toTop {
    visibility: visible;
  }

  #preview {
    width: 100%;
    height: 500px;
    border-width: 0;
  }

  #codemirrorWrap {
    min-height: 800px;
    padding-top: 20px;
  }

  #codemirrorWrap.wrap-fixed {
    padding-top: 60px;
  }

  #preview.preview-fixed {
    position: fixed;
    top: 80px;
    left: 0;
    width: 48.75%;
  }


/* Subnav */
.subnav {
  width: 100%;
  height: 36px;
  background-color: #eeeeee; /* Old browsers */
  background-repeat: repeat-x; /* Repeat the gradient */
  background-image: -moz-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%); /* FF3.6+ */
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f5f5f5), color-stop(100%,#eeeeee)); /* Chrome,Safari4+ */
  background-image: -webkit-linear-gradient(top, #f5f5f5 0%,#eeeeee 100%); /* Chrome 10+,Safari 5.1+ */
  background-image: -ms-linear-gradient(top, #f5f5f5 0%,#eeeeee 100%); /* IE10+ */
  background-image: -o-linear-gradient(top, #f5f5f5 0%,#eeeeee 100%); /* Opera 11.10+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f5f5', endColorstr='#eeeeee',GradientType=0 ); /* IE6-9 */
  background-image: linear-gradient(top, #f5f5f5 0%,#eeeeee 100%); /* W3C */
  border: 1px solid #e5e5e5;
  -webkit-border-radius: 4px;
     -moz-border-radius: 4px;
          border-radius: 4px;
}
.subnav .nav {
  margin-bottom: 0;
}

.subnav-fixed {
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  z-index: 1020; /* 10 less than .navbar-fixed to prevent any overlap */
  border-color: #d5d5d5;
  border-width: 0 0 1px; /* drop the border on the fixed edges */
  -webkit-border-radius: 0;
     -moz-border-radius: 0;
          border-radius: 0;
  -webkit-box-shadow: inset 0 1px 0 #fff, 0 1px 5px rgba(0,0,0,.1);
     -moz-box-shadow: inset 0 1px 0 #fff, 0 1px 5px rgba(0,0,0,.1);
          box-shadow: inset 0 1px 0 #fff, 0 1px 5px rgba(0,0,0,.1);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false); /* IE6-9 */
}
.subnav-fixed .nav {
  /*
  width: 938px;
  */
  margin: 0 auto;
  padding: 0 1px;
}
.subnav .nav > li:first-child > a,
.subnav .nav > li:first-child > a:hover {
  -webkit-border-radius: 0;
     -moz-border-radius: 0;
          border-radius: 0;
}


#codeTabs {
  margin: 2px auto 0;
}

</style>


<div class="container">

  <div class="page-header">
    <h1>Chart Models <small>click to load an editable example</small></h1>
  </div>

  <ul class="thumbnails">

    <li class="span3">
      <a href="#codemirrorNav" class="thumbnail" data-chart="line" data-charttitle="Line Chart">
        <img src="../img/line.png">
      </a>
    </li>

    <li class="span3">
      <a href="#codemirrorNav" class="thumbnail" data-chart="scatter" data-charttitle="Scatter / Bubble Chart">
        <img src="../img/scatter.png">
      </a>
    </li>

    <li class="span3">
      <a href="#codemirrorNav" class="thumbnail" data-chart="stackedArea" data-charttitle="Stacked Area Chart">
        <img src="../img/stackedarea.png">
      </a>
    </li>

    <li class="span3">
      <a href="#codemirrorNav" class="thumbnail" data-chart="discreteBar" data-charttitle="Discrete Bar Chart">
        <img src="../img/discretebar.png">
      </a>
    </li>

    <li class="span3">
      <a href="#codemirrorNav" class="thumbnail" data-chart="multiBar" data-charttitle="Group / Stacked Bar Chart">
        <img src="../img/stackedbar.png">
      </a>
    </li>

    <li class="span3">
      <a href="#codemirrorNav" class="thumbnail" data-chart="multiBarHorizontal" data-charttitle="Horizontal Grouped / Stacked Bar Chart">
        <img src="../img/horizontalbar.png">
      </a>
    </li>

    <li class="span3">
      <a href="#codemirrorNav" class="thumbnail" data-chart="linePlusBar" data-charttitle="Line Plus Bar Chart">
        <img src="../img/lineplusbar.png">
      </a>
    </li>

    <li class="span3">
      <a href="#codemirrorNav" class="thumbnail" data-chart="cumulativeLine" data-charttitle="Cumulative Line Chart">
        <img src="../img/cumulativeline.png">
      </a>
    </li>

    <li class="span3">
      <a href="#codemirrorNav" class="thumbnail" data-chart="lineWithFocus" data-charttitle="Line with View Finder Chart">
        <img src="../img/linewithfocus.png">
      </a>
    </li>

    <li class="span3">
      <a href="#codemirrorNav" class="thumbnail" data-chart="pie" data-charttitle="Pie Chart">
        <img src="../img/pie.png">
      </a>
    </li>

  </ul>


</div>



<div class="container" style="margin-top: 50px;">

  <div class="subnav" id="codemirrorNav">
    <div class="subnav-inner container">
      <!--
      <div class="btn-group pull-left" id="loadChart" style="margin:4px 4px 0 2px">
        <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">
          More Charts
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
          <li><a href="#" data-chart="line">Line Chart</a></li>
          <li><a href="#" data-chart="cumulativeLine">Cumulative Line Chart</a></li>
          <li><a href="#" data-chart="linePlusBar">Line Plus Bar Chart</a></li>
          <li><a href="#" data-chart="lineWithFocus">Line with View Finder Chart</a></li>
          <li><a href="#" data-chart="discreteBar">Discrete Bar Chart</a></li>
          <li><a href="#" data-chart="multiBar">Grouped / Stacked Bar Chart</a></li>
          <li><a href="#" data-chart="multiBarHorizontal">Horizontal Grouped / Stacked Bar Chart</a></li>
          <li><a href="#" data-chart="pie">Pie Chart</a></li>
          <li><a href="#" data-chart="scatter">Scatter / Bubble Chart</a></li>
          <li><a href="#" data-chart="stackedArea">Stacked Area Chart</a></li>
        </ul>
      </div>
      -->

      <a href="#" class="toTop pull-left" style="margin-top:8px;margin-left:4px;"><i class="icon-arrow-up"> </i></a>
      <h3 class="pull-left" style="margin-top:4px;margin-left: 10px;" id="chartTitle">Line Chart</h3>

      <ul class="nav nav-tabs pull-right" id="codeTabs">
        <li class="active"><a href="#chartCode" data-toggle="tab">Chart Code (JavaScript)</a></li>
        <li><a href="#chartData" data-toggle="tab">Data (JSON)</a></li>
        <li><a href="#chartMarkup" data-toggle="tab">Markup (HTML/CSS)</a></li>
      </ul>
      <div id="codemirrorControls" class="pull-right" style="margin:4px 20px 0 8px;">
        <div class="btn-group pull-right" data-toggle="buttons-radio">
          <div class="btn btn-small active" id="keymap-default">Default</div>
          <div class="btn btn-small" id="keymap-vim">VIM</div>
          <div class="btn btn-small" id="keymap-emacs">Emacs</div>
        </div>
      </div>
    </div>
  </div>

</div>

<div class="row-fluid" id="codemirrorWrap">

<div class="span6" id="previewWrap">

<iframe id="preview">

</iframe>

</div>


<div class="span6" id="codeWrap">

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


</div>



</div>


<script type="text/javascript" src="../js/lib/codemirror/codemirror.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/keymap/vim.js"> </script>
<script type="text/javascript" src="../js/lib/codemirror/keymap/emacs.js"> </script>
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
