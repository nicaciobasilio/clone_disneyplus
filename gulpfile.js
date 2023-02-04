const GULP = require('gulp');
const SASS = require('gulp-sass')(require('sass'));

function styles() {
    return GULP.src('./src/styles/*.scss')
        .pipe(SASS({outputStyle: 'compressed'}))
        .pipe(GULP.dest('./dist/css'))
}


exports.default = styles;
exports.watch = function () {
    GULP.watch('./src/styles/*.scss', GULP.parallel(styles))
};