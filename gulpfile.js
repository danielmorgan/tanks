var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');

function compile(watch) {
  var bundler = watchify(
    browserify(
      './src/js/index.js',
      { debug: true }
    )
    .transform(babelify, {presets: ["es2015"]})
  );

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./src'));
    console.log('-> bundling...');
  }

  if (watch) {
    bundler.on('update', function() {
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
};

gulp.task('sass', function() {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
           browsers: ['last 2 version'],
           cascade: false
        }))
        .pipe(gulp.dest('./src/'));
});

gulp.task('default', ['sass'], function() {
    return compile();
});
gulp.task('watch', function() {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
    return watch();
});
