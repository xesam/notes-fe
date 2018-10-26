const gulp = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const sass = require("gulp-sass");
const minifyCss = require("gulp-cssnano");
const prefix = require("gulp-autoprefixer");

gulp.task("default", function() {
    console.log("this is default task");
});

gulp.task("copy", function() {
    gulp.src("src/scripts/*.js", { base: "src" }).pipe(gulp.dest("dist"));
});

gulp.task("scripts", function() {
    gulp.src("src/scripts/*.js")
        .pipe(concat("bundle.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/scripts"));
});

gulp.task("styles", function() {
    gulp.src("src/styles/*.scss")
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(prefix())
        .pipe(gulp.dest("dist/styles"));
});
