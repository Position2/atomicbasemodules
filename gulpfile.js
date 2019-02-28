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
  ["scss/styles.scss","css/resource-block-one","scss/resource-block-one/*.scss"],
  ["scss/styles.scss","css/resource-block-two","scss/resource-block-two/*.scss"],
  ["scss/styles.scss","css/resource-block-three","scss/resource-block-three/*.scss"],
  ["scss/styles.scss","css/resource-block-four","scss/resource-block-four/*.scss"],
  ["scss/styles.scss","css/resource-block-five","scss/resource-block-five/*.scss"],
  ["scss/styles.scss","css/resource-listing-one","scss/resource-listing-one/*.scss"],
  ["scss/styles.scss","css/resource-listing-two","scss/resource-listing-two/*.scss"],
  ["scss/styles.scss","css/resource-listing-three","scss/resource-listing-three/*.scss"],
  ["scss/styles.scss","css/resource-listing-four","scss/resource-listing-four/*.scss"],
  ["scss/styles.scss","css/resource-listing-five","scss/resource-listing-five/*.scss"],
  ["scss/styles.scss","css/team-one","scss/team-one/*.scss"],
  ["scss/styles.scss","css/team-two","scss/team-two/*.scss"],
  ["scss/styles.scss","css/event-one","scss/event-one/*.scss"],
  ["scss/styles.scss","css/event-two","scss/event-two/*.scss"],
  ["scss/styles.scss","css/event-three","scss/event-three/*.scss"],
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