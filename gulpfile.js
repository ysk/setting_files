var gulp = require('gulp');
var browserSync = require('browser-sync');
var compass = require('gulp-compass');
var reload = browserSync.reload;

// Start the server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// compass
gulp.task('compass', function() {
    gulp.src('sass/**/*.scss').pipe(compass({
            config_file: 'config.rb',
            comments: true,
            css: '_css/',
            sass: 'sass/'
        }))
        .pipe(browserSync.reload({ stream: true }));
});

// watch
gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', function(event) {
        gulp.run('compass');
    });
});

// Reload all Browsers
gulp.task('bs-reload', function() {
    browserSync.reload();
});

gulp.task('default', ['browser-sync', 'compass'], function() {
    gulp.watch("sass/*.scss", ['compass']);
    gulp.watch("*.html").on("change", browserSync.reload);
});


// gulp.task('default', function(){
//     gulp.run('watch');
// });
