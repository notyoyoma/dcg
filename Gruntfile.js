module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        sourceMap: true,
        sourceMapIncludeSources: true,
        preserveComments: 'all'
      },
      lib: {
        files: {
          'dist/js/libs.js': [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/angular/angular.js',
            'node_modules/golden-layout/dist/goldenlayout.js',
            'node_modules/rpg-tools/lib/*.js',
          ]
        }
      },
      app: {
        files: {
          'dist/js/app.js': [ 'src/js/**/*.js' ],
        }
      }
    },
    concat_css: {
      libs: {
        dest: 'dist/libs.css',
        src: [
          'node_modules/golden-layout/src/css/goldenlayout-base.css',
          'node_modules/golden-layout/src/css/dark-theme.css',
        ]
      }
    },
    sass: {
      build: {
        files: {
          'dist/app.css': 'src/scss/main.scss',
        },
        options: {
          style: 'expanded',
          loadPath: [ 'node_modules' ]
        }
      }
    },
    copy: {
      html: {
        files: [{
          flatten: true,
          expand: true,
          src: 'src/html/*.html',
          dest: 'dist/'
        }]
      }
    },
    watch: {
      css: {
        files: 'src/scss/**/*.scss',
        tasks: 'sass',
      },
      js: {
        files: 'src/**/*.js',
        tasks: 'uglify:app'
      },
      html: {
        files: 'src/html/*.html',
        tasks: 'copy:html'
      }
    },
    'http-server': {
      dev: {
        root: 'dist',
        port: 8080,
        host: '0.0.0.0',
      }
    }
  });

  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('build', ['uglify', 'concat_css', 'sass', 'copy']);
  grunt.registerTask('serve', ['build', 'http-server']);

  // use the default task for development
  grunt.registerTask('default', ['build', 'watch']);

};
