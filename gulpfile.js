var
  paths = require('./gulppaths'),
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  livereload = require('gulp-livereload'),
  eslint = require('gulp-eslint'),
  del = require('del'),
  webpack = require('webpack-stream'),
  webpackConfig = require('./webpack.config.js');


// cleaning tasks
gulp.task('clean', function () {
  return del([paths.compiled], {force: true});
});

gulp.task('clean:js', function () {
  return del([paths.compiled  + '/js'], {force: true});
});

gulp.task('clean:sass', function () {
  return del([paths.compiled + '/css'], {force: true});
});


// compile sass files
gulp.task('sass', ['clean:sass', 'lint'], function() {
  return gulp.src([
    paths.sass + '/master.scss',
  ])
  .pipe(sass({
    outputStyle: 'compressed'
  }).on('error', sass.logError))
  .pipe(gulp.dest(paths.compiled + '/css'))
  .pipe(livereload());
});


// compile js
gulp.task('js:dev', ['clean:js', 'lint'], function(callback) {
  return gulp.src('src/entry.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.compiled + '/js'))
    .pipe(livereload());
});


// watch dev task
gulp.task('watch', ['build'], function() {
  livereload.listen({ port: 35729 });
  gulp.watch(paths.js + '/*.js', ['js:dev']);
  gulp.watch(paths.sass + '/*.scss', ['sass']);
});


// eslint
gulp.task('lint', function() {
  return gulp
    .src([
      paths.js + '/*.js',
      '!node_modules/**'
    ])
      // eslint() attaches the lint output to the "eslint" property 
      // of the file object so it can be used by other modules. 
      .pipe(eslint({ configFile: './eslint.json' }))
      .pipe(eslint.format())
      // To have the process exit with an error code (1) on 
      // lint error, return the stream and pipe to failAfterError last. 
      .pipe(eslint.failAfterError());
});

gulp.task('build', ['lint', 'sass', 'js:dev']);