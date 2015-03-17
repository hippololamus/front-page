'use strict';

// Build directory paths
var buildDir = {
    src: 'app/',
    dist: 'dist/',
    scripts: 'scripts/**/**.js',
    html: '**/**.html',
};

var styles = {
    src: buildDir.src + 'styles/**/**.less',
    dest: buildDir.dist + 'styles/'
};

// Webserver config paths
var server = {
    application: buildDir.dist,
    server: { // gulp-webserver config
        port: '3033',
        open: true,
        fallback: 'index.html',
        livereload: true
    }
};

// Browserify configuration
var browserify = {
  // Enable source maps if not defined
  debug: !process.env.PRODUCTION,

  extensions: ['.hbs'],
entries:   buildDir.src + 'scripts/application.js',
dest:       buildDir.dist + 'scripts/',
outputName: 'main.js'
};


module.exports = {
    buildDir: buildDir,
    styles: styles,
    server: server,
    browserify: browserify
};
