//1. 引入模块
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//2. 配置/定义任务
gulp.task('jshint', function () {   //语法检查的任务
  //任务的具体内容
  return gulp.src('src/js/*.js')   //将指定文件加载到内存中（数据流）
    .pipe(jshint())   //语法检查
    .pipe(jshint.reporter('default'))  //语法检查的报错规则
})

gulp.task('js', ['jshint'], function () {   //['jshint']必须先执行，再执行本身的回调函数
  return gulp.src('src/js/*.js')
    .pipe(concat('built.js', {newLine: ';'}))     //合并后的文件名
    .pipe(gulp.dest('build/js'))   //将数据流输出到指定路径
    .pipe(uglify())     //将数据流文件压缩
    .pipe(rename({basename: 'dist', suffix: '.min'}))  //将数据流文件改名
    .pipe(gulp.dest('dist/js'))
})


//3. 应用任务
gulp.task('default', ['js']);