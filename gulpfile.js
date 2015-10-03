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

  // initial config
  // paths
  var paths = {};
  paths.scripts = [
      'public/*module.js',
      'public/**/*module.js',
      'public/**/*service.js',
      'public/**/*controller.js',
      'public/**/*directive.js'
    ];

  // javascript tasks
  gulp.task("js", function () {
    return gulp.src(paths.scripts)
      .pipe(concat('app.js'))
      .pipe(gulp.dest('public/build/js'));
  });

  gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({script: 'server.js'}).on('start', function () {
      if (!called) {
        called = true;
        cb();
      }
    });
  });


  gulp.task('default', ['js', 'nodemon'], function () {
    gulp.watch(paths.scripts, ['js']);
  });

})();
