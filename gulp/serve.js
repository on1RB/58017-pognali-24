import gulp from "gulp";
import browser from "browser-sync";
import compilePug from "./compilePug.js";
import copyAssets from "./copyAssets.js";
import compileLess from './compileLess.js'

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
}

export const startProject = gulp.series(compilePug, copyAssets, compileLess)
export default gulp.series(startProject, initServer, watcher);
