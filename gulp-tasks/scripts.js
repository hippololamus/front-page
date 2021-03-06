'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var config = require('../config').browserify;
var files = config.entries;
delete config.entries;
/**
 * Run JavaScript through Browserify
 */
gulp.task('scripts', function() {
  var browserified = transform(function(filename) {
    var b = browserify(filename, config);
    return b.bundle();
  });
  return gulp.src(files)
    .pipe(browserified)
    .pipe(gulp.dest(config.dest));
});
