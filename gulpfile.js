// ********************************************
// Import modules
// ********************************************
const gulp = require('gulp');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const runSequence = require('run-sequence');

// ********************************************
// Static Website File Tree
// ********************************************

// pages/**/*.html            All html files (except index.html)
// public/css/**/*.css        All CSS files
// public/files               All other files
// public/images              All image files
// public/js/**/*.js          All JS files
// index.html                 Homepage

// ********************************************
// Gulp Default Task
// ********************************************
gulp.task('default', [
  'clean'            // Delete /dist folder, if present
], () => {
  runSequence(
    'html',         // Minify all HTML files
    [
      'styles',     // Minify all CSS files (in public/css)
      'scripts',    // Minify all JS files (in public/js)
      'cp-files',   // Copy all files (from public/files)
      'cp-images'   // Copy all images (from public/images)
    ]
  );
});

// ********************************************
// Gulp Task Definitions
// ********************************************

// Gulp task to delete dist directory, if present
gulp.task('clean', () => del(['dist']));

// Gulp task to delete node_modules directory (optional)
gulp.task('clean-node', () => del(['node_modules']));

// Gulp task to minify HTML files
gulp.task('html', () => {
  gulp.src(['../**/*.html', '!./node_modules/**'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'));
});

// Gulp task to add prefixes and then minify CSS files
gulp.task('styles', () => {
  const plugins = [
    autoprefixer({ browsers: ['last 1 version'] }),
    cssnano()
  ];
  gulp.src('../public/css/**/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dist/public/css'));
});

// Gulp task to minify Javascript files
gulp.task('scripts', () => {
  gulp.src('../public/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/public/js'))
});

// Gulp task to copy files folder
gulp.task('cp-files', () => {
  gulp.src('../public/files/**/*')
    .pipe(gulp.dest('./dist/public/files'));
});

// Gulp task to copy images folder
gulp.task('cp-images', () => {
  gulp.src('../public/images/**/*')
    .pipe(imageMin())
    .pipe(gulp.dest('./dist/public/images'));
});