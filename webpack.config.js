var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path =  require('path');

module.exports = {
	context: path.join(__dirname, 'src'),
    entry: {
   build:  './js/main',
   vendor: './js/file2'
   // style: './src/css/main.css'
   },
    output: {
    	path: __dirname + '/dist',
        filename: '[name].js',
        library: "app"
        // chunkFilename: "[id].js"
    },

    watch: true,

    watchOptions: {
aggregateTimeout: 100
    },

     module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel?presets[]=es2015",
        exclude: /node_modules/,
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

    // devtool: 'cheap-module-source-map',
    devtool: 'source-map',

     plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.UglifyJsPlugin({
        compress: {
          // don't show unreachable variables etc
          warnings:     false,
          drop_console: false,
          unsafe:       true
        }
        }),
        
        new webpack.NoErrorsPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
      name: "common" })
    ]

  };