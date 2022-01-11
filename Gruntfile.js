module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			css: {
				src: 'dest/assets/css/bundle.css',
				dest: 'dest/assets/css/bundle.min.css'
			}
		},
    uglify: {
        options: {
            mangle: false.valueOf,
            compress: {
                drop_console: true
            }            
        },
        my_target: {
          files: {
            'dest/assets/js/main.js': [
              'src/assets/vendor/purecounter/purecounter.js',
              'src/assets/vendor/aos/aos.js',
              'src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
              'src/assets/vendor/glightbox/js/glightbox.min.js',
              'src/assets/vendor/isotope-layout/isotope.pkgd.min.js',
              'src/assets/vendor/swiper/swiper-bundle.min.js',
              'src/assets/vendor/typed.js/typed.min.js',
              'src/assets/vendor/waypoints/noframework.waypoints.js',
              'src/assets/vendor/php-email-form/validate.js',
              'src/assets/js/main.js',
            ]
          }
        }
    },

    htmlmin: {                                     // Task
        dist: {                                      // Target
          options: {                                 // Target options
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                                   // Dictionary of files
            'dest/index.html': 'src/index.html',     // 'destination': 'source'
          }
        },
    },

    copy: {
      imgs:{
        files: 
        [{
            cwd: 'src/assets/img',  // set working folder / root to copy
            src: '**/*',           // copy all files and subfolders
            dest: 'dest/assets/img',    // destination folder
            expand: true           // required when using cwd
        }],
      },
      vendor:{
        files:[{
          cwd: 'src/assets/vendor',  // set working folder / root to copy
          src: '**/*',           // copy all files and subfolders
          dest: 'dest/assets/vendor',    // destination folder
          expand: true           // required when using cwd
        }]
      },
    },

    concat_css: {
      options: {
        // Task-specific options go here.
      },
      all: {
        src: [
          "src/assets/css/style.css",
        ],
        dest: "dest/assets/css/style.css"
      },
    },
   
       
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadNpmTasks('grunt-concat-css');

  const tasks = ["copy","concat_css","cssmin","uglify","htmlmin"];
  //const tasks = ["copy","concatBlocks"];
  grunt.registerTask('default', tasks );

  //grunt.registerTask('serve', ["connect",...tasks] );
}