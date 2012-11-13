NVd3 - reusable chart library for d3.js
-----------------------------------------

***This was created from the last open source state of NVD3 by Novus Partners.  It was created from a branch by https://github.com/GerHobbelt  This organization was created to allow development to continue.  

If you are interested in participating, please send a pull-request, anyone that is commited will be added as an admin to the org. 

Why not Fork nvd3?
-------------------------------------
When a project is abandoned by the original creator on Github, it creates all kinds of issues that prevent forward progress. There is no central place to submit issues, people googling/searching find the old dead repository and "Star" that such that no-one finds the maintained version.  This is an attempt to create a maintained version.  


A reusable chart library for d3.JS by Bob Monteverde


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

