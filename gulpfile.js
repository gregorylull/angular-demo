/*
  // what is this...
  a basic gulpfile to demonstrate a simple watch/rebuild process using:
    - nodemon
    - brower sync
    - gulp.watch

  // if real production...
  - create a /gulp directory to separate out tasks and use require(taskname)
  - 
  
*/
(function () {
  'use strict';

  var gulp = require('gulp');
  var autoprefixer = require('gulp-autoprefixer');
  var concat = require('gulp-concat');
  var nodemon = require('gulp-nodemon');
  var browserSync = require('browser-sync').create();

  // initial config
  // paths
  var paths = {};
  paths.scripts = [
      'public/*module.js',
      'public/services/**/*service.js',
      'public/components/**/*module.js',
      'public/components/**/*service.js',
      'public/components/**/*controller.js',
      'public/components/**/*directive.js',
      'public/**/*service.js',
      'public/**/*module.js',
      'public/**/*controller.js',
      'public/**/*directive.js'
    ];

  paths.html = [
    'public/*.html',
    'public/**/*.html'
  ];

  // javascript tasks
  gulp.task("js", function () {
    return gulp.src(paths.scripts)
      .pipe(concat('app.js'))
      .pipe(gulp.dest('public/build/js'))
      .pipe(browserSync.reload({stream: true}));
  });

  gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({
      script: 'server.js',
      ignore: ['public/']
    })
    .on('start', function () {
      if (!called) {
        called = true;
        cb();
      }
    });
  });

  // gulp.task('js-watch', ['js'], browserSync.reload);

  // //live reload of browser page upon file modification
  gulp.task('browser-sync', function () {

    browserSync.init({
      proxy: 'localhost:5000'
    });

    gulp.watch(paths.scripts, ['js']);

  });

  gulp.task('default', ['js', 'nodemon', 'browser-sync'], function () {
    gulp.watch('public/build/**/*.*').on('change', browserSync.reload);
    gulp.watch(paths.html).on('change', browserSync.reload);
  });

})();
