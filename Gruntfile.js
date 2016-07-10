module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: ['themes/zurb_foundation/STARTER/js/*.js'],
        dest: 'themes/zurb_foundation/js/script.js'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed',
          //ncludePaths: ['scss'],
        },
        files: {
          'css/main.min.css': 'css/scss/init.scss',
          'themes/zurb_foundation/css/zurb_foundation.min.css': 'themes/zurb_foundation/scss/zurb_foundation.scss',
          //'css/custom.min.css': 'themes/zurb_foundation/STARTER/scss/**/*.scss'
          // 'scss/foundation.scss': 'css/foundation.min.css',
          // 'scss/zurb_foundation.scss': 'css/zurb_foundation.min.css'
        }
      }
    },

    copy: {
      dist: {
        files: [
          {expand: true, cwd: 'bower_components/foundation/css/', src: ['*'], dest: 'css/', filter: 'isFile'},
          {expand: true, cwd: 'bower_components/foundation/js/', src: ['**'], dest: 'js/'},
          {expand: true, cwd: 'bower_components/foundation/scss/', src: ['**'], dest: 'scss/'}
        ]
      }
    },

    watch: {
      grunt: {files: ['Gruntfile.js']},

      sass: {
        files: 'themes/zurb_foundation/STARTER/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['copy', 'sass']);
  
  grunt.registerTask('default', ['build', 'watch']);
};