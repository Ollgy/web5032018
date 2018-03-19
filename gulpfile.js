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
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');

//слежка
function watch() {
    gulp.watch(paths.styles.src, styles),
        gulp.watch(paths.templates.src, templates),
        gulp.watch(paths.scripts.src, scripts),
        //gulp.watch(paths.html.src, html),
        gulp.watch(paths.img.src, img),
        gulp.watch(paths.svg.src, sprite)
}

//живой сервер

function server() {
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root +
        '/**/*.*', browserSync.reload);
}

//перемещение html
function html() {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest))
}

//перемещение img
function img() {
    return gulp.src(paths.img.src)
        .pipe(gulp.dest(paths.img.dest))
}

//перемещение img
function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest))
}

const paths = {
    root: './build',
    templates: {
        pages: 'src/templates/pages/*.pug',
        src: 'src/templates/**/*.pug',
        dest: 'build/assets/'
    },
    styles: {
        src: 'src/scss/**/*.scss',
        main: 'src/scss/main.scss',
        dest: 'build/assets/styles'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        main: 'src/scripts/app.js',
        dest: 'build/assets/scripts'
    },
    html: {
        src: './*.html',
        dest: 'build/'
    },
    img: {
        src: 'src/img/**/*',
        dest: 'build/img/'
    },
    svg: {
        src: 'src/img/icons/*.svg',
        dest: 'src/img/'
    },
    fonts: {
        src: 'src/fonts/**/*',
        dest: 'build/assets/fonts/'
    }
}

//pug
function templates() {
    return gulp.src(paths.templates.pages)
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(paths.root));
}

//scss
function styles() {
    return gulp.src(paths.styles.main)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemaps.write())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.styles.dest));
}

//clean
function clean() {
    return del(paths.root);
}

//webpack
function scripts() {
    return gulp.src(paths.scripts.main)
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.scripts.dest))
}

//создание svg-спрайта
const config = {
    mode: {
        symbol: {
            sprite: '../sprite.svg',
            example: {
                dest: '../tmp/spriteSvgDemo.html'
            }
        }
    }
}

function sprite() {
    return gulp.src(paths.svg.src)
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {
                xmlMode: true
            }
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite(config))
        .pipe(gulp.dest(paths.svg.dest))
}

gulp.task('default', gulp.series(
    clean,
    gulp.parallel(styles, scripts, img,fonts),
    templates, 
    gulp.parallel(watch, server)
))

exports.templates = templates;
exports.styles = styles;
exports.clean = clean;
exports.sprite = sprite;

