'use strict';

var gulp = require('gulp');
var config = require('../config').buildDir;

gulp.task('html', function() {
    return gulp.src(config.src + config.html)
        .pipe(gulp.dest(config.dist));
});
