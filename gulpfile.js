var gulp = require('gulp'),
      gutil = require('gulp-util'),
      browserify = require('gulp-browserify'),
      compass = require('gulp-compass'),
      gulpif = require('gulp-if'),
      uglify = require('gulp-uglify'),
      minifyHTML = require('gulp-minify-html'),
      imagemin = require('gulp-imagemin'),
      pngcrush = require('imagemin-pngcrush'),
      concat = require('gulp-concat'),
      livereload = require('gulp-livereload'); //works with chrome extension

var env, jsSources, sassSources, htmlSources, outputDir, sassStyle;

env = process.env.NODE_ENV || "development";

if (env === 'development'){
  outputDir = '/';
  sassStyle = 'expanded';
} else {
  outputDir = 'builds/production/';
  sassStyle = 'compressed';
}
console.log(sassStyle);

jsSources = [
      'scripts/scroller.js',
      'scripts/variables.js',
      'scripts/app.js'
    ];
sassSources = [
      'sass/styles.sass'
];
htmlSources = [outputDir + '*.html'];

// gulp.task('js', function() {
//   gulp.src(jsSources)
//     .pipe(concat('script.js'))
//     .pipe(browserify())
//     .pipe(gulpif(env === 'production', uglify()))
//     .pipe(gulp.dest(outputDir + 'js'))
//     .pipe(livereload())
// });

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'sass',
      image: outputDir + 'images',
      style: sassStyle
    })
    .on('error', gutil.log))
    .pipe(gulp.dest('css/'))
    .pipe(livereload()) //works with chrome extension
});

gulp.task('watch', function() {
  livereload.listen();
  // gulp.watch(jsSources, ['js']);
  gulp.watch('sass/*.sass', ['compass']);
  gulp.watch('/*.html', ['html']);
  gulp.watch('images/*.png', ['images']);
});

gulp.task('html', function() {
  gulp.src('builds/development/*.html')
    .pipe(gulpif(env==='production', minifyHTML()))
    .pipe(gulpif(env==='production', gulp.dest(outputDir)))
    .pipe(livereload())
});

gulp.task('images', function(){
  gulp.src('builds/development/images/*.png')
    .pipe(gulpif(env==='production', imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngcrush()]
    })))
    .pipe(gulpif(env==='production', gulp.dest(outputDir + 'images')))
    .pipe(livereload())
});

gulp.task('default', ['html', 'compass', 'images', 'watch']);
