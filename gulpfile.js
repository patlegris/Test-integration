/***************************************************************************/
/*                                                                         */
/* gulp start ->               Lancer le projet                            */
/*                                                                         */
/***************************************************************************/
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('css', function () {
    return gulp.src(['./css/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

// gulp.task('html', function buildHTML() {
//     return gulp.src(['./views/src/index.pug'])
//         .pipe(pug(
//             {
//                 pretty: true
//             }
//         ))
//         .pipe(gulp.dest('./views/dist'));
// });


gulp.task('watch', ['css'], function(){

    gulp.watch([
            './css/*.scss',
        ], ['css']).on('change', browserSync.reload);

    // gulp.watch([
    //         './views/src/*.pug',
    //         './views/src/layout/*.pug',
    //         './_components/**/*.pug'
    //     ], ['html']).on('change', browserSync.reload);

});


gulp.task('start', ['watch'], function() {
  browserSync.init({
    server: {
      baseDir: "./",
      directory: true,
        stream: false
    }
  })
});