//1. 引入模块
var gulp = require('gulp');
/*var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');*/
var $ = require('gulp-load-plugins')();
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
var open = require('open');
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
    .pipe($.jshint(jshintConfig))   //语法检查
    .pipe($.jshint.reporter('default'))  //语法检查的报错规则
    // .pipe(livereload())
    .pipe($.connect.reload())
})

gulp.task('js', ['jshint'], function () {   //['jshint']必须先执行，再执行本身的回调函数
  return gulp.src('src/js/*.js')
    .pipe($.concat('built.js', {newLine: ';'}))     //合并后的文件名
    .pipe(gulp.dest('build/js'))   //将数据流输出到指定路径
    .pipe($.uglify())     //将数据流文件压缩
    .pipe($.rename({basename: 'dist', suffix: '.min'}))  //将数据流文件改名
    .pipe(gulp.dest('dist/js'))
    // .pipe(livereload())
    .pipe($.connect.reload())
  
})

gulp.task('less', function () {
  return gulp.src('src/less/*.less')
    .pipe($.less({plugins: [autoprefix]}))
    .pipe($.rename({extname: '.css'}))
    .pipe(gulp.dest('build/css'))
    // .pipe(livereload())
    .pipe($.connect.reload())
  
})

gulp.task('css', ['less'], function () {
  return gulp.src('build/css/*.css')
    .pipe($.concat('dist.min.css'))
    .pipe($.cssmin())  //兼容ie8
    .pipe(gulp.dest('dist/css'))
    // .pipe(livereload())
    .pipe($.connect.reload())
  
})


gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe($.htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('dist'))
    // .pipe(livereload())
    .pipe($.connect.reload())
  
});

/*gulp.task('watch', ['default'], function () {
  //开启监听
  livereload.listen();
  //监听的任务
  gulp.watch('src/js/!*.js', ['js']);   //监听指定文件，一旦发生改变，就会启动后面的任务
  gulp.watch('src/less/!*.less', ['css']);
  gulp.watch('index.html', ['html']);
})*/
//热更新/热加载
gulp.task('hotReload', ['default'], function () {
  $.connect.server({
    root: 'dist',     //根目录路径
    port: 8001,       //开启服务器的端口号
    livereload: true  //热更新
  });
  //打开指定网页
  open('http:localhost:8001');
  //监听的任务
  gulp.watch('src/js/*.js', ['js']);   //监听指定文件，一旦发生改变，就会启动后面的任务
  gulp.watch('src/less/*.less', ['css']);
  gulp.watch('index.html', ['html']);
});

//3. 应用任务
gulp.task('default', ['js', 'css', 'html']);

// gulp.task('myWatch', ['default', 'watch']);
//
// gulp.task('myHotReload', ['default', 'hotReload']);