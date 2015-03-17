'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var config = require('../config').browserify;

/**
 * Run JavaScript through Browserify
 */
gulp.task('scripts', function() {
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });

  return gulp.src(config.entries)
    .pipe(browserified)
    .pipe(gulp.dest(config.dest));
});
