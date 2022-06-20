import imageMin from 'gulp-imagemin';
import webp from 'gulp-webp';

export const image = () => {
    return app.gulp.src(app.path.imageFolder)
        .pipe(app.plugins.gulpPlumber({
            errorHandler: app.plugins.gulpNotify.onError(err => {
                return {
                title: 'image error',
                message: err.message
                }
            })     
        }))
        .pipe(app.plugins.gulpNewer(app.path.build.imageFolder))
        .pipe(webp())
        .pipe(imageMin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3,
        }))
        .pipe(app.gulp.dest(app.path.build.imageFolder))
        .pipe(app.plugins.browserSync.stream());
}