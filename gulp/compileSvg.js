import gulp from "gulp";
import svgo from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import rename from "gulp-rename";

export const svg = () =>
  gulp.src(['source/img/*.svg', '!source/img/*.svg'])
    .pipe(svgo())
    .pipe(gulp.dest('build/img'));

export const sprite = () => {
  return gulp.src('source/icons/*.svg')
    .pipe(svgo())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'));
}
