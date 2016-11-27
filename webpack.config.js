const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path =  require('path');

module.exports = {
	context: path.join(__dirname, 'src'),
    entry: {
   build:  './js/main',
   // vendor: './js/file2',
   common: "./js/common"
   // style: './src/css/main.css'
   },
    output: {
    	path: __dirname + '/dist',
        filename: '[name].js',
        library: "app"
        // chunkFilename: "[id].js"
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
aggregateTimeout: 100
    },

     module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel?presets[]=es2015",
        include: path.join(__dirname, 'src/js'),
        exclude:  [/(node_modules|bower_components)/],
        cacheDirectory: true,
        // include: __dirname + '/src/js'
       
        //  query  : {
        //   presets: [ 'es2015' ]
        // }

      },


        {	test: /\.css$/,
         loader: ExtractTextPlugin.extract("style-loader", "css-loader") }

    ]
  },
   resolve: {
    	modulesDirectories: ['node_modules'],
    	 extensions: ['', '.js', '.jsx']
    },

    resolveLoader: {
modulesDirectories: ['node_modules'],
    	 extensions: ['', '.js', '.jsx'],
    	 moduleTemplates: ["*-webpack-loader", "*-web-loader", "*-loader", "*"]
    },

    devtool: NODE_ENV == 'development' ? 'cheap-module-source-map': null,
    // devtool: 'source-map',

     plugins: [
        new ExtractTextPlugin("[name].css"),
        // new webpack.optimize.UglifyJsPlugin({
        // compress: {
        //   // don't show unreachable variables etc
        //   warnings:     false,
        //   drop_console: false,
        //   unsafe:       true
        // }
        // }),
        
        new webpack.NoErrorsPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      minChunks: 2
       }),

        new webpack.ProvidePlugin({
          $: "jquery",
          _: "underscore"

        }),
         new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG:     JSON.stringify('ru')
    })
    ],

noParse: [/node_modules\/(underscore|jquery|angular|backbone)/]

  };


  if (NODE_ENV == 'production') {
  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // don't show unreachable variables etc
          warnings:     false,
          drop_console: true,
          unsafe:       true
        }
      })
  );
}