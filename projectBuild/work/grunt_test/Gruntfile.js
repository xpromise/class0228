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
          'dist/js/dist.min.js': ['build/js/built.js']  // 输出文件: [输入文件]
        }
      }
    },
    jshint: {   //语法错误检查
      options: {   //配置需要检查的项目
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        // undef: true,    //未定义的变量不能使用
        unused: true,   //定义的变量没有使用
        asi: true,      //语句后面必须有分号
        globals: {      //忽略检查的变量
          jQuery: true,
          module: true,
          console: true
        },
      },
      all: ['Gruntfile.js', 'src/js/*.js']
    },
    less: {
      production: {
        options: {
          paths: ['build/css'],
          plugins: [   //less插件依赖某些插件
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})  //加css属性前缀
          ]
        },
        files: {
          'build/css/built.css': 'src/less/*.less'
        }
      }    //生产
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,  //不用快速压缩（快速压缩可能会导致某种问题）
        roundingPrecision: -1    //不用四舍五入
      },
      target: {
        files: {
          'dist/css/dist.min.css': ['build/css/*.css']
        }
      }
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,       //删除注释
          collapseWhitespace: true    //删除空格
        },
        files: {                                   // Dictionary of files
          'dist/index.min.html': 'index.html',     // 'destination': 'source'
        }
      }
    },
    watch: {
      scripts: {       //监视js的任务
        files: ['src/js/*.js', 'Gruntfile.js'],   //监视的文件
        tasks: ['jshint', 'concat', 'uglify'],    //一旦监视的文件发生变化，就会执行tasks列表的任务
        options: {
          spawn: false
        },
      },
      css: {
        files: 'src/less/*.less',
        tasks: ['less', 'cssmin'],
        options: {
          spawn: false
        },
      },
      html: {
        files: 'index.html',
        tasks: ['htmlmin'],
        options: {
          spawn: false
        },
      }
    },
  });
  // 2. 加载插件任务
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // 3. 注册构建任务  同步执行任务
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'less', 'cssmin', 'htmlmin']); //放置所有要执行的任务，执行顺序从左到右
  
  grunt.registerTask('myWatch', ['default', 'watch']);
};


/*
  语法检查：
    jslint
    jshint
    eslint
 */