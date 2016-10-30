// include gulp
var gulp = require('gulp'); 
var sass = require('gulp-sass');

//include the ng2 compiler plugin
var embedTemplates = require('gulp-inline-ng2-template');
var ts = require('gulp-typescript');

gulp.task('build', function () {
    gulp.src('src/**/*.ts') // also can use *.js files 
        .pipe(embedTemplates({sourceType:'ts'}))
        .pipe(gulp.dest('./app'));

    gulp.src('app/**/*.ts')
    	.pipe(ts({
        	noImplicitAny: true
        }))
        .pipe(gulp.dest('./build'));
        
});

gulp.task('embedTemplates', function () {
	gulp.src('src/**/*.ts')
		.pipe(embedTemplates({sourceType:'ts'}))
		.pipe(gulp.dest('./app'));
});

gulp.task('tsc', function () {
	gulp.src('app/**/*.ts')
    	.pipe(ts({
        	noImplicitAny: true
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('sass', function ( ) {
    gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app'));
    gulp.src('styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
})