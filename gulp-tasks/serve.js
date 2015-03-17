'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var config = require('../config').server;

gulp.task('serve', ['default', 'watch'], function() {
    return gulp.src(config.application)
        .pipe(webserver(config.server));
});
