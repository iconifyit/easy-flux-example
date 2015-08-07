// gulpfile.js
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
 
gulp.task('build', function () {
  browserify({
    entries: 'app.js',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});
 
gulp.task('default', ['build']);

gulp.task('watch', function () {
 	gulp.watch("./*.js", ['default']);
 	gulp.watch("./Components/*.jsx", ['default']);
 	gulp.watch("./Dispatchers/*.js", ['default']);
 	gulp.watch("./Stores/*.js", ['default']);
});