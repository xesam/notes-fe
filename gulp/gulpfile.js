const gulp = require("gulp");
const uglify = require("gulp-uglify");

gulp.task("default", function() {
    console.log("this is gulp");
});

gulp.task("copy", function() {
    gulp.src("./src/scripts/*.js", { base: "src" }).pipe(gulp.dest("./dist"));
});

gulp.task("scripts", function() {
    gulp.src("./src/scripts/*.js", { base: "src" })
        .pipe(uglify())
        .pipe(gulp.dest("./dist"));
});
