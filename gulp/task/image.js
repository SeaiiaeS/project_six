import imageMin from 'gulp-imagemin';

export const image = () => {
    return app.gulp.src(app.path.imageFolder)
        .pipe(imageMin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3
        }))
        .pipe(app.gulp.dest(app.path.build.imageFolder))
}