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
  ["scss/event-four/styles.scss","css/event-four","scss/event-four/*.scss"],
  ["scss/event-five/styles.scss","css/event-five","scss/event-five/*.scss"], 
  ["scss/event-six/styles.scss","css/event-six","scss/event-six/*.scss"],
  ["scss/event-seven/styles.scss","css/event-seven","scss/event-seven/*.scss"],
  ["scss/contactus-one/styles.scss","css/contactus-one","scss/contactus-one/*.scss"],
  ["scss/contactus-two/styles.scss","css/contactus-two","scss/contactus-two/*.scss"],
  ["scss/contactus-three/styles.scss","css/contactus-three","scss/contactus-three/*.scss"],
  ["scss/blog-one/styles.scss","css/blog-one","scss/blog-one/*.scss"],
  ["scss/blog-two/styles.scss","css/blog-two","scss/blog-two/*.scss"],
  ["scss/blog-three/styles.scss","css/blog-three","scss/blog-three/*.scss"],
  ["scss/blog-four/styles.scss","css/blog-four","scss/blog-four/*.scss"],
  ["scss/blog-five/styles.scss","css/blog-five","scss/blog-five/*.scss"],
  ["scss/floater-one/styles.scss","css/floater-one","scss/floater-one/*.scss"],
  ["scss/floater-two/styles.scss","css/floater-two","scss/floater-two/*.scss"],
  ["scss/module-one/styles.scss","css/module-one","scss/module-one/*.scss"],
  ["scss/module-two/styles.scss","css/module-two","scss/module-two/*.scss"],
  ["scss/module-three/styles.scss","css/module-three","scss/module-three/*.scss"],
  ["scss/module-four/styles.scss","css/module-four","scss/module-four/*.scss"],
  ["scss/module-five/styles.scss","css/module-five","scss/module-five/*.scss"],
  ["scss/module-six/styles.scss","css/module-six","scss/module-six/*.scss"],
  ["scss/module-seven/styles.scss","css/module-seven","scss/module-seven/*.scss"],
  ["scss/module-eight/styles.scss","css/module-eight","scss/module-eight/*.scss"],
  ["scss/module-nine/styles.scss","css/module-nine","scss/module-nine/*.scss"],
  ["scss/module-ten/styles.scss","css/module-ten","scss/module-ten/*.scss"],
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