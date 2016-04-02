'use strict';

var gulp = require('gulp');
var webpack = require('webpack-stream');
var sass = require('gulp-sass');

gulp.task('default', function() {
  return gulp.src('./js/tweet_avg_chart.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('./chart/'));
});

gulp.task('sass', function () {
  return gulp.src('./css/tweet_avg_chart_style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./chart'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./css/tweet_avg_chart_style.scss', ['sass']);
});
