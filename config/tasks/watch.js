module.exports = () => {
    _.gulp.task('watch', () => {
        _.gulp.watch('./source/sass/**/*.scss', _.gulp.series('scss'));
        _.gulp.watch('./source/view/**/*.hbs', _.gulp.series('handlebars'))
            .on("change", _.bSync.reload);
        _.gulp.watch('./source/js/**/*.js', _.gulp.series('scripts'))
            .on("change", _.bSync.reload);
    });
};