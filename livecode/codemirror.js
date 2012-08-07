

var preMarkup = '<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="../src/nv.d3.css"><script type="text/javascript" src="../lib/d3.v2.js"></script><script type="text/javascript" src="../lib/fisheye.js"></script><script type="text/javascript" src="../nv.d3.js"></script></head><body>';
var midMarkup = '<script>var data = ';
var midMarkup2 = ';';
var postMarkup = '</script></body></html>';


var delay;

var editorMarkup = CodeMirror.fromTextArea(document.getElementById('codeMarkup'), {
  mode: 'text/html',
  tabMode: 'indent',
  theme: 'eclipse',
  lineNumbers: true,
  lineWrapping: true,
  keyMap: 'default',
  onChange: function() {
    clearTimeout(delay);
    delay = setTimeout(updatePreview, 300);
  }
});

var editorData = CodeMirror.fromTextArea(document.getElementById('codeData'), {
  mode: 'javascript',
  tabMode: 'indent',
  theme: 'eclipse',
  lineNumbers: true,
  lineWrapping: true,
  keyMap: 'default',
  onChange: function() {
    clearTimeout(delay);
    delay = setTimeout(updatePreview, 300);
  }
});

var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
  mode: 'javascript',
  tabMode: 'indent',
  theme: 'eclipse',
  lineNumbers: true,
  lineWrapping: true,
  keyMap: 'default',
  onChange: function() {
    clearTimeout(delay);
    delay = setTimeout(updatePreview, 300);
  }
});


loadChart('line');


function loadChart(chartName) {
  d3.text(chartName + 'Markup.html', function(text) {
    d3.select('#chartMarkup').classed('active', true);
    editorMarkup.setValue(text);
    //if (Inlet) Inlet(editorMarkup);
    //d3.selectAll('#codeTabsContent .tab-pane.active').classed('active',false);
    //d3.select(d3.select('#codeTabs .active a').attr('href'))
        //.classed('active', false);
    d3.select('#chartMarkup').classed('active',
      d3.select('#codeTabs .active a').attr('href') == '#chartMarkup')

  })

  d3.text(chartName + 'Data.json', function(text) {
    d3.select('#chartData').classed('active', true);
    editorData.setValue(text);
    //if (Inlet) Inlet(editorData);
    //d3.selectAll('#codeTabsContent .tab-pane.active').classed('active',false);
    //d3.select(d3.select('#codeTabs .active a').attr('href'))
        //.classed('active', true);
    d3.select('#chartData').classed('active',
      d3.select('#codeTabs .active a').attr('href') == '#chartData')
  })

  d3.text(chartName + 'Chart.js', function(text) {
    d3.select('#chartCode').classed('active', true);
    editor.setValue(text);
    //if (Inlet) Inlet(editor);
    //d3.selectAll('#codeTabsContent .tab-pane.active').classed('active',false);
    //d3.select(d3.select('#codeTabs .active a').attr('href'))
        //.classed('active', true)
    d3.select('#chartCode').classed('active',
      d3.select('#codeTabs .active a').attr('href') == '#chartCode')
  })
}


$('#loadChart li > a').on('click', function(e) {
  $('#chartTitle').text($(this).text())
  loadChart($(this).data('chart'))
  e.preventDefault();
});


function updatePreview() {
  var previewFrame = document.getElementById('preview');
  var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
  preview.open();
  preview.write(preMarkup + editorMarkup.getValue() + midMarkup + editorData.getValue() + midMarkup2 + editor.getValue() + postMarkup);
  preview.close();
}
setTimeout(updatePreview, 300);


function setKeymap(mode) {
  editor.setOption('keyMap', mode);
  editorData.setOption('keyMap', mode);
  editorMarkup.setOption('keyMap', mode);
}

d3.select('#keymap-default').on('click', function() { setKeymap('default') });
d3.select('#keymap-vim').on('click', function() { setKeymap('vim') });
d3.select('#keymap-emacs').on('click', function() { setKeymap('emacs') });


/*
resizeEditor();
nv.utils.windowResize(resizeEditor);

function resizeEditor() {
  var size = nv.utils.windowSize();

  var preview = d3.select('#previewWrap');
  var code = d3.select('#codeWrap');

  preview
      .style('width', size.width * 1 / 2 + 'px')
      .style('height', size.height - 40 + 'px')

  code
      .style('height', size.height - 40 + 'px')
      .style('width', size.width * 1 / 2 - 20 + 'px')

}
*/
