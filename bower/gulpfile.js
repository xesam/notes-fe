const gulp = require("gulp");
const wiredep = require("wiredep").stream;

function build_bower(cb) {
    gulp.src("src/*.html")
        .pipe(wiredep())
        .pipe(gulp.dest("dist"));
    cb();
}

gulp.task("default", gulp.series(build_bower));
