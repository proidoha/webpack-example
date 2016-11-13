module.exports = {
    entry: './src/js/main.js',
    output: {
    	path: 'dist/',
        filename: 'build.js'
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


        {
        	test: /\.css$/,
        	loader: 'style!css'

        }

    ]
  },
   resolve: {
    	modulesDirectories: ['node_modules'],
    	 // extensions: ['', '.js', '.jsx']
    },

  };