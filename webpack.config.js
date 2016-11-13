var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
   build:  './src/js/main',
   style: './src/css/main.css'
   },
    output: {
    	path: 'dist/',
        filename: '[name].js',
        chunkFilename: "[id].js"
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
        new ExtractTextPlugin("[name].css", {
            allChunks: true
        })
    ]

  };