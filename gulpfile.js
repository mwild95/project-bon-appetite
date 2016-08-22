// include gulp
var gulp = require('gulp'); 

//include the ng2 compiler plugin
var embedTemplates = require('gulp-inline-ng2-template');
var ts = require('gulp-typescript');

gulp.task('build', function () {
    gulp.src('src/**/*.ts') // also can use *.js files 
        .pipe(embedTemplates({sourceType:'ts'}))
        .pipe(gulp.dest('./compiledTemplates'));

    gulp.src('compiledTemplates/**/*.ts')
    	.pipe(ts({
        	noImplicitAny: true
        }))
        .pipe(gulp.dest('./build'));
        
});

gulp.task('embedTemplates', function () {
	gulp.src('src/**/*.ts')
		.pipe(embedTemplates({sourceType:'ts'}))
		.pipe(gulp.dest('./compiledTemplates'));
});

gulp.task('tsc', function () {
	gulp.src('compiledTemplates/**/*.ts')
    	.pipe(ts({
        	noImplicitAny: true
        }))
        .pipe(gulp.dest('./build'));
});