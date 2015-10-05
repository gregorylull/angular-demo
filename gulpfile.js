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

  // browser / server
  var browserSync = require('browser-sync').create();
  var nodemon = require('gulp-nodemon');

  // js
  var concat = require('gulp-concat');

  // css
  var autoprefixer = require('gulp-autoprefixer');
  var concatCSS = require('gulp-concat-css');

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

  paths.css = [
    'public/*.css',
    'public/**/style.css'
  ];

/*-----------------------------------------------------------------------------
    javascript tasks
-----------------------------------------------------------------------------*/

  // javascript tasks
  gulp.task("js", function () {
    return gulp.src(paths.scripts)
      .pipe(concat('app.js'))
      .pipe(gulp.dest('public/build/js'))
      .pipe(browserSync.reload({stream: true}));
  });

/*-----------------------------------------------------------------------------
    CSS tasks
-----------------------------------------------------------------------------*/

  gulp.task('css', function () {
    return gulp.src(paths.css)
      .pipe(concatCSS('app.css'))
      .pipe(gulp.dest('public/build/css'))
      .pipe(browserSync.reload({stream: true}));
  });

/*-----------------------------------------------------------------------------
  
  live reload of browser page upon file modification
    
-----------------------------------------------------------------------------*/

  // start backend server for serving files
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

  // initialize browser-sync
  gulp.task('browser-sync', function () {

    browserSync.init({
      proxy: 'localhost:5000'
    });

    gulp.watch(paths.scripts, ['js']);
    gulp.watch(paths.css, ['css'])

  });

/*-----------------------------------------------------------------------------
    Default
-----------------------------------------------------------------------------*/

  gulp.task('production', ['js', 'css'])

  gulp.task('default', ['js', 'css', 'nodemon', 'browser-sync'], function () {
    gulp.watch('public/build/**/*.*').on('change', browserSync.reload);
    gulp.watch(paths.html).on('change', browserSync.reload);
  });

})();
