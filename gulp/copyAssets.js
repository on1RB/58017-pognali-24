import gulp from "gulp";

export default function copyAssets(done) {
  gulp
    .src("source/assets/**/*")
    .pipe(gulp.dest("build"));

  done();
}
