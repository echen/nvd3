# nvd3 - v0.0.1

***This is the last open source state of NVD3 by Novus Partners.  Novus may be closing source of further development, this may become the initial state of a new open source d3 reusable chart library.

A reusable chart library for d3.JS by Bob Monteverde

Currently in an early stage of development, but will be a very active project.  It may change quite a bit from its current state, but will always try to follow the style in which d3.js was done.


---

If one of [the existing models](https://github.com/novus/nvd3/tree/master/src/models) doesn't meet your needs, fork the project, implement the model and an example using it, send us a pull request, for consideration for inclusion in the project.

---

Minifying your fork:

The Makefile requires [UglifyJS](https://github.com/mishoo/UglifyJS).

The easist way to install is to install via npm. Run `npm install
uglify-js` from your home directory, then add the output from `npm bin`
into your path so that you have access to `uglifyjs` from the command
line (remember to restart your terminal window when adding to the path.)

Once you have `uglifyjs` command available, running `make` from your
fork's root directory will rebuild both `nv.d3.js` and `nv.d3.min.js`.

Without UglifyJS, you won't get the minified version when running make.

**We ask that you DO NOT minify pull requests... 
If you need to minify please build pull request in separate branch, and
merge and minify in yout master.

