module.exports = function(grunt) {
	//初始化配置插件任务
	grunt.initConfig({
		concat: {
			options: {
				separator: ';',//连接符 ;
			},
			dist: {
				src: ['src/js/*.js'],//找目标原文件
				dest: 'build/js/build.js',//输出的文件路径及文件名字
			},
		},
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			build: {
				files: {
					'build/js/build.min.js': ['build/js/build.js']
				}
			}
		},
		jshint : {
			options: {
				jshintrc : '.jshintrc' //指定配置文件
			},
			build : ['Gruntfile.js', 'src/js/*.js'] //指定检查的文件
		},
		cssmin:{
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			build: {
				files: {
					'build/css/build.min.css': ['src/css/*.css']
				}
			}
		},
		watch : {
			scripts : {
				files : ['src/js/*.js', 'src/css/*.css'],
				tasks : ['concat', 'jshint', 'uglify', 'cssmin'],
				options : {spawn : false}//增量更新---全量更新
			}
		}
	});
	//加载插件
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//注册默认任务  grunt执行任务  同步
	grunt.registerTask('default', ['concat', 'uglify', 'jshint', 'cssmin']);
	grunt.registerTask('myWatch', ['default', 'watch']);

};