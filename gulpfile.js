const GULP = require('gulp');
const SASS = require('gulp-sass')(require('sass'));
const IMAGEMIN = require('gulp-imagemin');

function styles() {
    return GULP.src('./src/styles/*.scss')
        .pipe(SASS({outputStyle: 'compressed'}))
        .pipe(GULP.dest('./dist/css'))
}

function images() {
    return GULP.src('./src/images/**/*')
        .pipe(IMAGEMIN())
        .pipe(GULP.dest('./dist/images'))
}

exports.default = GULP.parallel(styles, images);
exports.watch = function () {
    GULP.watch('./src/styles/*.scss', GULP.parallel(styles))
};