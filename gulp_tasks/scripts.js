const gulp = require('gulp');
const eslint = require('gulp-eslint');

const conf = require('../conf/gulp.conf');

gulp.task('scripts', scripts);

function scripts() {
  return gulp.src(conf.path.src('**/*.js'), {base: 'src'})
    .pipe(eslint())
    .pipe(eslint.format())

    .pipe(gulp.dest(conf.path.tmp()));
}
