// var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: __dirname + '/src',
    entry: {
   build:  './js/main',
   vendor: './js/file2'
   // style: './src/css/main.css'
   },
    output: {
    	path: __dirname + '/dist',
        filename: '[name].js',
        library: "[name]"
        // chunkFilename: "[id].js"
    },

     module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/,
         query  : {
          presets: [ 'es2015' ]
        }

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

     plugins: [
        new ExtractTextPlugin("[name].css"),
        // new webpack.optimize.UglifyJsPlugin()
    ]

  };