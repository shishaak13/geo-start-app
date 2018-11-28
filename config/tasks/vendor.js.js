module.exports = () => {
    _.gulp.task('vendor:js', () => {
        _.gulp.src(require('../path.json').vendorJs)
            .pipe(_.glp.concat('vendors.js'))
            .pipe(_.glp.uglify())
            .pipe(_.glp.rename({ suffix: '.min' }))
            .pipe(_.gulp.dest('dist/js'))
    });
}