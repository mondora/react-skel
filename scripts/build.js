//////////////////
// Dependencies //
//////////////////

var BPromise   = require("bluebird");
var browserify = require("browserify");
var fs         = require("fs");
var gulp       = require("gulp");
var gp         = require("gulp-load-plugins")();
var _          = require("lodash");
var reactify   = require("reactify");
var source     = require("vinyl-source-stream");



//////////////////////////////////
// App files building functions //
//////////////////////////////////

var buildAppIndex = function (target) {
	return new BPromise(function (resolve, reject) {
		gulp.src("app/main.html")
			.pipe(gp.plumber(reject))
			.pipe(gp.preprocess({
				context: {
					TARGET: target
				}
			}))
			.pipe(gp.rename("index.html"))
			.pipe(gulp.dest("builds/" + target + "/"))
			.on("end", resolve);
	});
};

var buildAppScripts = function (target, minify) {
	return new BPromise(function (resolve, reject) {
		browserify("./app/main.jsx")
			.transform(reactify)
			.bundle()
			.on("error", reject)
			.pipe(source("bundle.js"))
			.pipe(gp.plumber(reject))
			.pipe(gp.rename("app.js"))
			.pipe(gp.if(minify, gp.uglify()))
			.pipe(gp.if(minify, gp.rename("app.min.js")))
			.pipe(gulp.dest("builds/" + target + "/assets/js/"))
			.on("end", resolve);
	});
};

var buildAppStyles = function (target, minify) {
	return new BPromise(function (resolve, reject) {
		gulp.src("app/**/*.scss")
			.pipe(gp.plumber(reject))
			.pipe(gp.concat("app.scss"))
			.pipe(gp.sass())
			.pipe(gp.autoprefixer("last 3 version"))
			.pipe(gp.rename("app.css"))
			.pipe(gp.if(minify, gp.minifyCss()))
			.pipe(gp.if(minify, gp.rename("app.min.css")))
			.pipe(gulp.dest("builds/" + target + "/assets/css/"))
			.on("end", resolve);
	});
};

var buildAppFavicon = function (target) {
	return new BPromise(function (resolve, reject) {
		gulp.src("app/favicon.ico")
			.pipe(gp.plumber(reject))
			.pipe(gulp.dest("builds/" + target + "/"))
			.on("end", resolve);
	});
};



/////////////////////////////////////
// Vendor files building functions //
/////////////////////////////////////

var getDeps = function () {
	return JSON.parse(
		fs.readFileSync("deps.json", "utf8")
	);
};

var buildVendorScripts = function (target, minify) {
	return new BPromise(function (resolve, reject) {
		resolve();
		/*
		gulp.src(getDeps().js)
			.pipe(gp.plumber(reject))
			.pipe(gp.concat("vendor.js"))
			.pipe(gp.if(minify, gp.uglify()))
			.pipe(gp.if(minify, gp.rename("vendor.min.js")))
			.pipe(gulp.dest("builds/" + target + "/assets/js/"))
			.on("end", resolve);
		*/
	});
};

var buildVendorStyles = function (target, minify) {
	return new BPromise(function (resolve, reject) {
		gulp.src(getDeps().css)
			.pipe(gp.plumber(reject))
			.pipe(gp.concat("vendor.css"))
			.pipe(gp.if(minify, gp.minifyCss()))
			.pipe(gp.if(minify, gp.rename("vendor.min.css")))
			.pipe(gulp.dest("builds/" + target + "/assets/css/"))
			.on("end", resolve);
	});
};

var buildVendorFonts = function (target) {
	return new BPromise(function (resolve, reject) {
		gulp.src(getDeps().fonts)
			.pipe(gp.plumber(reject))
			.pipe(gulp.dest("builds/" + target + "/assets/fonts/"))
			.on("end", resolve);
	});
};



////////////
// Export //
////////////

module.exports = {
	appIndex:      buildAppIndex,
	appScripts:    buildAppScripts,
	appStyles:     buildAppStyles,
	appFavicon:    buildAppFavicon,
	vendorScripts: buildVendorScripts,
	vendorStyles:  buildVendorStyles,
	vendorFonts:   buildVendorFonts
};
