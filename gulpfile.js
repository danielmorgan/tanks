'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
    	.pipe(autoprefixer({
    		browsers: ['last 2 version'],
    		cascade: false
		}))
        .pipe(gulp.dest('./src/'));
});

gulp.task('default', ['sass']);

gulp.task('watch', function() {
    gulp.watch('./src/**/*.scss', ['sass'])
});