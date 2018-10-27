const gulp = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const sass = require("gulp-sass");
const minifyCss = require("gulp-cssnano");
const prefix = require("gulp-autoprefixer");
const connect = require("gulp-connect");
const del = require("del");

gulp.task("default", function(cb) {
    console.log("this is default task");
    cb();
});

gulp.task("build:clean", function() {
    return del(["dist"]);
});

gulp.task("copy", function() {
    gulp.src("src/scripts/*.js", { base: "src" }).pipe(gulp.dest("dist"));
});

function build_styles(cb) {
    gulp.src("src/styles/*.scss")
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(prefix())
        .pipe(gulp.dest("dist/styles"));
    cb();
}

function build_html(cb) {
    gulp.src("src/*.html").pipe(gulp.dest("dist"));
    cb();
}

function build_scripts(cb) {
    gulp.src("src/scripts/*.js")
        .pipe(concat("bundle.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/scripts"));
    cb();
}

function live_watch(cb) {
    gulp.watch("src/*.html", build_html);
    gulp.watch("src/styles/*.scss", build_styles);
    gulp.watch("src/scripts/*.js", build_scripts);
    // gulp.watch("dist/*.html", build_html);
    cb();
}

function live_reload(cb) {
    console.log("reload..............");
    gulp.src("dist/**/*.html").pipe(connect.reload());
    cb();
}

function start_server(cb) {
    connect.server({
        root: "dist",
        livereload: true,
        port: 8030
    });
    cb();
}

gulp.task(
    "dev",
    gulp.series(
        "build:clean",
        gulp.parallel(
            build_styles,
            build_scripts,
            build_html,
            start_server,
            live_watch
        )
    )
);
