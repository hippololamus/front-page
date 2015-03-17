'use strict';

var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function() {
    gulp.watch(config.buildDir.src + config.buildDir.scripts, ['scripts']);
    gulp.watch(config.styles.src, ['styles']);
});
