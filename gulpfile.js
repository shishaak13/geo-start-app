global._ = {
    gulp: require('gulp'),
    delete: require('del'),
    bSync: require('browser-sync').create(),
    webpack: require('webpack-stream'),
    glp: require('gulp-load-plugins')({
        rename: {
            'gulp-replace-task': 'replaceTask'
        }
    }),
    handlebars: require('gulp-compile-handlebars'),
    tasks: require('./config/path.json').tasks,
    dev: process.argv[2] == '--dev' ? true : false,
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
        'fonts:copy',
        'scripts',
        'vendor:css',
        'vendor:js',
        'server',
        'watch'
    )
));
