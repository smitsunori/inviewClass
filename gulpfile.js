var gulp = require('gulp');
var browserSync =require('browser-sync');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('browser-sync', function(done) {
    browserSync({
        server: {
            baseDir: "./dev/", 
            index  : "index.html",
        }
    })
    done()
});

//minify
gulp.task('file-sync', function(done){
    console.log('=========== minify ============');

    gulp.src(['./dev/index.html'])
        .pipe(gulp.dest('./docs/'))
    gulp.src(['./dev/js/*.js', '!./dev/js/*.min.js'])
        .pipe(gulp.dest('./dest/'))
        .pipe(gulp.dest('./docs/js'))
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('./dest/'));
    done()
})

//reload
gulp.task('bs-reload', function (done) {
    browserSync.reload()
    done()
})

//watch
gulp.task('watch', gulp.series( gulp.parallel('browser-sync'), function () {
    gulp.watch("./dev/*.html",      gulp.series('bs-reload', 'file-sync'));
    gulp.watch("./dev/js/*.js",     gulp.series('bs-reload', 'file-sync'));
}));

gulp.task('default', gulp.series( 'watch', 'browser-sync'))