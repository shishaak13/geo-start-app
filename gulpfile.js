global._ = {
    gulp: require('gulp'),
    delete: require('del'),
    bSync: require('browser-sync').create(),
    webpack: require('webpack-stream'),
    tasks: require('./config/path.json').tasks,
    dev: process.env.NODE_ENV == 'development' ? true : false,
    glp: require('gulp-load-plugins')({
        rename: {
            'gulp-replace-task': 'replaceTask'
        }
    })
}

for (const key in _.tasks) {
    require(_.tasks[key])();
}

_.gulp.task('default', _.gulp.series(
    'clean',
    _.gulp.parallel(
        'handlebars',
        'scss',
        'images',
        'sprite:svg',
        'fonts:copy',
        'scripts',
        'vendor:css',
        'vendor:js',
        'server',
        'watch'
    )
));

_.gulp.task('build',
    _.gulp.series(
        'clean',
        _.gulp.parallel(
            'handlebars',
            'scss',
            'images',
            'sprite:svg',
            'fonts:copy',
            'scripts',
            'vendor:css',
            'vendor:js'
        )
    )
);
