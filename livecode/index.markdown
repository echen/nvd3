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






/* Specific jumbotrons
------------------------- */
/* supporting docs pages */
.subhead {
  padding-bottom: 0;
  margin-bottom: 9px;
}
.subhead h1 {
  font-size: 54px;
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
/*
.subnav .nav > li > a {
  margin: 0;
  padding-top:    11px;
  padding-bottom: 11px;
  border-left: 1px solid #f5f5f5;
  border-right: 1px solid #e5e5e5;
  -webkit-border-radius: 0;
     -moz-border-radius: 0;
          border-radius: 0;
}
.subnav .nav > .active > a,
.subnav .nav > .active > a:hover {
  padding-left: 13px;
  color: #777;
  background-color: #e9e9e9;
  border-right-color: #ddd;
  border-left: 0;
  -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.05);
     -moz-box-shadow: inset 0 3px 5px rgba(0,0,0,.05);
          box-shadow: inset 0 3px 5px rgba(0,0,0,.05);
}
.subnav .nav > .active > a .caret,
.subnav .nav > .active > a:hover .caret {
  border-top-color: #777;
}
.subnav .nav > li:first-child > a,
.subnav .nav > li:first-child > a:hover {
  border-left: 0;
  padding-left: 12px;
  -webkit-border-radius: 4px 0 0 4px;
     -moz-border-radius: 4px 0 0 4px;
          border-radius: 4px 0 0 4px;
}
.subnav .nav > li:last-child > a {
  border-right: 0;
}
.subnav .dropdown-menu {
  -webkit-border-radius: 0 0 4px 4px;
     -moz-border-radius: 0 0 4px 4px;
          border-radius: 0 0 4px 4px;
}
*/

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



<!--
<div class="subnav navbar-fixed-top">
  <ul class="nav nav-pills">
    <li class="active"><a href="#">Simple Line Chart</a></li>
    <li><a hre="#">Test</a></li>
  </ul>
</div>
-->



<div class="container" style="height:20px">

  <div class="subnav subnav-fixed">
    <div class="subnav-inner">
      <div class="btn-group pull-left" id="loadChart" style="margin:4px 4px 0 12px">
        <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">
          More Charts
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
          <li><a href="#" data-chart="line">Line Chart</a></li>
          <li><a href="#" data-chart="linePlusBar">Line Plus Bar Chart</a></li>
          <li><a href="#" data-chart="discreteBar">Discrete Bar Chart</a></li>
          <li><a href="#" data-chart="multiBarHorizontal">Horizontal Grouped / Stacked Bar Chart</a></li>
          <li><a href="#" data-chart="multiBar">Grouped / Stacked Bar Chart</a></li>
          <li><a href="#" data-chart="scatter">Scatter / Bubble Chart</a></li>
          <li><a href="#" data-chart="stackedArea">Stacked Area Chart</a></li>
        </ul>
      </div>

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

<div class="row-fluid">

<div class="span6" id="previewWrap">

<iframe id="preview">

</iframe>

</div>


<div class="span6" id="codeWrap">

<div>
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
