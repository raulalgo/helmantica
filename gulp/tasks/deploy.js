'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence'
//import config from '../config';

gulp.task('deploy', ['prod'], function(cb) {

  // Deploy to hosting environment
  cb = cb || function() {};

  global.isProd = true;

  runSequence(['sass', 'imagemin', 'browserify', 'copyFonts', 'copyIndex', 'copyIcons', 'serve'], cb);
});