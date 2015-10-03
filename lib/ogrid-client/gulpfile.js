/*
 Gulpfile (Babel + Webpack) from Quickstart
 qkst.io/js/gulpfile-babel-webpack
 */

// npm install --save-dev gulp webpack-stream babel-loader

var gulp = require('gulp');
var webpack = require('webpack-stream');
var webserver = require('gulp-webserver');

function pack(entry, root, fileName, libraryName) {
    return gulp.src(entry)
        .pipe(webpack({
            resolve: {
                root: __dirname + "/" + root,
                fallback: __dirname + 'node_modules'
            },
            output: {
                library: libraryName,
                filename: fileName,
                libraryTarget: 'amd' // our client wants to load our library via AMD
            },
            module: {
                loaders: [{
                    loader: 'babel-loader'
                }]
            }
        }))
}

gulp.task('build', function () {
    //noinspection JSUnresolvedVariable
    return [
        pack('src/main/ogrid.js', 'src/main', 'ogrid-client.js', 'ogrid').pipe(gulp.dest('./dist')),
        pack('src/test/simple/index.js', 'src/test/simple', 'ogrid-test.js', 'ogrid-test').pipe(gulp.dest('./dist/test'))
    ];
});

gulp.task('default', ['build']);

gulp.task('server', function () {
    gulp.src('dist/test')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});