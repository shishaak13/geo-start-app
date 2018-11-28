const content = require('../content.json');

content.dev = _.dev;

module.exports = () => {
    _.gulp.task('handlebars', function () {
        let options = {
            ignorePartials: true,
            batch: ['./source/view/partials'],
        }

        return _.gulp.src('./source/view/*.hbs')
            .pipe(_.handlebars(content, options))
            .pipe(_.glp.rename((path) => {
                path.extname = '.html'
            }))
            .pipe(_.gulp.dest('dist'));
    });
}