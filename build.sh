#!/bin/bash
COMPRESSOR=$(which yui-compressor)
cat src/intro.js src/core.js src/tooltip.js src/utils.js src/models/*.js src/outro.js > nv.d3.js
if test -x "$COMPRESSOR" ; then
  $COMPRESSOR --type js -o nv.d3.min.js nv.d3.js
else
  echo "WARNING: nv.d3.min.js is NOT MINIFIED because you don't have the yui-compressor installed!"
  cp nv.d3.js nv.d3.min.js
fi
