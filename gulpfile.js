import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';


global.app = {
    path:path,
    gulp:gulp,
    plugins:plugins
}

import { clean } from './gulp/task/clean.js';
import { pug } from './gulp/task/pug.js';
import { scss } from './gulp/task/scss.js';
import { browserSync } from './gulp/config/server.js';

const defaultTask = gulp.series(
    clean,
    gulp.parallel(
        pug,
        scss,
        // fonts,
        // images 'watch',
    ),
    gulp.parallel(browserSync)
)

gulp.task('default', defaultTask);