'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var config = require('../config').styles;

gulp.task('styles', function() {
    return gulp.src(config.src)
        .pipe(less())
        .pipe(gulp.dest(config.dest));
});
