//grunt基于node模块化的 common.js
//Gruntfile.js是一个模块
module.exports = function (grunt) {
  //当我执行这个模块时，默认会注入一个参数 grunt
  // 1. 初始化插件配置
  grunt.initConfig({
    //grunt的所有操作都得在这里面配置
    concat: {          //任务名
      options: {       //配置选项
        separator: ';',   //分隔符
      },
      dist: {
        src: ['src/js/*.js'],   //放置合并的文件
        dest: 'build/js/built.js',    //合并后输出在哪
      },
    },
    pkg: grunt.file.readJSON('package.json'),   //读取package.json文件
    uglify: {    //压缩代码
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      dist: {
        files: {
          'dist/js/dist.min.js': ['build/js/built.js']
        }
      }
    }
  })
  // 2. 加载插件任务
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // 3. 注册构建任务
  grunt.registerTask('default', ['concat', 'uglify'])  //放置所有要执行的任务，执行顺序从左到右
}

