'use strict';

var gulp = require('gulp');
var runSequence = require('gulp-run-sequence');
var requireDir = require('require-dir');


try {
    requireDir('./gulp-tasks');
} catch(e) {
    console.log('Unable to load gulp-tasks directory', e.message, e.stack);
}

/*
    BULK RUN TASKS
 */
gulp.task('default', function(cb_) {
    return runSequence('clean', ['html', 'scripts', 'styles'], cb_);
});
