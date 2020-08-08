const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	module: {
		rules: [{
			test: /\.(jpg|png|gif)$/,
			use: [{
				loader: 'url-loader',
				options: {
					//这种语法就是placeholder
					name: '[name]_[hash].[ext]',
					outputPath: 'images',
					limit: 10240
				}
			}] 
		}]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}