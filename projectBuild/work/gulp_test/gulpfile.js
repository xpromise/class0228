//1. 引入模块
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var pkg = require('./package');   //引入package.json文件
var jshintConfig = pkg.jshintConfig;  //拿到package.json中的属性


//2. 配置/定义任务
/*
  回调函数中指定return的话  方法就是异步的
  如果没有指定return  方法就是同步
 */
gulp.task('jshint', function () {   //语法检查的任务
  //任务的具体内容
  return gulp.src('src/js/*.js')   //将指定文件加载到内存中（数据流）
    .pipe(jshint(jshintConfig))   //语法检查
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

gulp.task('less', function () {
  return gulp.src('src/less/*.less')
    .pipe(less({plugins: [autoprefix]}))
    .pipe(rename('built.css'))
    .pipe(gulp.dest('build/css'))
})

gulp.task('css', ['less'], function () {
  return gulp.src('build/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))  //兼容ie8
    .pipe(rename('dist.min.css'))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('dist'));
});


//3. 应用任务
gulp.task('default', ['js', 'css', 'html']);