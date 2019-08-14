"use strict";
var gulp = require("gulp"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano");

var paths = [
  ["menu-one/menu-scss/style.scss","menu-one/css","menu-one/menu-scss/*.scss"],
  ["menu-one/menu-scss/style.scss","menu-two/css","menu-two/menu-scss/*.scss"],
  ["menu-one/menu-scss/style.scss","menu-three/css","menu-three/menu-scss/*.scss"],
  ["slider-one/slider-scss/style.scss","slider-one/css","slider-one/slider-scss/*.scss"],
  ["slider-two/slider-scss/style.scss","slider-two/css","slider-two/slider-scss/*.scss"],
  ["slider-three/slider-scss/style.scss","slider-three/css","slider-three/slider-scss/*.scss"],
  ["slider-four/slider-scss/style.scss","slider-four/css","slider-four/slider-scss/*.scss"],
  ["slider-five/slider-scss/style.scss","slider-five/css","slider-five/slider-scss/*.scss"],
  ["slider-six/slider-scss/style.scss","slider-six/css","slider-six/slider-scss/*.scss"],
  ["slider-seven/slider-scss/style.scss","slider-seven/css","slider-seven/slider-scss/*.scss"],
  ["resource-one/resource-scss/style.scss","resource-one/css","resource-one/resource-scss/*.scss"],
  ["resource-two/resource-scss/style.scss","resource-two/css","resource-two/resource-scss/*.scss"],
  ["resource-three/resource-scss/style.scss","resource-three/css","resource-three/resource-scss/*.scss"],
  ["resource-four/resource-scss/style.scss","resource-four/css","resource-four/resource-scss/*.scss"],
  ["resource-five/resource-scss/style.scss","resource-five/css","resource-five/resource-scss/*.scss"],
  ["resource-listing-one/resource-listing-scss/style.scss","resource-listing-one/css","resource-listing-one/resource-listing-scss/*.scss"],
  ["resource-listing-two/resource-listing-scss/style.scss","resource-listing-two/css","resource-listing-two/resource-listing-scss/*.scss"],
  ["resource-listing-three/resource-listing-scss/style.scss","resource-listing-three/css","resource-listing-three/resource-listing-scss/*.scss"],
  ["resource-listing-four/resource-listing-scss/style.scss","resource-listing-four/css","resource-listing-four/resource-listing-scss/*.scss"],
  ["resource-listing-five/resource-listing-scss/style.scss","resource-listing-five/css","resource-listing-five/resource-listing-scss/*.scss"],
  ["team-one/team-scss/style.scss","team-one/css","team-one/team-scss/*.scss"],
  ["team-two/team-scss/style.scss","team-two/css","team-two/team-scss/*.scss"],
  ["event-one/event-scss/style.scss","event-one/css","event-one/event-scss/*.scss"],
  ["event-two/event-scss/style.scss","event-two/css","event-two/event-scss/*.scss"],
  ["event-three/event-scss/style.scss","event-three/css","event-three/event-scss/*.scss"],
  ["event-four/event-scss/style.scss","event-four/css","event-four/event-scss/*.scss"],
  ["event-five/event-scss/style.scss","event-five/css","event-five/event-scss/*.scss"],
  ["event-six/event-scss/style.scss","event-six/css","event-six/event-scss/*.scss"],
  ["event-seven/event-scss/style.scss","event-seven/css","event-seven/event-scss/*.scss"],
  ["event-eight/event-scss/style.scss","event-eight/css","event-eight/event-scss/*.scss"],
  ["event-nine/event-scss/style.scss","event-nine/css","event-nine/event-scss/*.scss"],
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
  ["testimonial-one/testimonial-scss/style.scss","testimonial-one/css","testimonial-one/testimonial-scss/*.scss"],
  ["gallery-one/gallery-scss/style.scss","gallery-one/css","gallery-one/gallery-scss/*.scss"],
  ["module-one/module-scss/style.scss","module-one/css","module-one/module-scss/*.scss"],
  ["module-two/module-scss/style.scss","module-two/css","module-two/module-scss/*.scss"],
  ["module-one/module-scss/style.scss","module-one/css","module-one/module-scss/*.scss"],
  ["module-three/module-scss/style.scss","module-three/css","module-three/module-scss/*.scss"],
  ["module-four/module-scss/style.scss","module-four/css","module-four/module-scss/*.scss"],
  ["module-five/module-scss/style.scss","module-five/css","module-five/module-scss/*.scss"],
  ["module-six/module-scss/style.scss","module-six/css","module-six/module-scss/*.scss"],
  ["module-seven/module-scss/style.scss","module-seven/css","module-seven/module-scss/*.scss"],
  ["module-eight/module-scss/style.scss","module-eight/css","module-eight/module-scss/*.scss"],
  ["module-nine/module-scss/style.scss","module-nine/css","module-nine/module-scss/*.scss"],
  ["module-ten/module-scss/style.scss","module-ten/css","module-ten/module-scss/*.scss"],
  ["module-eleven/module-scss/style.scss","module-eleven/css","module-eleven/module-scss/*.scss"],
  ["module-twelve/module-scss/style.scss","module-twelve/css","module-twelve/module-scss/*.scss"],
  ["module-thirteen/module-scss/style.scss","module-thirteen/css","module-thirteen/module-scss/*.scss"],
  ["module-fourteen/module-scss/style.scss","module-fourteen/css","module-fourteen/module-scss/*.scss"],
  ["module-fifteen/module-scss/style.scss","module-fifteen/css","module-fifteen/module-scss/*.scss"],
  ["module-sixteen/module-scss/style.scss","module-sixteen/css","module-sixteen/module-scss/*.scss"],
  ["module-seventeen/module-scss/style.scss","module-seventeen/css","module-seventeen/module-scss/*.scss"],
  ["module-eighteen/module-scss/style.scss","module-eighteen/css","module-eighteen/module-scss/*.scss"],
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