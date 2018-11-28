module.exports = () => {
    _.gulp.task('images', () => {
        _.gulp.src('./source/images/**/*')
            .pipe(_.gulp.dest('dist/images'))
    });
}