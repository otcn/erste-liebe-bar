module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'dist/assets/css/main.css': ['src/main.scss']
				}
			}
		},
		
		terser: {
			dist: {
				files: {
					'dist/assets/js/main.min.js': ['src/main.js']
				},
				options: {
					warnings: 'false'
				}	
			},
		},

		watch: {
			css: {
				files: 'src/*.scss',
				tasks: ['sass'],
				options: {
					livereload: true,
				},
			},
			
			js: {
				files: 'src/*.js',
				tasks: ['terser'],
				options: {
					livereload: true,
				},
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-terser');
	grunt.registerTask('default', ['sass', 'terser']);
};