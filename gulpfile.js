// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";

//Передаем значения в глобальную переменную
global.app = {
	path: path,
	gulp: gulp

}
//импорт задач
import { copy } from "./gulp/tasks/copy.js";

function watcher() {
	gulp.watch(path.watch.files, copy)
}
const dev = gulp.series(copy, watcher);

//выполнение сценария по умолчанию
gulp.task('default', dev);