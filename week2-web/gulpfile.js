const gulp = require('gulp')
const Sass = require('gulp-sass')
const server = require('gulp-webserver')

//开发
//编译sass
gulp.task('devSass', () => {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(Sass())
        .pipe(gulp.dest('./src/css'))
})

//起服务
gulp.task('server', () => {
    return gulp.src('./src')
        .pipe(server({
            port: 8080,
            livereload: true,
            proxies: [{
                source: "/get",
                target: 'http://localhost:3000/get'
            }, {
                source: "/getfind",
                target: 'http://localhost:3000/getfind'
            }, {
                source: "/getapp",
                target: 'http://localhost:3000/getapp'
            }]
        }))
})

//监听sass
gulp.task('watch', () => {
    return gulp.watch('./src/scss/**/*.scss', gulp.series('devSass'))
})

gulp.task('dev', gulp.series('devSass', "server", "watch"))