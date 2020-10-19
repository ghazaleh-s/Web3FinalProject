const {src,dest,watch,series,parallel}  = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

const browserSync = require('browser-sync').create();


///////////////////////////////////////////


const input  = {
    sassPath : 'src/scss/**/*.scss',
    jsPath : 'src/js/**/*.js',
    tsPath : 'src/ts/**/*.ts'
}


const output = {
    cssPath : 'dist/css',
    jsPath : 'dist/js' ,
    tsPath : 'dist/ts'
}


//////////////////////////////////////////

function sassTask(){
    return src(input.sassPath)
        .pipe(sass())
/*
        .pipe(cssnano())
*/
        .pipe(dest(output.cssPath))
        .pipe(browserSync.stream());

}


function jsTask(){
    return src(input.jsPath)
        // .pipe(concat('all.js'))

        .pipe(dest('dist/js'))
}


function tsTask(){
    return tsProject.src()
        .pipe(tsProject()).js
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest(output.jsPath))

}



function watchTask(){
   browserSync.init({
        server : {
            baseDir : './'
        }
    })
    watch([input.sassPath,input.jsPath],
        parallel(sassTask,jsTask));

    watch('./!**!/!*.html').on('change',browserSync.reload);

}


//////////////////////////////////////////

exports.default = series(
    parallel(sassTask,jsTask),
    watchTask
);