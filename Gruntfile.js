module.exports = function(grunt) {
 
    grunt.initConfig({
 
        // Our JSHint options
        jshint: {
        	options: {
            	reporter: require('jshint-stylish'),
            	strict: false
        	},
        	// Files to lint
            all: ['js/*.js', 'js/controllers/*.js', 'js/models/*.js', 'js/templates/*.js', 'js/views/*.js'] 
        },

        // Our Browserify options
		browserify: {
			app: {
				files: {
					'js/app.bundle.js': ['js/app.js'],
				},
				options: {
					transform: ['jstify']
				}
			}
		},   

	    // Our Uglify options
	    uglify: {
	        js: {
	            files: {
	            	// Create minified/obfuscated version.
	                'js/app.bundle.min.js': ['js/app.bundle.js'] 
	            }
	        }
	    },

	    // Our CSSMin options
		cssmin: {
			combine: {
				files: {
				  'css/styles.css': ['css/main.css', 'css/normalize.css']
				}
			}
		},
 
		// Our LESS options
		less: {
		    production: {
		        files: {
		            "css/main.css": "css/main.less"
		        }
		    }
		},

		// Our Watch options
		watch: {
			css: {				
		    	files: "css/**/*.less",
		    	tasks: ["less"]
		    },
		    scripts: {
		    	files: ["js/**/*.js", "!js/app.bundle.js"],
		    	tasks: ["browserify"]
		    }
		}			  

    });

    // Load our tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    // Default tasks to run
    grunt.registerTask('default', ['jshint', 'browserify', 'uglify', 'cssmin', 'less']);

    // Development tasks.
	grunt.registerTask('dev', ['jshint', 'browserify', 'less', 'cssmin']);
	// Production tasks.
	grunt.registerTask('prod', ['jshint', 'browserify', 'uglify', 'less', 'cssmin']);    
}