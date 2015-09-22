
module.exports = function(grunt) {
  var environment = grunt.file.exists('environment.json') ? grunt.file.readJSON('environment.json') : {};
  var node_dir = '../node_modules/';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
      options: {
        entry: './src/app.js',
        output: {
          filename: 'app.js',
          path: './prod/',
          publicPath: './prod/',
        },
        resolve: {
          alias: {
            'jquery':  node_dir+'jquery/dist/jquery.min.js',
            'angular': node_dir+'angular/angular.min.js',
          }
        },
        module: {
          noParse: [
            node_dir+'angular/angular.min.js',
            node_dir+'jquery/dist/jquery.min.js',
            node_dir+'angular/angular.js',
            node_dir+'jquery/dist/jquery.js',
          ],
          loaders: [
            {
              test: /\.html$/,
              loader: 'html-loader',
            },
            {
              test: /\.scss$/,
              loader: 'sass-loader',
            },
          ],
        },
      }
    },
    'webpack-dev-server': {
      start: {
        webpack: {
          resolve: {
            alias: {
              'jquery':  node_dir+'jquery/dist/jquery.js',
              'angular': node_dir+'angular/angular.js',
            }
          },
          output: {
            path: './dev/',
            publicPath: './dev/',
          },
          watch: true,
          keepalive: true,
          inline: true,
        }
      }
    },
    'http-server': {
      dev: {
        root: 'prod',
        port: 8080,
        host: '0.0.0.0',
      }
    }
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('dev', ['webpack-dev-server']);
  grunt.registerTask('build', ['webpack']);
  grunt.registerTask('prod', ['build', 'http-server']);

  // use the default task for development
  if (environment.production) {
    grunt.registerTask('default', [ 'prod' ]);
  } else {
    grunt.registerTask('default', [ 'dev' ]);
  }

};
