import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import gulpAutoprefixer from 'gulp-autoprefixer';

const sass =gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss)
        .pipe(app.plugins.gulpPlumber({
            errorHandler: app.plugins.gulpNotify.onError(err => {
                return {
                    title: 'scss error',
                    message: err.message
                }
            })
        }))
        .pipe(app.plugins.gulpSourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulpAutoprefixer({
            overrideBrowserslist: ['last 3 versions'],
        }))
        .pipe(app.plugins.gulpSourcemaps.write())
        .pipe(app.gulp.dest(app.path.build.cssFolder))
        .pipe(app.plugins.browserSync.stream())
}