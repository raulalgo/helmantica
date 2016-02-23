'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';


gulp.task('serve', function(){
	connect.server({
		root: './build/index.html',
		port: process.env.PORT || 5000,
		livereload: false
	});
});