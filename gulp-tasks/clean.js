'use strict';

var gulp = require('gulp');
var del = require('del');
var config = require('../config').buildDir;

gulp.task('clean', function (cb_) {
    del(config.dist, function(err) {
        if(err && err.code !== 'ENOTEMPTY') { // Err 53 is a ENOTEMPTY which we can ignore
            console.warn('Error reported in cleaning phase', err);
            cb_(err); // Throw that err
        }
        cb_();
    });
});
