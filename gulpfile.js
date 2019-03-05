"use strict";
var gulp = require("gulp"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano");

var paths = [
  ["scss/slider-one/styles.scss","css/slider-one","scss/slider-one/*.scss"],
  ["scss/slider-two/styles.scss","css/slider-two","scss/slider-two/*.scss"],
  ["scss/slider-three/styles.scss","css/slider-three","scss/slider-three/*.scss"],
  ["scss/slider-four/styles.scss","css/slider-four","scss/slider-four/*.scss"],
  ["scss/slider-five/styles.scss","css/slider-five","scss/slider-five/*.scss"],
  ["scss/resource-block-one/styles.scss","css/resource-block-one","scss/resource-block-one/*.scss"],
  ["scss/resource-block-two/styles.scss","css/resource-block-two","scss/resource-block-two/*.scss"],
  ["scss/resource-block-three/styles.scss","css/resource-block-three","scss/resource-block-three/*.scss"],
  ["scss/resource-block-four/styles.scss","css/resource-block-four","scss/resource-block-four/*.scss"],
  ["scss/resource-block-five/styles.scss","css/resource-block-five","scss/resource-block-five/*.scss"],
  ["scss/resource-listing-one/styles.scss","css/resource-listing-one","scss/resource-listing-one/*.scss"],
  ["scss/resource-listing-two/styles.scss","css/resource-listing-two","scss/resource-listing-two/*.scss"],
  ["scss/resource-listing-three/styles.scss","css/resource-listing-three","scss/resource-listing-three/*.scss"],
  ["scss/resource-listing-four/styles.scss","css/resource-listing-four","scss/resource-listing-four/*.scss"],
  ["scss/resource-listing-five/styles.scss","css/resource-listing-five","scss/resource-listing-five/*.scss"],
  ["scss/team-one/styles.scss","css/team-one","scss/team-one/*.scss"],
  ["scss/team-two/styles.scss","css/team-two","scss/team-two/*.scss"],
  ["scss/event-one/styles.scss","css/event-one","scss/event-one/*.scss"],
  ["scss/event-two/styles.scss","css/event-two","scss/event-two/*.scss"],
  ["scss/event-three/styles.scss","css/event-three","scss/event-three/*.scss"],
  ["scss/bootstrap-slider/styles.scss","css/bootstrap-slider","scss/bootstrap-slider/*.scss"],
  ["scss/bootstrap-slider-two/styles.scss","css/bootstrap-slider-two","scss/bootstrap-slider-two/*.scss"],
  ["scss/bootstrap-slider-three/styles.scss","css/bootstrap-slider-three","scss/bootstrap-slider-three/*.scss"],
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