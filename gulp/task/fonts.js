export const fonts = () => {
    return app.gulp.src(app.path.fonts.src)
        .pipe(app.gulp.dest(app.path.build.fonts))
    }