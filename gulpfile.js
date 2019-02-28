"use strict";
var gulp = require("gulp"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano");

var paths = [
  ["scss/styles.scss","css/slider-one","scss/slider-one/*.scss"],
  ["scss/styles.scss","css/slider-two","scss/slider-two/*.scss"],
  ["scss/styles.scss","css/slider-three","scss/slider-three/*.scss"],
  ["scss/styles.scss","css/slider-four","scss/slider-four/*.scss"],
  ["scss/styles.scss","css/slider-five","scss/slider-five/*.scss"],
  ["scss/styles.scss","css/bootstrap-slider","scss/bootstrap-slider/*.scss"],
];

function runGulpSass(src,dest,watch) {
  gulp.watch(watch, function() {
    return gulp.src(src)
           .pipe(sass())
           .on("error", sass.logError)
           .pipe(postcss([autoprefixer(), cssnano()]))
           .pipe(gulp.dest(dest))
  });
}

exports.runGulpSass = runGulpSass;

function startGulp() {
  for(var i=0;i<paths.length;i++) {
    runGulpSass(paths[i][0],paths[i][1],paths[i][2]);
  }
}

exports.watch = startGulp;