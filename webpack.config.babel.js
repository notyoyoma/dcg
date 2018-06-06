import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const rule = (test, use, ...args) => {
  const {exclude=/node_modules/, ...otherArgs} = args;
  return {test, use, exclude, ...otherArgs}
};

let conf = {
  cache: true,
  entry: {
    bundle: './src/main.js',
    // TODO - setup testing suite
    // tests: 'mocha!./src/tests',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].js',
  },
  module: {
    rules: [
			rule(/\.css$/,  ExtractTextPlugin.extract({fallback: 'style-loader', use:'css-loader'})),
      rule(/\.scss$/,  ExtractTextPlugin.extract({use:['vue-style-loader','css-loader','sass-loader']})),
      rule(/\.vue$/, 'vue-loader'),
      rule(/\.json$/, 'json'),
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
      },
      {
        test: /\.pug$/,
        oneOf: [
          {resourceQuery: /^\?vue/, use: ['pug-plain-loader']},
          {use: ['raw-loader', 'pug-plain-loader']},
        ],
      }
    ],
  },
  resolve: {
    extensions: [".vue", ".js", ".json"],
    modules: ['src', 'node_modules'],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  devtool: '#eval-source-map',
	plugins: [
		new webpack.ProvidePlugin({
      _: 'lodash',
      Vue: 'Vue',
		}),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(),
    new ExtractTextPlugin("styles.css"),
	],
};

// TODO Production config...

export default conf;
