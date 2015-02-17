var gulp = require('gulp'),
  gutil = require('gulp-util'),
  source = require('vinyl-source-stream'),
  watchify = require('watchify'),
  browserify = require('browserify');

exports.toJs = jsxToJs.bind(null, createBundler());
exports.toJsWatch = jsxToJs.bind(null, createBundler(true));

function jsxToJs(bundler) {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('App.js'))
    .pipe(gulp.dest('./dist'));
}

function createBundler(isDebug) {
  var bundler = browserify('./lib/components/App/App.jsx', {
    cache: {},
    packageCache: {},
    fullPaths: true,
    transform: ['reactify'],
    debug: isDebug
  });

  if (isDebug) {
    bundler = watchify(bundler);
    bundler.on('update', jsxToJs.bind(null, bundler));
    bundler.on('time', function (time) {
      console.log('App.js built in: %dms', time);
    });
  }

  return bundler;
}
