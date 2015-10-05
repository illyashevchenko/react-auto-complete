/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    eslint = require('gulp-eslint');


gulp.task('lint', () => {
    gulp.src('./src/**/*.jsx')
        .pipe(eslint())
        .pipe(eslint.format());
});


gulp.task('build', function () {
    browserify({
        entries: './src/main.jsx',
        extensions: ['.jsx'],
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source('auto-complete.js'))
        .pipe(gulp.dest('dist'));
});


gulp.task('default', ['build', 'lint'], function () {
    gulp.watch('./src/**/*.jsx', ['build', 'lint']);
});