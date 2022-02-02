import serve, { startProject } from "./gulp/serve.js";
import { optimizeImages } from "./gulp/optimizeImages.js";
import { createWebp } from "./gulp/compileWebP.js";
import { svg } from "./gulp/compileSvg.js";
import { clean } from "./gulp/clean.js";
import { scripts } from "./gulp/compileJs.js";
import gulp from "gulp";

export const build = gulp.series(clean, startProject, scripts, optimizeImages, svg, createWebp);
export default serve;
