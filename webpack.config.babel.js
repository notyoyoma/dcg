import path from 'path';
import fs from "fs";
import bodyParser from "body-parser";
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin';

const rule = (test, use, ...args) => {
  const {exclude=/node_modules/, ...otherArgs} = args;
  return {test, use, exclude, ...otherArgs}
};

let conf = {
  cache: true,
  entry: {
    app: './src/main.js',
    admin: './src/admin/app.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
  module: {
    rules: [
      rule(/\.vue$/, 'vue-loader'),

      rule(/\.scss$/, ['vue-style-loader','css-loader','sass-loader']),
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
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
    extensions: ['.vue', '.js', 'scss'],
    modules: ['src', 'node_modules'],
    alias: {
      '~': './src',
      vue: 'vue/dist/vue.js',
    }
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: 'index.html' },
        { from: /^\/admin.*/, to: '/admin/index.html' },
      ]
    },
    noInfo: true,
    overlay: true,
    before: app => { 
      app.use(bodyParser.json());
      app.post("/data/*", (req, res, next) => {
        const filename = path.basename(req.url);
        fs.writeFile(`./data/${filename}`, JSON.stringify(req.body, null, 2), "utf8", (err)=>{
          if (err) throw err;
          console.log(`${filename} has been saved!`);
          res.json({success: true});
          next();
        });
      });
    },
    proxy: {
      pathRewrite: {
        '^/data': '/data',
      }
    }
  },
  devtool: 'eval-source-map',
	plugins: [
		new webpack.ProvidePlugin({
      _: 'lodash',
      "$": 'jquery',
      keymage: 'keymage',
		}),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      chunks: ['admin'],
      filename: 'admin/index.html',
      template: 'index.html',
    }),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackHarddiskPlugin(),
	],
};

export default conf;
