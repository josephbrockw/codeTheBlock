module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    gpkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: 'js/custom/*.js', // input
        dest: 'js/build/app.min.js' // output
      }
    },

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'css/build/main.css': 'css/scss/init.scss'       // 'destination': 'source'
        }
      }
    },

    watch: {
      scripts: {
        files: ['js/custom/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      },

      sass: {
        files: 'css/scss/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  //grunt.registerTask('default', ['uglify', 'sass']);
  grunt.registerTask('default', ['watch']);
};
