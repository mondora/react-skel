//////////////////
// Dependencies //
//////////////////

var gulp = require("gulp");



//////////////////////////////////
// App files watching functions //
//////////////////////////////////

var watchAppIndex = function () {
	return gulp.watch("app/main.html");
};

var watchAppScripts = function () {
	return gulp.watch("app/**/*.jsx");
};

var watchAppStyles = function () {
	return gulp.watch("app/**/*.scss");
};

var watchAppFavicon = function () {
	return gulp.watch("app/favicon.ico");
};

var watchAppImages = function () {
	return gulp.watch("app/images/**/*.png");
};



/////////////////////////////////////
// Vendor files watching functions //
/////////////////////////////////////

var depsWatcher = null;
var watchDeps = function () {
	if (!depsWatcher) {
		depsWatcher = gulp.watch("deps.json");
	}
	return depsWatcher;
};



////////////
// Export //
////////////

module.exports = {
	appIndex:      watchAppIndex,
	appScripts:    watchAppScripts,
	appStyles:     watchAppStyles,
	appFavicon:    watchAppFavicon,
	appImages:     watchAppImages,
	vendorScripts: watchDeps,
	vendorStyles:  watchDeps,
	vendorFonts:   watchDeps
};
