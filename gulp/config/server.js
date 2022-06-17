export const browserSync = () => {
    app.plugins.browserSync.init({
        server: {
            baseDir: './build'
        }})
}
