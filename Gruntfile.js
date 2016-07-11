module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-postcss'); // not sure why this is needed

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'expanded',
        },
        files: {
          'css/2016.css': 'scss/2016.scss'
        }
      }
    },
    babel: {
      options: {
        presets: ['es2015'],
        sourceMap: true
      },
      dist: {
        'files': { 'js/2016.min.js': 'js/2016.js' }
      }
    },
    eslint: {
      options: {
        configFile: '.eslintrc'
      },
      target: ['js/_2016.js']
    },
    concat: {
      options: {
        sourceMap: true,
        sourceMapStyle: 'link'
      },
      js: {
        src: [
          'js/_2016.js',
        ],
        dest: 'js/2016.js'
      }
    },
    postcss: {
      //lint: {
        options: {
          syntax: require('postcss-scss'),
          processors: [
            require("stylelint")({
              "extends": [
                "stylelint-config-standard",
              ],
              "plugins": [
                "stylelint-statement-max-nesting-depth",
              ],
              "rules": {
                "statement-max-nesting-depth": [3, { countAtRules: false }],
                "string-quotes": "single",
                "selector-no-id": true,
                "color-hex-case": "lower",
                "number-leading-zero": "never",
                "property-no-vendor-prefix": true,
                "declaration-bang-space-after": "never",
                "declaration-bang-space-before": "always",
                "declaration-colon-space-after": "always",
                "declaration-no-important": true,
                "selector-combinator-space-after": "always",
                "selector-combinator-space-before": "always",
                "selector-pseudo-element-colon-notation": "single",
                "rule-nested-empty-line-before": "always",
                "declaration-block-properties-order": "alphabetical"
              }
            }),
            require("postcss-reporter")({ clearMessages: true })
          ]
        },
        dist: {
          src: 'scss/**/*.scss'
        }
      //}
    },
    autoprefixer: {
      options: {
        browsers: ['> 1%', 'last 2 versions', 'ie 9'],
        remove: false
      },
      dist: {
        src: 'css/2016.css',
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['postcss', 'sass', 'autoprefixer'],
        options: {
          livereload: true
        }
      },
      babel: {
        files: 'js/_2016.js',
        tasks: ['concat', 'babel']
      },
    }
  });

  grunt.registerTask('new-build', ['newer:jshint:all','newer:uglify:dist','newer:sass:dist','newer:autoprefixer:dist']);
  grunt.registerTask('new', ['new-build', 'watch']);

  grunt.registerTask('build', [/*'eslint',*/ 'concat', 'babel','postcss','sass','autoprefixer']);
  grunt.registerTask('default', ['build', 'watch']);
};
