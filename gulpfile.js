"use strict"; 
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

var paths = [
  ["index/index-scss/style.scss","index/css","index/index-scss/*.scss"],
  ["editor/editor-scss/style.scss","editor/css","editor/editor-scss/*.scss"],
  ["menu-one/menu-scss/style.scss","menu-one/css","menu-one/menu-scss/*.scss"],
  ["menu-two/menu-scss/style.scss","menu-two/css","menu-two/menu-scss/*.scss"],
  ["menu-three/menu-scss/style.scss","menu-three/css","menu-three/menu-scss/*.scss"],
  ["menu-four/menu-scss/style.scss","menu-four/css","menu-four/menu-scss/*.scss"],
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
  ["team-three/team-scss/style.scss","team-three/css","team-three/team-scss/*.scss"],
  ["team-four/team-scss/style.scss","team-four/css","team-four/team-scss/*.scss"],
  ["event-one/event-scss/style.scss","event-one/css","event-one/event-scss/*.scss"],
  ["event-two/event-scss/style.scss","event-two/css","event-two/event-scss/*.scss"],
  ["event-three/event-scss/style.scss","event-three/css","event-three/event-scss/*.scss"],
  ["event-four/event-scss/style.scss","event-four/css","event-four/event-scss/*.scss"],
  ["event-five/event-scss/style.scss","event-five/css","event-five/event-scss/*.scss"],
  ["event-six/event-scss/style.scss","event-six/css","event-six/event-scss/*.scss"],
  ["event-seven/event-scss/style.scss","event-seven/css","event-seven/event-scss/*.scss"],
  ["event-eight/event-scss/style.scss","event-eight/css","event-eight/event-scss/*.scss"],
  ["event-nine/event-scss/style.scss","event-nine/css","event-nine/event-scss/*.scss"],
  ["event-ten/event-scss/style.scss","event-ten/css","event-ten/event-scss/*.scss"],
  ["event-eleven/event-scss/style.scss","event-eleven/css","event-eleven/event-scss/*.scss"],
  ["event-twelve/event-scss/style.scss","event-twelve/css","event-twelve/event-scss/*.scss"],
  ["contactus-one/contactus-scss/style.scss","contactus-one/css","contactus-one/contactus-scss/*.scss"],
  ["contactus-two/contactus-scss/style.scss","contactus-two/css","contactus-two/contactus-scss/*.scss"],
  ["contactus-three/contactus-scss/style.scss","contactus-three/css","contactus-three/contactus-scss/*.scss"],
  ["blog-one/blog-scss/style.scss","blog-one/css","blog-one/blog-scss/*.scss"],
  ["blog-two/blog-scss/style.scss","blog-two/css","blog-two/blog-scss/*.scss"],
  ["blog-three/blog-scss/style.scss","blog-three/css","blog-three/blog-scss/*.scss"],
  ["blog-four/blog-scss/style.scss","blog-four/css","blog-four/blog-scss/*.scss"],
  ["blog-five/blog-scss/style.scss","blog-five/css","blog-five/blog-scss/*.scss"],
  ["blog-six/blog-scss/style.scss","blog-six/css","blog-six/blog-scss/*.scss"],
  ["blog-seven/blog-scss/style.scss","blog-seven/css","blog-seven/blog-scss/*.scss"],
  ["blog-eight/blog-scss/style.scss","blog-eight/css","blog-eight/blog-scss/*.scss"],
  ["blog-nine/blog-scss/style.scss","blog-nine/css","blog-nine/blog-scss/*.scss"],
  ["blog-ten/blog-scss/style.scss","blog-ten/css","blog-ten/blog-scss/*.scss"],
  ["floater-one/floater-scss/style.scss","floater-one/css","floater-one/floater-scss/*.scss"],
  ["floater-two/floater-scss/style.scss","floater-two/css","floater-two/floater-scss/*.scss"],
  ["testimonial-one/testimonial-scss/style.scss","testimonial-one/css","testimonial-one/testimonial-scss/*.scss"],
  ["testimonial-two/testimonial-scss/style.scss","testimonial-two/css","testimonial-two/testimonial-scss/*.scss"],
  ["gallery-one/gallery-scss/style.scss","gallery-one/css","gallery-one/gallery-scss/*.scss"],
  ["footer-one/footer-scss/style.scss","footer-one/css","footer-one/footer-scss/*.scss"],
  ["footer-two/footer-scss/style.scss","footer-two/css","footer-two/footer-scss/*.scss"],
  ["footer-three/footer-scss/style.scss","footer-three/css","footer-three/footer-scss/*.scss"],
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
  ["module-seventyfour/module-scss/style.scss","module-seventyfour/css","module-seventyfour/module-scss/*.scss"],
  ["module-eighteen/module-scss/style.scss","module-eighteen/css","module-eighteen/module-scss/*.scss"],
  ["module-nineteen/module-scss/style.scss","module-nineteen/css","module-nineteen/module-scss/*.scss"],
  ["module-twenty/module-scss/style.scss","module-twenty/css","module-twenty/module-scss/*.scss"],
  ["module-twentyone/module-scss/style.scss","module-twentyone/css","module-twentyone/module-scss/*.scss"],
  ["module-twentytwo/module-scss/style.scss","module-twentytwo/css","module-twentytwo/module-scss/*.scss"],
  ["module-twentythree/module-scss/style.scss","module-twentythree/css","module-twentythree/module-scss/*.scss"],
  ["module-twentyfour/module-scss/style.scss","module-twentyfour/css","module-twentyfour/module-scss/*.scss"],
  ["module-twentyfive/module-scss/style.scss","module-twentyfive/css","module-twentyfive/module-scss/*.scss"],
  ["module-twentysix/module-scss/style.scss","module-twentysix/css","module-twentysix/module-scss/*.scss"],
  ["module-twentyseven/module-scss/style.scss","module-twentyseven/css","module-twentyseven/module-scss/*.scss"],
  ["module-twentyeight/module-scss/style.scss","module-twentyeight/css","module-twentyeight/module-scss/*.scss"],
  ["module-twentynine/module-scss/style.scss","module-twentynine/css","module-twentynine/module-scss/*.scss"],
  ["module-thirty/module-scss/style.scss","module-thirty/css","module-thirty/module-scss/*.scss"],
  ["module-thirtyone/module-scss/style.scss","module-thirtyone/css","module-thirtyone/module-scss/*.scss"],
  ["module-thirtytwo/module-scss/style.scss","module-thirtytwo/css","module-thirtytwo/module-scss/*.scss"],
  ["module-thirtythree/module-scss/style.scss","module-thirtythree/css","module-thirtythree/module-scss/*.scss"],
  ["module-thirtyfour/module-scss/style.scss","module-thirtyfour/css","module-thirtyfour/module-scss/*.scss"],
  ["module-thirtyfive/module-scss/style.scss","module-thirtyfive/css","module-thirtyfive/module-scss/*.scss"],
  ["module-thirtysix/module-scss/style.scss","module-thirtysix/css","module-thirtysix/module-scss/*.scss"],
  ["module-thirtyseven/module-scss/style.scss","module-thirtyseven/css","module-thirtyseven/module-scss/*.scss"],
  ["module-thirtyeight/module-scss/style.scss","module-thirtyeight/css","module-thirtyeight/module-scss/*.scss"],
  ["module-thirtynine/module-scss/style.scss","module-thirtynine/css","module-thirtynine/module-scss/*.scss"],
  ["module-fourtyone/module-scss/style.scss","module-fourtyone/css","module-fourtyone/module-scss/*.scss"],
  ["module-fourtytwo/module-scss/style.scss","module-fourtytwo/css","module-fourtytwo/module-scss/*.scss"],
  ["module-fourtythree/module-scss/style.scss","module-fourtythree/css","module-fourtythree/module-scss/*.scss"],
  ["module-fiftytwo/module-scss/style.scss","module-fiftytwo/css","module-fiftytwo/module-scss/*.scss"],
  ["module-fiftythree/module-scss/style.scss","module-fiftythree/css","module-fiftythree/module-scss/*.scss"],
  ["module-fiftyfour/module-scss/style.scss","module-fiftyfour/css","module-fiftyfour/module-scss/*.scss"],
  ["module-seventy/module-scss/style.scss","module-seventy/css","module-seventy/module-scss/*.scss"],
  ["module-seventyone/module-scss/style.scss","module-seventyone/css","module-seventyone/module-scss/*.scss"],
  ["errorpage-one/errorpage-scss/style.scss","errorpage-one/css","errorpage-one/errorpage-scss/*.scss"],
  ["errorpage-two/errorpage-scss/style.scss","errorpage-two/css","errorpage-two/errorpage-scss/*.scss"],
  ["login-one/login-scss/style.scss","login-one/css","login-one/login-scss/*.scss"],
  ["form-one/form-scss/style.scss","form-one/css","form-one/form-scss/*.scss"],
  ["form-two/form-scss/style.scss","form-two/css","form-two/form-scss/*.scss"],
  ["button/button-scss/style.scss","button/css","button/button-scss/*.scss"],
  ["emailer-view-source/emailer-view-source-scss/style.scss","emailer-view-source/css","emailer-view-source/emailer-view-source-scss/*.scss"],
  ["emailer-module-one/emailer-module-one-scss/style.scss","emailer-module-one/css","emailer-module-one/emailer-module-one-scss/*.scss"],
  ["emailer-module-two/emailer-module-two-scss/style.scss","emailer-module-two/css","emailer-module-two/emailer-module-two-scss/*.scss"],
  ["emailer-module-three/emailer-module-three-scss/style.scss","emailer-module-three/css","emailer-module-three/emailer-module-three-scss/*.scss"],
];

function runGulpSass(src, dest, watch) {
	console.log(`Watching files: ${watch}`);
	gulp.watch(watch, function () {
		console.log(`Processing file: ${src}`);
		return gulp
			.src(src)
			.pipe(sass().on("error", sass.logError))
			.pipe(postcss([autoprefixer(), cssnano()]))
			.pipe(gulp.dest(dest))
			.on("error", function (error) {
				console.error(`Error: ${error.message}`);
			});
	});
}

function startGulp() {
	for (let i = 0; i < paths.length; i++) {
		runGulpSass(paths[i][0], paths[i][1], paths[i][2]);
	}
}

gulp.task("default", startGulp);