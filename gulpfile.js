import compilePug from "./gulp/compilePug.js";
import serve from "./gulp/serve.js";
import copyAssets from "./gulp/copyAssets.js";

export const pug = compilePug;
export default serve;
export const copy = copyAssets;
