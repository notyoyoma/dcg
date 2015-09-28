module.exports = function(grunt) {
  var environment = grunt.file.exists('environment.json') ? grunt.file.readJSON('environment.json') : {};
  var node_dir = '../node_modules/';

  var webpack = require('webpack');
  var merge = require('merge');

  var webpackConfig = require('./webpack.config.js');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
      options: webpackConfig,
      build: {
        plugins: webpackConfig.plugins.concat(
          new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('production')
            }
          }),
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.UglifyJsPlugin()
        )
      },
      'build-dev': {
        devtool: 'sourcemap',
        debug: true,
      }
    },
    'webpack-dev-server': {
      options: {
        webpack: webpackConfig,
        publicPath: '/dist/'
      },
      start: {
        keepalive: true,
        watch: true,
        webpack: {
          devtool: 'sourcemap',
          debug: true,
        },
      },
    },
    'http-server': {
      serve: {
        root: './',
        port: 8080,
        host: '0.0.0.0',
      },
    },
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('dev', ['webpack-dev-server']);
  grunt.registerTask('dev-build', ['webpack:build-dev', 'http-server']);
  grunt.registerTask('prod', ['webpack', 'http-server']);

  // use the default task for development
  if (environment.production) {
    grunt.registerTask('default', [ 'prod' ]);
  } else {
    grunt.registerTask('default', [ 'dev' ]);
  }

};
