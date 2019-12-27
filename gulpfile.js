var gulp = require('gulp')
var browserSync =require('browser-sync')

gulp.task('browser-sync', function(done) {
    browserSync({
        server: {
            baseDir: "./dev/", 
            index  : "index.html",
        }
    })
    done()
})

//
//ブラウザリロード
//
gulp.task('bs-reload', function (done) {
    browserSync.reload()
    done()
})

//
//監視ファイル
//
gulp.task('watch', gulp.series( gulp.parallel('browser-sync'), function () {
    gulp.watch("./dev/*.html",          gulp.task('bs-reload'));
    gulp.watch("./dev/js/*.js",     gulp.task('bs-reload'));
}));

gulp.task('default', gulp.series( 'watch', 'browser-sync'))