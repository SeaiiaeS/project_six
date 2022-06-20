import browserSync from "browser-sync";
import gulpPlumber from "gulp-plumber";
import gulpNotify from "gulp-notify";
import gulpNewer from "gulp-newer";
import gulpSourcemaps from "gulp-sourcemaps";

export const plugins = {
    browserSync: browserSync.create(),
    gulpNewer: gulpNewer,
    gulpPlumber: gulpPlumber,
    gulpNotify: gulpNotify,
    gulpSourcemaps: gulpSourcemaps
}