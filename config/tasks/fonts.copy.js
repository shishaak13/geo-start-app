module.exports = () => {
    _.gulp.task('fonts:copy', () => {
        _.gulp.src('./source/fonts/**/*')
            .pipe(_.gulp.dest('dist/fonts'))
    });
}