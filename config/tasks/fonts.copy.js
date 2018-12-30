module.exports = () => {
    _.gulp.task('fonts:copy', (done) => {
        _.gulp.src('./source/fonts/**/*')
            .pipe(_.gulp.dest('dist/fonts'))
        done();
    });
}