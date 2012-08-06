

var preMarkup = '<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="../src/nv.d3.css"><script type="text/javascript" src="../lib/d3.v2.js"></script><script type="text/javascript" src="../nv.d3.js"></script></head><body>';
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

d3.text('stackedAreaMarkup.html', function(text) {
  editorMarkup.setValue(text);
  d3.select('#chartMarkup').classed('active', false);
})

d3.text('stackedAreaData.json', function(text) {
  editorData.setValue(text);
  d3.select('#chartData').classed('active', false);
})

d3.text('stackedAreaChart.js', function(text) {
  editor.setValue(text);
})


function updatePreview() {
  var previewFrame = document.getElementById('preview');
  var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
  preview.open();
  preview.write(preMarkup + editorMarkup.getValue() + midMarkup + editorData.getValue() + midMarkup2 + editor.getValue() + postMarkup);
  preview.close();
}
setTimeout(updatePreview, 300);

var vimMode = false;

d3.select('#vim-mode')
    .on('click', function() {
      vimMode = !vimMode;
      editor.setOption('keyMap', vimMode ? 'vim' : 'default');
      editorData.setOption('keyMap', vimMode ? 'vim' : 'default');
      editorMarkup.setOption('keyMap', vimMode ? 'vim' : 'default');
      d3.select(this).select('.status').text(vimMode ? 'On' : 'Off');
      d3.event.preventDefault();
    });


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
