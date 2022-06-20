import gulpPug from 'gulp-pug';

export const pug = () => {
    return app.gulp.src(app.path.src.pug)
        .pipe(app.plugins.gulpPlumber({
            errorHandler: app.plugins.gulpNotify.onError(err => {
                return {
                    title: 'pug error',
                    message: err.message
                }
            })
        }))
        .pipe(gulpPug({
            pretty: true
        }))
        .pipe(app.gulp.dest(app.path.build.files))
        .pipe(app.plugins.browserSync.stream())
}