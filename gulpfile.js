const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create();
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

//слежка
function watch(){
    gulp.watch(paths.styles.src,styles),
    gulp.watch(paths.templates.src,templates)
    gulp.watch(paths.scripts.src,scripts)
}

//живой сервер

function server(){
    browserSync.init({
        server:paths.root
    });
    browserSync.watch(paths.root+
    '/**/*.*', browserSync.reload);
}


const paths = {
    root:'./build',
    templates:{
        pages:'src/templates/pages/*.pug',
        src:'src/templates/**/*.pug',
        dest:'build/assets/'
    },
    styles:{
        src:'src/scss/**/*.scss',
        main: 'src/scss/main.scss',
        dest:'build/assets/styles'
    },
    scripts:{
        src:'src/js/**/*.js',
        main:'src/scripts/app.js',
        dest:'build/assets/scripts'
    }
}

//pug
function templates(){
    return gulp.src(paths.templates.pages)
    .pipe(pug({pretty:true}))
    .pipe(gulp.dest(paths.root));
}

//scss
function styles(){
    return gulp.src(paths.styles.main)
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(sourcemaps.write())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest(paths.styles.dest));
}

//clean
function clean(){
    return del(paths.root);
}

//webpack
function scripts(){
    return gulp.src(paths.scripts.main)
    .pipe(gulpWebpack(webpackConfig,webpack))
    .pipe(gulp.dest(paths.scripts.dest))
}

gulp.task('default',gulp.series(
    clean,
    gulp.parallel(styles,templates,scripts),
    gulp.parallel(watch, server)
))

exports.templates = templates;
exports.styles = styles;
exports.clean = clean;

