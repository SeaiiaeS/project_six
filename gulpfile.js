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
import { image } from './gulp/task/image.js';
import { fonts } from './gulp/task/fonts.js';
import { browserSync } from './gulp/config/server.js';

gulp.task('watch', () => {
    gulp.watch(app.path.watch.pug, pug);
    gulp.watch(app.path.watch.scss, scss);
    gulp.watch(app.path.watch.image, image);
    gulp.watch(app.path.watch.fonts, fonts);
})

const defaultTask = gulp.series(
    clean,
    gulp.parallel(
        pug,
        scss,
        fonts,
        image
    ),
    gulp.parallel('watch' , browserSync)
)

gulp.task('default', defaultTask);