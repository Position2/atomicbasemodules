"use strict";
var gulp = require("gulp"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano");

var paths = [
  ["slider-one/slider-scss/style.scss","slider-one/css","slider-one/slider-scss/*.scss"],
  ["slider-two/slider-scss/style.scss","slider-two/css","slider-two/slider-scss/*.scss"],
  ["slider-three/slider-scss/style.scss","slider-three/css","slider-three/slider-scss/*.scss"],
  ["slider-four/slider-scss/style.scss","slider-four/css","slider-four/slider-scss/*.scss"],
  ["slider-five/slider-scss/style.scss","slider-five/css","slider-five/slider-scss/*.scss"],
  ["slider-six/slider-scss/style.scss","slider-six/css","slider-six/slider-scss/*.scss"],
  ["event-one/event-scss/style.scss","event-one/css","event-one/event-scss/*.scss"],
  ["event-two/event-scss/style.scss","event-two/css","event-two/event-scss/*.scss"],
  ["event-three/event-scss/style.scss","event-three/css","event-three/event-scss/*.scss"],
  ["event-four/event-scss/style.scss","event-four/css","event-four/event-scss/*.scss"],
  ["event-five/event-scss/style.scss","event-five/css","event-five/event-scss/*.scss"],
  ["event-six/event-scss/style.scss","event-six/css","event-six/event-scss/*.scss"],
  ["event-seven/event-scss/style.scss","event-seven/css","event-seven/event-scss/*.scss"],
  ["contactus-one/contactus-scss/style.scss","contactus-one/css","contactus-one/contactus-scss/*.scss"],
  ["contactus-two/contactus-scss/style.scss","contactus-two/css","contactus-two/contactus-scss/*.scss"],
  ["contactus-three/contactus-scss/style.scss","contactus-three/css","contactus-three/contactus-scss/*.scss"],
  ["blog-one/blog-scss/style.scss","blog-one/css","blog-one/blog-scss/*.scss"],
  ["blog-two/blog-scss/style.scss","blog-two/css","blog-two/blog-scss/*.scss"],
  ["blog-three/blog-scss/style.scss","blog-three/css","blog-three/blog-scss/*.scss"],
  ["blog-four/blog-scss/style.scss","blog-four/css","blog-four/blog-scss/*.scss"],
  ["blog-five/blog-scss/style.scss","blog-five/css","blog-five/blog-scss/*.scss"],
  ["floater-one/floater-scss/style.scss","floater-one/css","floater-one/floater-scss/*.scss"],
  ["floater-two/floater-scss/style.scss","floater-two/css","floater-two/floater-scss/*.scss"],
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