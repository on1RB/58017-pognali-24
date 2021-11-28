import gulp from "gulp";
import pug from "gulp-pug";
import BEM from "gulp-pugbem";
import fs from "fs";
import data from "gulp-data";

export default function compilePug() {
  return gulp
    .src("source/pages/*.pug")
    .pipe(data(JSON.parse(fs.readFileSync("source/mock/data.json"))))
    .pipe(
      pug({
        pretty: true,
        plugins: [BEM],
      })
    )
    .pipe(gulp.dest("build/"));
}
