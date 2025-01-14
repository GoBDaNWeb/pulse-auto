import gulp from "gulp";

import { path } from "./gulp/config/path.js";

import { plugins } from "./gulp/config/plugins.js";

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { html } from "./gulp/tasks/html.js";
import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
};

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  // gulp.watch(path.watch.sass, sass);
  // gulp.watch(path.watch.scss, sass);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
//const fonts = gulp.series(otfToTtf);

// Основные задачи
const mainTasks = gulp.series(
  fonts,
  gulp.parallel(fonts, copy, html, scss, js, images)
);

// Постороение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

// экспорт сценариев
export { dev };
export { build };

// Выполнение сценарий по умолчанию
gulp.task("default", dev);

// spawn('gulp', [], { stdio: 'inherit'});
// process.exit();

process.on("SIGINT", function () {
  setTimeout(function () {
    gutil.log(gutil.colors.red("Successfully closed " + process.pid));
    process.exit(1);
  }, 500);
});
