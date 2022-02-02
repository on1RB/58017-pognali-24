import gulp from "gulp";
import browser from "browser-sync";
import compilePug from "./compilePug.js";
import copyAssets from "./copyAssets.js";
import compileLess from './compileLess.js'
import { sprite } from "./compileSvg.js";
import { copyImages } from "./optimizeImages.js";
import { scripts } from "./compileJs.js";

function streamStyles() {
  return compileLess().pipe(browser.stream())
}

function initServer(done) {
  browser.init({
    server: {
      baseDir: "build",
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

function reload(done) {
  browser.reload();
  done();
}

function watcher() {
  gulp.watch(
    ["source/pages/**/*.pug", "source/mock/data.json"],
    gulp.series(compilePug, reload)
  );
  gulp.watch("source/assets/**/*", gulp.series(copyAssets, reload));
  gulp.watch('source/less/**/*.less', streamStyles);
  gulp.watch('source/js/*.js', gulp.series(scripts, reload));
  gulp.watch('source/img/**/*', gulp.series(copyImages, reload));
  gulp.watch("source/icons/*.svg", gulp.series(sprite, reload));
}

export const startProject = gulp.series(compilePug, copyAssets, compileLess, sprite, scripts)
export default gulp.series(startProject, copyImages, initServer, watcher);
