var path = require('path');
var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');

module.exports = {
  cache: true,
  entry: {
    bundle: ['./src/app'],
    // TODO - setup testing suite
    tests: 'mocha!./src/tests',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].js',
  },
  module: {
    loaders: [
			{ test: /\.css$/,   loader: 'style!css' },
      { test: /\.scss$/,  loader: 'style!css!sass?sourceMap' },
      { test: /\.jsx?$/,  loader: 'babel',                      exclude: /(node_modules|test.jsx?$)/ },
      { test: /\.json$/,  loader: 'json',                       exclude: /node_modules/ },
      {
        test: /\.html$/,
        loader: `handlebars-loader?helperDirs[]=${__dirname}/src/handlebars-helpers`,
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      'src/game_modules',
      'src/ui_modules',
    ],
  },
	plugins: [
		new webpack.ProvidePlugin({
			// Automtically detect jQuery and $ as free var in modules
			// and inject the jquery library
			// This is required by many jquery plugins
			jQuery: 'jquery',
			$: 'jquery',
		}),
    new Clean(['dist'])
	],
};
