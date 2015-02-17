var gulp = require('gulp'),
  nodemon = require('gulp-nodemon');

exports.start = start;

function start() {
  var config = {
    script: 'server.js',
    watch: ['server.js', 'dist/**/*.js']
  };
  return nodemon(config);
}
