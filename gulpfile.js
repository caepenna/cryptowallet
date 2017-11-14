var gulp =  require('gulp');
var sass = require('gulp-sass');
var slim = require('gulp-slim');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

gulp.task('sass', function() {
  return gulp.src('./src/style/**/*.sass')
    .pipe(plumber( { errorHandler: function(error) {
      notify.onError({
        title: "Gulp error in "+ error.plugin,
        message: error.toString()
      })(error);
    }}))
    .pipe(sass( {
      includePaths: ['./src/style'],
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('./style'))
});

gulp.task('sass-minified', function() {
  return gulp.src('./src/style/**/*.sass')
    .pipe(plumber( { errorHandler: function(error) {
      notify.onError({
        title: "Gulp error in "+ error.plugin,
        message: error.toString()
      })(error);
    }}))
    .pipe(sass( {
      includePaths: ['./src/style'],
      outputStyle: 'expanded'
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./style'))
});

gulp.task('slim', function() {
  return gulp.src('./src/view/*.slim')
    .pipe(plumber())
    .pipe(slim({ pretty: true}))
    .pipe(gulp.dest('./'))
});

gulp.task('uglify', function() {
  return gulp.src('./src/js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
});

gulp.task('watch', function() {
  gulp.watch('./src/style/**/*.sass', ['sass']);
  gulp.watch('./src/view/**/*.slim', ['slim']);
});

gulp.task('default', ['sass', 'slim', 'watch'] )

gulp.task('release', ['sass-minified', 'uglify', 'slim', 'watch'] )

