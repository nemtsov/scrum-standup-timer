var gulp = require('gulp'),
  sass = require('gulp-sass');

exports.toCss = sassToCss;
exports.toCssWatch = sassToCssWatch;

function sassToCss() {
  return gulp.src('./lib/components/App/App.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist'));
}

function sassToCssWatch() {
  return gulp.watch('./lib/components/**/*.scss', sassToCss);
}
