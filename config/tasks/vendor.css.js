module.exports = () => {
    _.gulp.task('vendor:css', () => {
        _.gulp.src(require('../path.json').vendorCss)
            .pipe(_.glp.concat('vendors.css'))
            .pipe(_.glp.if(!_.dev, _.glp.csso()))
            .pipe(_.glp.if(!_.dev, _.glp.rename({ suffix: '.min' })))
            .pipe(_.gulp.dest('dist/css'))
    });
}
