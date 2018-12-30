module.exports = () => {
    _.gulp.task('images', (done) => {
        _.gulp.src('./source/images/**/*')
            .pipe(_.gulp.dest('dist/images'))
        done();
    });
}