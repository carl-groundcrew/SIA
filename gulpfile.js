const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('static/scss/*.scss')  
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src('static/js/*.js')  
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "/index.html"
        }
    });
    gulp.watch('static/scss/*.scss', style);
    gulp.watch('static/js/*.js', scripts);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./static/js/*.js').on('change', browserSync.reload);
}

exports.scripts = scripts;
exports.style = style;
exports.watch = watch;