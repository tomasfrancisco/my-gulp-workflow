var config = require('./config.json'),
    gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    sourcemaps = require('gulp-sourcemaps');

var sassOptions = {
    emitCompileError: true,
    sourcemap: true,
    style: 'expanded'
};

gulp.task('styles', function() {
  return sass(config.StyleInputFiles, sassOptions)
    .on('error', sass.logError)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest(config.StyleOutputFolder))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest(config.StyleOutputFolder))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {
  return gulp.src(config.ScriptInputFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(config.ScriptOutputFolder))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(config.ScriptOutputFolder))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() {
  return gulp.src(config.ImageInputFiles)
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest(config.ImageOutputFolder))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function() {
  return del([config.StyleOutputFolder, config.ScriptOutputFolder, config.ImageOutputFolder]);
});

gulp.task('watch', function() {

  gulp.watch(config.StyleInputFiles, ['styles']);

  gulp.watch(config.ScriptInputFiles, ['scripts']);

  gulp.watch(config.ImageInputFiles, ['images']);

  livereload.listen();

  gulp.watch([config.OutputFilesToLiveReload]).on('change', livereload.changed);
});

gulp.task('default', ['clean'], function() {
  gulp.start('watch');
});
