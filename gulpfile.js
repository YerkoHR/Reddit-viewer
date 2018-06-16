var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var inject = require('gulp-inject');

var paths = {
  sass: ['./src/components/**/*.scss'],
};

// Compile and minify our master stylesheet.
gulp.task('sass', function(done) {
  gulp.src('./src/scss/stylesheet.scss')
  .pipe(sass())
  .on('error', sass.logError)
  .pipe(gulp.dest('./src/css')) 
  .pipe(cleanCss({keepSpecialComments: 0}))
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest('./src/css'))
  .on('end', done);
});

// Collect and create imports for all scss in our project.
gulp.task('loadSass', function(){
  var sass =  gulp.src(paths.sass, {read: false})
 
  var sassOptions = {
    addRootSlash: false,
    addPrefix: '.',
    transform: function (filepath) {
      return '@import "' + filepath + '";';
    }
  }

  gulp.src('./src/scss/stylesheet.scss')
  .pipe(inject(sass, sassOptions))
  .pipe(gulp.dest('./src/scss'))
})

// Watches for changes and compiles our scss files
gulp.task('watch', ['sass'], function() {
  gulp.watch([paths.sass], ['sass']);
});



